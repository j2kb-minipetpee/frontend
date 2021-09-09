import { useParams } from 'react-router-dom';
import { useAuth } from './useAuth';

export const useIsHomepeeHost = () => {
  const { id } = useParams<{ id: string }>();
  const { homepeeId } = useAuth();

  return id === String(homepeeId);
};
