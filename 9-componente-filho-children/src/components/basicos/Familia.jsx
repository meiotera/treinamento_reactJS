import React from "react";

export default (props) => {
    const clone = React.Children.map(props.children, (element) => {
        return React.cloneElement(element, { ...props })
    });

    return (
        <div>
            {clone}
        </div>
    )
}