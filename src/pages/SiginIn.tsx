import { useEffect } from 'react';
import OnboardingService from '../service/OnboardingService';

const SignIn = () => {
  useEffect(() => {
    OnboardingService.siginin({ email, pass });
  }, []);

  return <div></div>;
};
