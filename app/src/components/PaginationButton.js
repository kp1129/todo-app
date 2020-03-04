import React from 'react';

const PaginationButton = ({pageNum, display}) => {
    return (
        <div className="pagination-button" onClick={() => display(pageNum)}>
            {pageNum}
        </div>
    )
}

export default PaginationButton;