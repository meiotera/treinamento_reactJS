import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Rafael" idade={17} nerd={true} />

            <DiretaFilho nome="Sueldo" idade={20} nerd={false} />
        </div>
    )
}