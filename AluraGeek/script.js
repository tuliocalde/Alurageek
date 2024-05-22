document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const productosContainer = document.getElementById('productos-container');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const imagen = document.getElementById('imagen').files[0];

        // Crear elementos para mostrar el producto
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');

        const nombreElement = document.createElement('h3');
        nombreElement.textContent = nombre;

        const precioElement = document.createElement('p');
        precioElement.textContent = `Precio: ${precio}`;

        const imagenElement = document.createElement('img');
        imagenElement.src = URL.createObjectURL(imagen);

        const borrarElement = document.createElement('button');
        borrarElement.innerHTML = '<i class="fas fa-trash"></i>';

        borrarElement.addEventListener('click', function() {
            productoElement.remove();
        });

        productoElement.appendChild(imagenElement);
        productoElement.appendChild(nombreElement);
        productoElement.appendChild(precioElement);
        productoElement.appendChild(borrarElement);

        productosContainer.appendChild(productoElement);

        // Limpiar el formulario
        formulario.reset();
    });

    const limpiarBoton = document.getElementById('limpiar');
    limpiarBoton.addEventListener('click', function() {
        formulario.reset();
    });
});
