import { createSlice } from '@reduxjs/toolkit';
import { usersData } from './dataGenerator';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: usersData,
    selectedUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
      state.error = null;
    },
    updateUser: (state, action) => {
      const { id, data } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex >= 0) {
        state.users[userIndex] = { ...state.users[userIndex], ...data };
        state.error = null;
      } else {
        state.error = 'Пользователь не найден';
      }
    },
  },
});

export const { selectUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
