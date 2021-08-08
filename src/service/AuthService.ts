import { AuthRepository } from '../repository';

class OnboardingService {
  isAuthroized: boolean;

  siginIn() {
    AuthRepository.signIn();

    this.isAuthroized = true;
    // 리덕스
  }

  authenticaed() {}
}

export default new OnboardingService();
