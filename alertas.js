
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
function registrarFactura()
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
        window.location.href = "facturaConsultar.html"
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

    function registrarNovEntrega()
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
        window.location.href = "novedadEnConsultar.html"
    }
    })
    }
    
    function modificarFactura()
    {
    Swal.fire({
    title: '¿Seguro que desea editar la factura?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Confirmar'
    }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        window.location.href = "facturaRegistrar.html"
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


    function modificarNovEntrega()
    {
    Swal.fire({
    title: '¿Seguro que desea editar la novedad de entrega?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Confirmar'
    }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        window.location.href = "novedadEnRegistrar.html"
    }
    })
    }
    function archivarFactura()
    {
        Swal.fire({
            title: '¿Está seguro de eliminar la factura ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, elimínela!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'La factura ha sido eliminada',
                'success'
              )
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

    function archivarNovEntrega()
    {
        Swal.fire({
            title: '¿Está seguro de eliminar la novedad de entrega ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, elimínela!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'La novedad de entrega ha sido eliminada',
                'success'
              )
            }
          })
    }
