document.addEventListener('DOMContentLoaded', () => {
    const DOMpedidos = document.querySelector('#pedidos');

    function renderizarPedidos() {
        const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        DOMpedidos.innerHTML = '';

        pedidos.forEach((pedido, index) => {
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4', 'mb-4');

            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');

            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = pedido.nombre;

            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', pedido.imagen);
            miNodoImagen.setAttribute('alt', 'Imagen del plato');

            const botonEstado = document.createElement('button');
            botonEstado.classList.add('btn', 'btn-primary');
            botonEstado.textContent = pedido.estado;
            botonEstado.addEventListener('click', () => cambiarEstadoPedido(index));
            botonEstado.id =`mid${pedido.id}`;

            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(botonEstado);

            miNodo.appendChild(miNodoCardBody);
            miNodo.appendChild(botonEstado);

            DOMpedidos.appendChild(miNodo);
        });
    }

    function cambiarEstadoPedido(index) {
        let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        const estados = ['Pedido retirado', 'En camino', 'Entregado', 'Finalizado'];
        let nuevoEstadoIndex = (pedidos[index].estadoIndex + 1) % estados.length;
        pedidos[index].estado = estados[nuevoEstadoIndex];
        pedidos[index].estadoIndex = nuevoEstadoIndex;
        localStorage.setItem('pedidos', JSON.stringify(pedidos));
        renderizarPedidos();
        if (estados[nuevoEstadoIndex] === 'Finalizado') {
            mostrarMensaje('Pedido finalizado: ' + pedidos[index].nombre);
        }
    }

    function mostrarMensaje(mensaje) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('alert', 'alert-success');
        divMensaje.textContent = mensaje;
        document.body.appendChild(divMensaje);
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    renderizarPedidos();
});