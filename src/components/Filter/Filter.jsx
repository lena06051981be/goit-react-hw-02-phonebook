import React from "react";

const Filter = ({value, onFilter}) => {
    return (
        <label>
            <input
                value={value}
                onChange={onFilter}
                placeholder="Enter request"
            ></input>
        </label>        
    )    
 }

export default Filter;