export const capitalizeFirstLetter = (string: string) => {
  const capitalizedFirstLetter = string.charAt(0).toUpperCase();
  return capitalizedFirstLetter + string.slice(1);
};
