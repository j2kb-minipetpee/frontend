export const useBoardPostValidate = (title: string, content: string) => {
  return title && content;
};

export const useGalleryPostValidate = (title: string, images: string[]) => {
  return title && images.length;
};
