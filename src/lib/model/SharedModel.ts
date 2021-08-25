export interface Profile {
  email?: string;
  name: string;
  birthday: string;
  species: string;
  personality: string;
  gender: 'MALE' | 'FEMALE';
  profileImageUrl: string;
}
