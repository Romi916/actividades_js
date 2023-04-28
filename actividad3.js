class Carrito {
    constructor(montoTotal, productos) {
      this.montoTotal = montoTotal;
      this.productos = productos;
    }
  
    agregarProducto(producto, precio, unidades) {
      const index = this.productos.findIndex(p => p.nombre === producto);
      if (index !== -1) {
        console.log(`Ya existe ${producto} con ${this.productos[index].unidades} unidades.`);
      } else {
        this.productos.push({ nombre: producto, precio, unidades });
        this.montoTotal += precio * unidades;
      }
    }
  
    eliminarProducto(producto, precio, unidades) {
      const index = this.productos.findIndex(p => p.nombre === producto);
      if (index !== -1) {
        this.productos.splice(index, 1);
        this.montoTotal -= precio * unidades;
      }
    }
  }
  
  const carrito = new Carrito(10, [{ nombre: "Leche", precio: 2, unidades: 1 }]);
  console.log(carrito); 
  
  carrito.agregarProducto("Pan", 3, 2);
  console.log(carrito); 
  
  carrito.agregarProducto("Leche", 2, 1); 
  console.log(carrito); 

  carrito.eliminarProducto("Leche", 2, 1);
  console.log(carrito); 