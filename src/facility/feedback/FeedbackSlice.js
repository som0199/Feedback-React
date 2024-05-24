import { createSlice } from "@reduxjs/toolkit";

const FeedbackSlice = createSlice({
    name : "feedback",
    initialState : {
        allFeedbacks : [],
        edit : {
            feedback : {},
            isEdit : "false"
        }
    },
    reducers : {
        //Add 

        add : (state,action)=>{
            return{
                ...state,
            allFeedbacks : [action.payload,...state.allFeedbacks]
           };
        },
        //Delete 

        remove :(state,action)=>{
            return{
                ...state,
                allFeedbacks : state.allFeedbacks.filter((item)=>item.id!==action.payload)
            }
        },

        //Edit 
        edit : (state,action)=>{
            return {
                ...state,
            edit : {
                feedback : action.payload,
                isEdit :  true
             }
            }
        },
        //Update 
        update : (state, action)=>{
            return{
                ...state,
                allFeedbacks : state.allFeedbacks.map((item)=>item.id===action.payload.id ? action.payload : item ),
                edit : {
                    feedback : {},
                    isEdit : false
                }
            }
        }

    }
})
export const {add,remove,edit,update} = FeedbackSlice.actions 
export default FeedbackSlice.reducer