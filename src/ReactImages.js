import React from 'react';
import pic1 from './ReactCover.jpg';
import pic2 from './ReactImage.png';
import pic3 from './React.png';

function ReactImages() {
    return(
        <>
            <img src={pic1} className="images body-text" alt="react_picture" />
            <img src={pic2} className="images body-text" alt="react" />
            <img src={pic3} className="images body-text" alt="react_img" />
        </>
    );
}

export default ReactImages;