import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch( ){

    //const [searchValue,setSearchValue]=React.useState('');
    const {searchValue,setSearchValue}=React.useContext(TodoContext)
    
    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value)
    }

    return (
        <input 
            className='TodoSearch' 
            placeholder="Search TODO"
            onChange={onSearchValueChange}
            value={searchValue}
        />
    );
}

export {TodoSearch}