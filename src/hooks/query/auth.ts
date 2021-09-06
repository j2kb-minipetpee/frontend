import { SignUpRequest } from '@/lib/model';
import { AuthRepository } from '@/lib/repository';
import { useMutation } from 'react-query';

export const useSignUpMutation = () => {
  return useMutation<void, Error, SignUpRequest>(({ email, name, password }) => AuthRepository.signUp({ email, name, password }));
};
