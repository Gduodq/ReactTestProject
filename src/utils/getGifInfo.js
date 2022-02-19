export const getGifInfo = (offset) => (gif, index) => {
  const gifInfo = {
    previewUrl: gif.images.preview_gif.url,
    originalUrl: gif.images.original.url,
    number: offset + index + 1,
  }
  return gifInfo
}
