export const addImageSrcToMarkup = (markup: string, imageUrl: string) => {
  return markup.replace(
    /<img([^>]*)\s+src=(?:"[^"]*"|'[^']*')([^>]*)>/gi,
    `<img$1 src="${imageUrl}"$2>`
  );
};
