import React from 'react';
import './component.css'

function SearchInput() {
    return( 
        <div className="searchinput body-text">
            <form>
                <input className="input-text" type="text" placeholder="what are you looking for?"></input>
            </form>
        </div>
    );
}

export default SearchInput;