import React from "react";

const Rainbow = (WrappedComponent) => {
    const colors = ["red", "yellow", "blue", "green", "pink", "orange"];
    const colorIndex = Math.floor(Math.random() * 6);
    const className = colors[colorIndex] + "-text";

    return (props) => {
        return (
            <div className={ className }>
                <WrappedComponent {...props}/>
            </div>
        );
    }
}

export default Rainbow