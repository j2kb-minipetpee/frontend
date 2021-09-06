export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
}

export interface ValidateEmailRequest {
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}
