const body = document.getElementsByTagName('body')[0];

export const ExibirPreLoader = () => {

    body.style.backgroundColor = '#fff';
    body.style.opacity = 0.7;
    body.style.pointerEvents = 'none';
    body.style.cursor = 'wait';
}

export const RemoverPreLoader = () => {

    body.style.backgroundColor = 'transparent';
    body.style.opacity = 1;
    body.style.pointerEvents = 'auto';
    body.style.cursor = 'default';
}

