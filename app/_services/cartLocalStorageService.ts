import { newService } from '@/app/_types/services.types';

export class CartLocalStorageService {
  static items: newService[];

  constructor(private key: string) {
    this.key = key;
  }

  get() {
    const items = localStorage.getItem(this.key);

    if (items) {
      const parsedItems = JSON.parse(items);
      CartLocalStorageService.items = parsedItems as newService[];
      return parsedItems;
    }
    return items;
  }
  set(value: newService) {
    this.get();
    if (!CartLocalStorageService.items) {
      const item = this.setNewItem(value);

      return item;
    }

    const isItemAlreadyExists = this.isItemWithSameIdExists(value.plan.id);

    if (isItemAlreadyExists) {
      const modifiedItems = CartLocalStorageService.items.map(item =>
        item.plan.id === isItemAlreadyExists.plan.id
          ? { ...item, amount: (item.amount! += 1) }
          : item
      );
      localStorage.setItem(this.key, JSON.stringify(modifiedItems));
      return modifiedItems;
    }
    const itemsToSet = [
      ...CartLocalStorageService.items,
      { ...value, amount: 1 },
    ];
    localStorage.setItem(this.key, JSON.stringify(itemsToSet));
    return itemsToSet;
  }

  unset(value: newService) {
    this.get();

    const updatedProducts = CartLocalStorageService.items.reduce(
      (acc, currentValue) => {
        if (currentValue.plan.id !== value.plan.id) {
          return [...acc, currentValue];
        }
        return currentValue.amount! > 1
          ? [...acc, { ...currentValue, amount: (currentValue.amount! -= 1) }]
          : acc;
      },
      [] as newService[]
    );

    localStorage.setItem(this.key, JSON.stringify(updatedProducts));
    return updatedProducts;
  }

  private setNewItem(value: newService) {
    const itemsToSet = [{ ...value, amount: 1 }];

    localStorage.setItem(this.key, JSON.stringify(itemsToSet));

    return itemsToSet;
  }
  private isItemWithSameIdExists(id: string) {
    return CartLocalStorageService.items.find(item => item.plan.id === id);
  }
}
