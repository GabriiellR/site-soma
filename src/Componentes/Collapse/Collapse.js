import { useScroll } from "framer-motion";
import React, { useState } from "react";

const Collapse = (props) => {



    return <>
        {props.identificador &&

            <div>{React.cloneElement(props.botao,
                { 'data-bs-toggle': 'collapse', 'data-bs-target': `#${props.identificador}`, 'href': `#${props.identificador}` },
            )}</div>
        }

        <div class="collapse" id={props.identificador}>
            <div class="card card-body border-0 w-90 mt-2">
                <div className="p-2">{props.texto}</div>
            </div>
        </div>


    </>
}

export default Collapse;