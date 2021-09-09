import { SiginIn } from '@/components/SiginIn';
import { AuthLayout } from '@/layout/AuthLayout';
import React from 'react';

export const SignInPage = () => {
  return (
    <AuthLayout>
      <SiginIn />
    </AuthLayout>
  );
};
