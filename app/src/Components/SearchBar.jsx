import React from 'react';

const SearchBar = () => {
    return (
        <div className={"search-bar"}>
            <form className="search" action="">
                <input type="search" placeholder="Search here..." required />
                <button type="submit">Search</button>
            </ form>
        </div>
    );
};

export default SearchBar;
