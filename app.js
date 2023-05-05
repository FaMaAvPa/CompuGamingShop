/// Declaración de variables
let productos = [
    {nombre: "Laptop", precio: 1000},
    {nombre: "Monitor", precio: 200},
    {nombre: "Mouse", precio: 30},
    {nombre: "Teclado", precio: 50},
  ];
  let carrito = [];
  let continuarComprando = true;
  
  // Funciones de orden superior
  const sumarPrecios = (total, producto) => total + producto.precio;
  const calcularTotal = (carrito) => carrito.reduce(sumarPrecios, 0);
  
  // Función para mostrar el carrito de compras
  const mostrarCarrito = () => {
    let mensaje = "Carrito de compras:\n";
    mensaje += carrito.map(producto => producto.nombre + " - $" + producto.precio).join("\n");
    mensaje += "\n\nTotal: $" + calcularTotal(carrito);
    console.log(mensaje);
    alert(mensaje)
  }                            
  
  // Función para buscar un producto por nombre
  const buscarProducto = (nombre) => {
    return productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
  }
  
  // Ciclo para continuar comprando
  while (continuarComprando) {
    // Mostrar lista de productos
    console.log("Lista de productos:");
    productos.forEach((producto, index) => {
      console.log((index + 1) + ". " + producto.nombre + " - $" + producto.precio);
    });
    
    // Preguntar al usuario qué producto desea agregar al carrito
    const nombreProducto = prompt("Ingrese el nombre del producto que desea agregar al carrito: \n Laptop \n Monitor \n Mouse \n Teclado");
  
    // Buscar el producto en la lista de productos
    const producto = buscarProducto(nombreProducto);
  
    if (producto) {
      // Agregar el producto al carrito
      carrito.push(producto);
      console.log(producto.nombre + " agregado al carrito.");
  
      // Preguntar al usuario si desea seguir comprando
      const continuar = prompt("¿Desea agregar otro producto al carrito? (S/N)").toLowerCase();
      continuarComprando = continuar === "s" || continuar === "si";
    } else {
      console.log("El producto no se encuentra en la lista.");
    }
  }
  
  // Mostrar el carrito de compras
  mostrarCarrito();
  
  // Filtrar los productos en el carrito por un rango de precios
  const filtrarPorPrecio = (carrito, min, max) => {
    return carrito.filter(producto => producto.precio >= min && producto.precio <= max);
  }
  
  // Filtrar productos en el carrito con un precio entre 100 y 500
  const productosFiltrados = filtrarPorPrecio(carrito, 100, 500);
  
  // Mostrar los productos filtrados
  console.log("Productos filtrados:");
  productosFiltrados.forEach(producto => console.log(producto.nombre + " - $" + producto.precio));
  
 

