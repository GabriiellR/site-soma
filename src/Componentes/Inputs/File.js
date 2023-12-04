
const File = (props) => {

    const onchange = (evento) => {
        props.atualizarEstado(evento.target.files[0]);

        console.log(evento)
    }

    return <>
        <label for={props.id} class="form-label">{props.label}</label>
        <input value={props.valor} onchange={onchange} class="form-control" id={props.id} type="file" name={props.name} />
    </>
}

export default File;