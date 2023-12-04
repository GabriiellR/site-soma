import { useState } from "react";

const CampoTexto = (props) => {


    const onchange = (evento) => {
        props.atualizarEstado(evento.target.value);
    }

    return <>
        <input value={props.valor} type="text" name={props.name} onChange={onchange} required={props.obrigatorio} placeholder={props.placeholder} class="form-control" />
    </>
}

export default CampoTexto;