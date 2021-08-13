import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from './auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type ApptDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<ApptDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
