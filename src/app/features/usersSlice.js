import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import usersService from '../services/usersService'

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  return await usersService.getAll()
})

const initialState = {
  users: [],
  selectedUserId: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUserId = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
  },
})

export const usersActions = {
  ...usersSlice.actions,
  fetchUsers,
}

export default usersSlice.reducer
