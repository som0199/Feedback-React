import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuote } from '../facility/quote/QuoteSlice'

const Quote = () => {
   const {allQuote} = useSelector(state=>state.quote)
   const dispatch = useDispatch();

   useEffect(()=>{
    dispatch(getQuote())
   },[])
  return (
    <marquee>
    <Typography
    variant='h5'
    align='center'
    sx={{marginBlock:"10px"}}>
        {allQuote.content} - {allQuote.author}
    </Typography>
    </marquee>
  )
}

export default Quote