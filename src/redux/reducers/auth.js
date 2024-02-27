import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const getTodoData = createAsyncThunk('auth/getTodoData', async () => {
    try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        // let data = await res.json()
        return res.data;

    } catch (error) {
        return error.message
    }
})

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        value: 0,
        data: [],
        loading: false
    },
    reducers: {
        incremented: (state, action) => {
            console.log('action**', action);
            state.value += action.payload
        },
        decremented: state => {
            state.value -= 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTodoData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getTodoData.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(getTodoData.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})


export const { incremented, decremented } = AuthSlice.actions

export default AuthSlice.reducer