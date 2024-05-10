import React from "react";

function Topic(props) {
    return (
        <div id={props.name} className='Topic'>
            <h2>{props.titulo}</h2>
            <div className="content">
                {props.content}
            </div>
            <footer>
                <a href={props.back}>(</a>
                <a href="#home">H</a>
                <a href={props.next}>)</a>
            </footer>
        </div>
    );
}

export default Topic;