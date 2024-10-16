import React from 'react';

const x = {
    width: '150px',
        height: '50px',
        background: 'black',
        color: 'white',
        border: '5px solid green',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        paddingBottom: '20px',
}

const TextButton = (props) => {

    return <div style = {x}>

        <h2>{props.text}</h2>

    </div>

}


export default TextButton;
