import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import instance from "../../apiInstance"

export const getData = createAsyncThunk('counter/getData', async () => {
  try {
    let res = await instance.get('/todos')
    // let data = await res.json()
    return res
  } catch (error) {
    console.log('error***', error);
    return error
  }
})
export const addPosts = createAsyncThunk('counter/addPosts', async () => {
  let res = axios.put('https://dummyjson.com/posts/7',
    JSON.stringify({
      title: 'I am in love with someone.',
      // userId: 1000,
      /* other post data */
    })
  )

  return res

})

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    text: 'Hello World!',
    num: 9,
    user: { name: '', age: 0, isDeseased: false },
    loading: false,
    data: null
  },
  reducers: {
    handleText: (state, action) => {
      state.text = action.payload
    },
    handleUpdateUser: (state, action) => {
      console.log('action called ***', action);
      state.user = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(getData.pending, (state, action) => {
      console.log('pending***', action);
    })
    builder.addCase(getData.fulfilled, (state, action) => {
      console.log('success***', action);
      state.data = action.payload
    })
    builder.addCase(getData.rejected, (state, action) => {
      console.log('fail***', action);
      // state.error = action.error
    })
    builder.addCase(addPosts.pending, (state, action) => {
      console.log('post_pending***', action);
    })
    builder.addCase(addPosts.fulfilled, (state, action) => {
      console.log('post_success***', action);
    })
    builder.addCase(addPosts.rejected, (state, action) => {
      console.log('post_fail***', action);
    })
  }
})


export const { handleText, handleUpdateUser } = counterSlice.actions

export default counterSlice.reducer