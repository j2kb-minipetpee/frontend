export const convertGender = (gender: 'MALE' | 'FEMALE') => {
  if (gender === 'MALE') {
    return '남';
  }

  return '여';
};
