import { OnboardingRepository } from '../repository';

class OnboardingService {
  isAuthroized: boolean;

  siginIn() {
    OnboardingRepository.signIn();

    this.isAuthroized = true;
    // 리덕스
  }

  authenticaed() {}
}

export default new OnboardingService();
