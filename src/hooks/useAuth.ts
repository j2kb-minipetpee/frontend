import { useAppSelector } from '../store';

export const useAuth = () => {
  const { email, id, name } = useAppSelector((state) => state.auth);

  return { email, id, name } as const;
};
