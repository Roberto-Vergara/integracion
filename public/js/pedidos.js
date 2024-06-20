document.addEventListener('DOMContentLoaded', () => {
    // Función para agregar un pedido al localStorage
    function agregarPedido(event) {
        const id = event.target.getAttribute('data-id');
        const nombre = event.target.getAttribute('data-nombre');
        const imagen = event.target.getAttribute('data-imagen');
        const precio = parseFloat(event.target.getAttribute('data-precio')); // Convertir precio a número si es necesario

        // Crear el objeto del pedido
        const pedido = {
            id: id,
            nombre: nombre,
            imagen: imagen,
            precio: precio,
            estado: 'Pedido agregado', // Añadir un estado inicial
            estadoIndex: 0 // Índice del estado inicial en el array de estados
        };

        // Obtener el array de pedidos del localStorage o crear uno nuevo si no existe
        let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

        // Agregar el pedido al array
        pedidos.push(pedido);

        // Guardar el array actualizado en el localStorage
        localStorage.setItem('pedidos', JSON.stringify(pedidos));

        // Mostrar una alerta o mensaje de confirmación
        alert('Pedido agregado para entrega.');
    }

    // Agregar listeners de eventos para los botones de "Agregar al carrito"
    const botonesAgregar = document.querySelectorAll('.agregar-pedido');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarPedido);
    });
});