import React from 'react';

const Image = ({src, alt, style}) => {
    return (
        <img className='poster' src={src} alt={alt} style={style} />
    )
}

export default Image; 