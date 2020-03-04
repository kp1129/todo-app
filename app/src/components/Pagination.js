import React from 'react';
import PaginationButton from './PaginationButton';

const Pagination = ({display, total}) => {
    // dynamically create the right number of buttons 
    // based on the total number of todos

    // 1 page button per 5 todos
    const numberOfPages = Math.ceil(total / 5);
    let paginationButtons = [];
    
    for(let i = 1; i <= numberOfPages; i++){
        paginationButtons.push(
            <PaginationButton display={display} pageNum={i}/>
        )
    }
   
    return (
        <div className="pagination-container">  
                {/* display the resuling paginationButtons below */}
            {paginationButtons}            
        </div>
    )
}

export default Pagination;