
function confirmar()
    {
    Swal.fire({
    title: '¿Seguro que desea ingresar:?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Confirmar'
    }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        window.location.href = "indexSistema.html"
    }
    })
    }

    
function crearCuenta()
{
Swal.fire({
title: '¿Seguro desea crear una cuenta:?',
icon: 'warning',
showCancelButton: true,
confirmButtonColor: '#d33',
cancelButtonColor: '#6c757d',
confirmButtonText: 'Confirmar'
}).then((result) => {
/* Read more about isConfirmed, isDenied below */
if (result.isConfirmed) {
    window.location.href='authentication-login.html';
}
})
}