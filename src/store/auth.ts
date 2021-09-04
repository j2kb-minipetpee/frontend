import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  name: string;
  email: string;
  id: number | null;
  homepeeId: number | null;
}

const initialState: AuthState = {
  name: '',
  email: '',
  id: null,
  homepeeId: null,
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.homepeeId = action.payload.homepeeId;
    },
  },
});

export const { login } = counterSlice.actions;

export default counterSlice.reducer;
