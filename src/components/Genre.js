import React from 'react';

// const Genre = (props) => {
//     console.log(props)

const Genre = ({action, adventure, anime, comedy, documentary, drama, horror, scifi, thriller}) => {
    console.log(`Genre.js: `, action)
    let breakDown = action.forEach(items => {
        let title = items.title
        console.log(title)
        // return breakDown
    })
    // console.log(breakDown)
    return (
        <div>
            {/* {action} */}
        </div>
    )
}

export default Genre;