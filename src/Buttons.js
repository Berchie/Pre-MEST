import React from 'react';
import './component.css'

function Buttons() {
    return(
        <div className="body-text">
            <form>
            <input id="search" type="button" value="Search"></input>
            <input id="google" type="button" value="Google"></input>
            </form>
        </div>
    );
}

export default Buttons;