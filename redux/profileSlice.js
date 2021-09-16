import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        image: '',
        name: 'Jimmy Raynor',
        description: 'Kitty Cat',
        email: 'qwerty1234@gmail.com',
        username: 'HappyCat',
        status: '💼 At Work'
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload
        },
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        }
    }
})

export default profileSlice.reducer;
export const {setName, setDescription, setUsername, setEmail, setStatus} = profileSlice.actions;