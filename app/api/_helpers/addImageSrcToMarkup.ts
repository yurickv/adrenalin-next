export const addImageSrcToMarkup = (markup: string, imageUrl: string) => {
  console.log(markup);
  console.log(imageUrl);
  return markup.replace(
    /<img([^>]*)\s+src=(?:"[^"]*"|'[^']*')([^>]*)>/gi,
    `<img$1 src="${imageUrl}"$2>`
  );
};
