import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QueryClient } from 'react-query';
import { setCookieToken, removeCookieToken } from 'src/services/AuthService';
import { IStore } from '../store';

interface IProps {
  token: string;
}

export const initialState: IProps = { token: '' };

const authorisationSlice = createSlice({
  name: 'authorisation',
  initialState,
  reducers: {
    setToken(state: IProps, action: PayloadAction<{ token: string }>) {
      const { token } = action.payload;
      removeCookieToken();
      setCookieToken(token);
      state.token = token;
    },
    logout(state: IProps) {
      removeCookieToken();
      new QueryClient().removeQueries();
      state.token = '';
    },
  },
});

export const { setToken, logout } = authorisationSlice.actions;

export const selectUserToken = (state: IStore) => state.user.token;

export default authorisationSlice.reducer;
