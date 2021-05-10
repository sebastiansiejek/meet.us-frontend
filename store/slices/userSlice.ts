import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QueryClient } from 'react-query';

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
      state.token = token;
      localStorage.removeItem('token');
      localStorage.setItem('token', token);
    },
    logout(state: IProps) {
      state.token = '';
      localStorage.removeItem('token');
      new QueryClient().removeQueries();
    },
  },
});

export const { setToken, logout } = authorisationSlice.actions;
export default authorisationSlice.reducer;
