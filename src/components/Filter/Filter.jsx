import React from "react";

const Filter = ({onChange}) => {
    return (
        <label>
            <input
                onChange={onChange}
                placeholder="Enter request"
            ></input>
        </label>        
    )    
 }

export default Filter;