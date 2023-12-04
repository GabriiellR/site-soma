const TextArea = (props) => {

    const onchange = (evento) => {
        props.atualizarEstado(evento.target.value);
    }

    return <>
        <textarea onchange={onchange} class="form-control" name={props.name} placeholder={props.placeholder} rows={props.rows}></textarea>
    </>
}

export default TextArea;