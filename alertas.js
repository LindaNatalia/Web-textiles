
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
        window.location.href = "index.html"
    }
    })
    }

    
function crearCuenta()
{
Swal.fire({
title: '¿Seguro desea crear una cuenta?',
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

function registrarEntrega()
    {
    Swal.fire({
    title: '¿Seguro desea hacer el registro?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Confirmar'
    }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        window.location.href = "entregaConsultar.html"
    }
    })
    }

    function modificarEntrega()
    {
    Swal.fire({
    title: '¿Seguro que desea editar la orden de entrega?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Confirmar'
    }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        window.location.href = "entregaRegistrar.html"
    }
    })
    }

    function archivarEntrega()
    {
        Swal.fire({
            title: '¿Está seguro de eliminar la orden de entrega ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, elimínela!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'La orden de entrega ha sido eliminada',
                'success'
              )
            }
          })
    }
