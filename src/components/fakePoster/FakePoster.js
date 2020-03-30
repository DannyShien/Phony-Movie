import React from 'react';
import './FakePoster.css'

const FakePoster = ({ src, alt, style, text }) => {
    return (
        <div className='fakePoster' src={ src } alt={ alt } >
            <h2>{ text }</h2>
        </div>
    )
}

export default FakePoster;