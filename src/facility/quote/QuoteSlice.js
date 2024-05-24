import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const QuoteSlice = createSlice({
    name : "quote",
    initialState : {
        allQuote : {content: "quote from state", author: "quote-author"},
        isLoading : false,
        isError : false,
    },
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(getQuote.pending , (state,action)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(getQuote.fulfilled , (state,action)=>{
            state.isLoading = false;
            state.allQuote = action.payload;
            state.isError = false;
        })
        .addCase(getQuote.rejected ,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
        })
    }
})

export default QuoteSlice.reducer

export const getQuote = createAsyncThunk("FETCH/QUOTE" , async()=>{
    const response = await fetch('https://quotable.io/random');
    const data = await response.json();
    return data;
})