import InputMask from 'react-input-mask';

export const DateInput = (props) => {

    const onchange = (evento) => {

        props.atualizarEstado(evento.target.value);
    }

    return <>
        <InputMask
            name={props.name}
            className='form-control'
            mask='99-99-9999'
            placeholder='DD-MM-YYYY'
            value={props.value}
            onChange={onchange}>
        </InputMask>
    </>
}