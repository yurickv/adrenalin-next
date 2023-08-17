export const addImageSrcToMarkup = (markup: string, imageUrl: string) => {
  return markup.replace(
    /<Image([^>]*)\s+src=(?:"[^"]*"|'[^']*')([^>]*)>/gi,
    `<Image$1 src="${imageUrl}"$2>`
  );
};
