import React from 'react';
import { useEffect } from 'react';
import OnboardingService from '../service/OnboardingService';

export const SignIn = () => {
  useEffect(() => {
    OnboardingService.siginin({ email, pass });
  }, []);

  return <div>테스트</div>;
};
