export const convertDateToAge = (birthday: string | Date) => {
  const target = typeof birthday === 'string' ? new Date(birthday) : birthday;
  const today = new Date();

  return today.getFullYear() - target.getFullYear() + 1;
};
