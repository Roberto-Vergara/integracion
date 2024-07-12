let carrito = []; // Array para almacenar los productos en el carrito

// Función para agregar un producto al carrito
function añadirProductoAlCarrito(elemento) {
    // Obtener el nombre del plato
    const nombrePlato = elemento.parentNode.querySelector('.card-title').textContent.trim();
    
    // Obtener el precio del plato
    const precioTexto = elemento.parentNode.querySelector('.card-text').textContent.trim();
    const precio = parseFloat(precioTexto.replace('$', '').replace(' pesos', ''));

    const id = elemento.parentNode.querySelector('.enviar').getAttribute("marcador");
    
    // Agregar el nombre y el precio al carrito como objeto
    carrito.push({ nombre: nombrePlato, precio: precio, id:id });
    
    mostrarCarrito();
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - ${item.precio} pesos`;
        li.classList.add('list-group-item');
        carritoElement.appendChild(li);
    });
    calcularTotal();
}

// Función para calcular el total del carrito
function calcularTotal() {
    const totalElement = document.getElementById('total');
    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    totalElement.textContent = total;
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}

// Simulación de función para pagar (puedes implementar tu lógica de pago real)
const pagar=async()=>{
        //   console.log("llego");
        //   console.log(carrito);
        try {
            const mandarId = await fetch("/platoComprado", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify(carrito)
            });
        
            if (!mandarId.ok) {
                throw new Error(`Error al enviar datos: ${mandarId.status}`);
            }
        
            const res = await mandarId.json();
            console.log("Respuesta del servidor:", res);
        
            // Redirigir después de recibir una respuesta exitosa
            window.location.href = "http://localhost:8000/pedidos";
        } catch (error) {
            console.error("Error al enviar datos:", error);
            // Manejar errores como desees
        }
        // try {
        //     const mandarId = await fetch("/platoComprado",{
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json" 
        //         },
        //         body: JSON.stringify(carrito)
        //     })
    
        //     const res = await mandarId.json();
        //     window.location.href="http://localhost:8000/pedidos";
        //     console.log("corriendo");
            
    
        //     // const res = await fetch("/pay/create-checkout-session",{
        //     // method:"POST"
        //     // })
        //     // const data = await res.json()
            

        // } catch (error) {
        //     console.log("algo salio mal");
        // }
        

}
// Función para abrir y cerrar el carrito lateral
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('open');
}