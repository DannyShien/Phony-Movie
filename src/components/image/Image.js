import React from 'react';
import './Image.css';

const Image = ({src, alt, style}) => {
    return (
        <img className='poster' src={src} alt={alt} style={style} />
    )
}

export default Image; 