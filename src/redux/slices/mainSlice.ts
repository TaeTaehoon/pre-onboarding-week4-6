import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URI = {
  BASE: process.env.REACT_APP_BASE_URI,
};

export interface comment {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface initType {
  [x: string]: any;
  comments: comment[];
  pages: number[];
  currPage: number;
}

const initialState = {
  comments: [
    {
      id: 1,
      profile_url: "https://picsum.photos/id/1/50/50",
      author: "abc_1",
      content: "UI 테스트는 어떻게 진행하나요",
      createdAt: "2020-05-01",
    },
    {
      id: 2,
      profile_url: "https://picsum.photos/id/1/50/50",
      author: "abc_1",
      content: "UI 테스트는 어떻게 dsfsdf나요",
      createdAt: "2020-05-01",
    },
  ],
  pages: [1],
  currPage: 1,
};

export const getFullCommentsLength = createAsyncThunk<
  number,
  any,
  {
    rejectValue: any;
  }
>("mainSlice/getFullCommentsLength", async (postId, thunkAPI) => {
  try {
    const res = await axios.get("http://localhost:4000/comments");
    return res.data.length;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getCommentsInPage = createAsyncThunk<
  // Return type of the payload creator
  {
    comments: comment[];
    currPage: number;
  },
  // First argument to the payload creator
  number,
  {
    rejectValue: any;
  }
>("main/getCommentsByDB", async (pageNum, thunkAPI) => {
  try {
    const res = await axios.get(
      `http://localhost:4000/comments?_page=${pageNum}&_limit=4&_order=desc&_sort=id`
    );
    return thunkAPI.fulfillWithValue({ comments: res.data, currPage: pageNum });
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error);
  }
});

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFullCommentsLength.pending, (state, action) => {})
      .addCase(getFullCommentsLength.fulfilled, (state, action) => {
        const maxPage = Math.ceil(action.payload / 4);
        for (let i = 2; i <= maxPage; i++) {
          state.pages.push(i);
        }
      })
      .addCase(getFullCommentsLength.rejected, (state, action) => {})
      .addCase(getCommentsInPage.pending, (state, action) => {})
      .addCase(getCommentsInPage.fulfilled, (state, action) => {
        console.log(action.payload.currPage);
        state.comments = action.payload.comments;
        state.currPage = action.payload.currPage;
      })
      .addCase(getCommentsInPage.rejected, (state, action) => {});
  },
  // extraReducers: {
  //   [getFullCommentsLength.pending]: (state, action) => {
  //     state.isLoading = true;
  //   },
  //   [getFullCommentsLength.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.brands.push(...action.payload);
  //   },
  //   [getFullCommentsLength.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.err = action.payload;
  //   },
  // },
});

export default mainSlice.reducer;
