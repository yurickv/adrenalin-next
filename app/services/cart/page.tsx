'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { ChevronLeftIcon } from '@/components/icons/ChevronLeftIcon';
import { USER_CREDENTIALS_INPUTS } from '@/const/user-crenedtials';
import { CheckedIcon } from '@/components/CheckedIcon';
import { CartLocalStorageService } from '@/app/_services/cartLocalStorageService';
import { SHOPPING_CART } from '@/const/localstorageKeys';
import { newService } from '@/app/_types/services.types';
import { cartValidationSchema } from '@/app/_schemas/cartValidationSchema';
import { BuyButton } from '@/components/service-page/BuyButton';

const ShoppingCart = () => {
  const [products, setProducts] = useState<[] | newService[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fullPrice, setFullPrice] = useState<number>(0);
  const [data, setData] = useState({
    agreement: false,
    phone: '',
    publicOffer: false,
    sender_first_name: '',
    sender_last_name: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cartValidationSchema),
    defaultValues: data,
    mode: 'onBlur',
  });
  const cartLocalStorageService = new CartLocalStorageService(SHOPPING_CART);
  useEffect(() => {
    const setShoppingCartProducts = () => {
      const storedProducts = cartLocalStorageService.get() as newService[];

      setProducts(storedProducts);
      setFullPrice(countFullPrice(storedProducts));
    };

    setShoppingCartProducts();
  }, []);

  function countFullPrice(products: newService[]) {
    return products.reduce(
      (acc, currentProduct) =>
        (acc += Number(currentProduct.plan.price) * currentProduct.amount!),
      0
    );
  }

  const onSubmit = () => {};

  const handleIncrementAmount = (product: newService) => {
    const updatedProducts = cartLocalStorageService.set(product);

    setFullPrice(countFullPrice(updatedProducts));

    setProducts(updatedProducts);
  };

  const handleDecrementAmount = (product: newService) => {
    const updatedProducts = cartLocalStorageService.unset(product);

    setProducts(updatedProducts);

    setFullPrice(countFullPrice(updatedProducts));
  };

  const isButtonDisabled =
    Object.values(data).some(value => !value) || Object.keys(errors).length > 0;

  return (
    <section className="cart">
      {!products.length ? (
        <b>Loading...</b>
      ) : (
        <div className="div-container flex flex-col gap-5">
          <Link href="/" className="back-button">
            <ChevronLeftIcon />
            Корзина
          </Link>
          <h1 className="cart__title">Оформлення послуги</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="credentials">
              <h2 className="credentials__title">Ваші дані:</h2>
              <div className="credentials__user-info">
                {USER_CREDENTIALS_INPUTS.map(({ label, placeholder, name }) => (
                  <label key={label}>
                    <span className="credentials__input font-medium text-left mb-2 before:content-['*'] before:text-txt-accent">
                      {label}:
                    </span>
                    <input
                      {...register(
                        name as
                          | 'sender_first_name'
                          | 'sender_last_name'
                          | 'phone'
                          | 'publicOffer'
                          | 'agreement'
                      )}
                      onChange={e =>
                        setData(prev => ({ ...prev, [name]: e.target.value }))
                      }
                      value={data[name as keyof typeof data] as string}
                      placeholder={placeholder}
                      className={`credentials__input font-light p-2 bg-transparent border-b transition-colors ${
                        errors[name as keyof typeof errors]
                          ? '!text-error border-error'
                          : 'border-txt-accent'
                      }`}
                    />
                    {errors[name as keyof typeof errors] ? (
                      <p className="">
                        {errors[name as keyof typeof errors]?.message}
                      </p>
                    ) : null}
                  </label>
                ))}
              </div>
              <div className="privacy">
                <label className="privacy__label">
                  <input
                    {...register('agreement')}
                    className="peer visually-hidden"
                    type="checkbox"
                    name="agreement"
                    checked={data.agreement}
                    onChange={() =>
                      setData(prev => ({ ...prev, agreement: !prev.agreement }))
                    }
                  />
                  <CheckedIcon className="privacy__icon" />
                  <span className="privacy__text">Я надаю згоду на &#xa0;</span>
                  <p className="privacy__text underline">
                    обробку моїх персональних даних
                  </p>
                </label>
                <label className="privacy__label">
                  <input
                    {...register('publicOffer')}
                    className="peer visually-hidden"
                    type="checkbox"
                    name="publicOffer"
                    checked={data.publicOffer}
                    onChange={() =>
                      setData(prev => ({
                        ...prev,
                        publicOffer: !prev.publicOffer,
                      }))
                    }
                  />
                  <CheckedIcon className="privacy__icon" />
                  <span className="privacy__text">Я погоджуюсь з &#xa0;</span>
                  <Link href="/oferta" className="privacy__text underline">
                    умовами та публічною офертою
                  </Link>
                </label>
              </div>
            </div>
            <div className="credentials !items-center">
              <h2 className="credentials__title !self-start">
                Ваше замовлення:
              </h2>
              <div className="product-list">
                {products.map(product => (
                  <div className="product" key={product.serviceName}>
                    <div className="product__item">
                      <p className="product__title">Послуга:</p>
                      <p className="product__description">
                        {product.serviceName}
                      </p>
                    </div>
                    <div className="product__item">
                      <p className="product__title">Тривалість:</p>
                      <p className="product__description">
                        {product.plan.availability}
                      </p>
                    </div>
                    <div className="product__item">
                      <p className="product__title">Кількість:</p>
                      <p className="product__description flex justify-center items-center gap-4">
                        <button
                          type="button"
                          onClick={() => handleDecrementAmount(product)}
                        >
                          -
                        </button>
                        {product.amount}
                        <button
                          type="button"
                          onClick={() => handleIncrementAmount(product)}
                        >
                          +
                        </button>
                      </p>
                    </div>
                    <div className="product__item">
                      <p className="product__title">Сума</p>
                      <p className="product__description">
                        {Number(product.plan.price) * product.amount!} &#8372;
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="full-price">
                <p className="full-price__title">Разом:</p>
                <p className="full-price__description">{fullPrice} &#8372;</p>
              </div>

              <div className="actions">
                <Link
                  href="/services"
                  className="actions__button bg-transparent text-txt-accent hover:text-red-600 focus:text-red-600 transition-colors"
                >
                  Відмінити
                </Link>
                <BuyButton
                  props={{ data, products, fullPrice }}
                  disabled={isButtonDisabled}
                  text={'Оплатити'}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};
export default ShoppingCart;
