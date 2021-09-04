export interface Profile {
  email?: string;
  name: string;
  birthday: string;
  species: string;
  personality: string;
  gender: 'MALE' | 'FEMALE';
  profileImageUrl: string;
}

export interface PagableData<T> {
  content: T;
  page: {
    totalElements: number;
    totalPages: number;
  };
}

export interface PagenationRequest {
  page?: number;
  size?: number;
}

export type SearchType = 'popular' | 'user' | 'post';
