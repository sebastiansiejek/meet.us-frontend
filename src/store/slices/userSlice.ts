import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QueryClient } from 'react-query';
import {
  getCookieToken,
  setCookieToken,
  removeCookieToken,
} from 'src/services/AuthService';

interface IProps {
  token: string;
}

export const initialState: IProps = { token: getCookieToken() };

const authorisationSlice = createSlice({
  name: 'authorisation',
  initialState,
  reducers: {
    setToken(state: IProps, action: PayloadAction<{ token: string }>) {
      const { token } = action.payload;
      state.token = token;
      removeCookieToken();
      setCookieToken(token);
    },
    logout(state: IProps) {
      state.token = '';
      removeCookieToken();
      new QueryClient().removeQueries();
    },
  },
});

export const { setToken, logout } = authorisationSlice.actions;

export const selectUserToken = (state: IProps) => state.token;

export default authorisationSlice.reducer;
