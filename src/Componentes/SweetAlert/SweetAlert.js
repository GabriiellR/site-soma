import Swal from 'sweetalert2';


const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});


export const MostrarToastSucesso = (mensagem) => {

    Toast.fire({
        icon: "success",
        title: mensagem
    });
}

export const MostrarToastErro = (mensagem) => {

    Toast.fire({
        icon: "error",
        title: mensagem
    });
}

export const MostrarToastAlerta = (mensagem) => {
    Toast.fire({
        icon: "Warning",
        title: mensagem
    });
}

export const MostrarToastInfo = (mensagem) => {
    Toast.fire({
        icon: "info",
        title: mensagem
    });
}

