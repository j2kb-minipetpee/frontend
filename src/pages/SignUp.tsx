import { SignUp } from '@/components/SiginUp';
import { AuthLayout } from '@/layout/AuthLayout';
import React from 'react';

export const SignUpPage = () => {
  return (
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  );
};
