import React from 'react'
import Rating from './Rating'

const RatingFilter = ({onchange,count}) => (
   <div className="rating-filter">
        <span className="rating-filter-text">Minimum rating</span>
        <Rating 
        count={count}
        onChange={(newRating)=>{
                onchange(newRating)
        }} />
</div> 
) 

export default RatingFilter
