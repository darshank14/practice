import {createSlice} from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {token: '', name: '', email: '', phone: '',ProfileImg:''},
  reducers: {
    login: (state, action) => ({...action.payload}),
    logout: (state, action) => (state = ''),
    profile: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const {login, logout,profile} = AuthSlice.actions;

export default AuthSlice.reducer;
