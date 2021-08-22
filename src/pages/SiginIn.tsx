import { SiginIn } from '@/components/SiginIn';
import { AuthLayout } from '@/layout/AuthLayout';
import React from 'react';

export const SignInPage = () => {
  // useEffect(() => {
  //   AuthService.siginin({ email, pass });
  // }, []);

  return (
    <AuthLayout>
      <SiginIn />
    </AuthLayout>
  );
};
