import { useAppSelector } from '@/store';

export const useAuth = () => {
  const { email, id, name, homepeeId } = useAppSelector((state) => state.auth);

  return { email, id, name, homepeeId } as const;
};
