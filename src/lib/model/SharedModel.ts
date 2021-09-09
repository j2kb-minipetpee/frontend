export interface Profile {
  email?: string;
  name: string;
  birthday: string;
  species: string;
  personality: string;
  gender: 'MALE' | 'FEMALE';
  profileImageUrl: string;
}

export interface Member {
  id: number;
  name: string;
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

export interface Comment {
  id: number;
  //이 부분 어떻게 통일할지.
  member: { id: number; name: string };
  content: string;
  createdAt: string;
}

export interface Comments {
  content: Comment[];
  page: {
    totalPages: number;
    totalElements: number;
  };
}

export interface Image {
  id: number;
  url: string;
}

export type SearchType = 'popular' | 'user' | 'post';
