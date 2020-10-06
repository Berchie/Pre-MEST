import React from 'react';

function SearchInput() {
    return( 
        <div className="searchinput">
            <form>
                <input className="input-text" type="text" placeholder="what are you looking for?"></input>
            </form>
        </div>
    );
}

export default SearchInput;