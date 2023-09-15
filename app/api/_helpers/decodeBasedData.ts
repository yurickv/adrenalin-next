export const decodeBasedData = (data: string) => {
  const latin1CompatibleString = atob(data);
  const decodedData = decodeURIComponent(escape(latin1CompatibleString));
  const objectData = JSON.parse(decodedData);
  return objectData;
};
