import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./feedback/FeedbackSlice"
import quoteReducer from "./quote/QuoteSlice"
export const store = configureStore({
    reducer: {
        feedback : feedbackReducer,
        quote : quoteReducer,
    }
})