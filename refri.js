'use strict'
class Refrigerator {
    constructor(huevo, leche, tomate, papas, pollo) {
        this.huevo = huevo;
        this.leche = leche;
        this.tomate = tomate;
        this.papas = papas;
        this.pollo = pollo;
    }

    // Método para agregar productos
    agregarProducto(producto, cantidad) {
        switch(producto) {
            case 'huevo':
                this.huevo += cantidad;
                break;
            case 'leche':
                this.leche += cantidad;
                break;
            case 'tomate':
                this.tomate += cantidad;
                break;
            case 'papas':
                this.papas += cantidad;
                break;
            case 'pollo':
                this.pollo += cantidad;
                break;
            default:
                alert("Producto no reconocido.");
                break;
        }
       alert(`Se agregaron ${cantidad} ${producto}(s).`);
    }

    // Método para quitar productos
    quitarProducto(producto, cantidad) {
        switch(producto) {
            case 'huevo':
                this.huevo = Math.max(0, this.huevo - cantidad);
                break;
            case 'leche':
                this.leche = Math.max(0, this.leche - cantidad);
                break;
            case 'tomate':
                this.tomate = Math.max(0, this.tomate - cantidad);
                break;
            case 'papas':
                this.papas = Math.max(0, this.papas - cantidad);
                break;
            case 'pollo':
                this.pollo = Math.max(0, this.pollo - cantidad);
                break;
            default:
               alert("Producto no reconocido.");
                break;
        }
        alert(`Se quitaron ${cantidad} ${producto}(s).`);
    }

    // Método para mostrar la información actual del refrigerador
    mostrarInformacion() {
        alert("Contenidos del Refrigerador:");
        alert(`Huevo: ${this.huevo}`);
        alert(`Leche: ${this.leche}`);
        alert(`Tomate: ${this.tomate}`);
        alert(`Papas: ${this.papas}`);
        alert(`Pollo: ${this.pollo}`);
    }
}

// Ejemplo de uso
let miRefrigerador = new Refrigerator(20, 2, 10, 5, 3);
miRefrigerador.agregarProducto('huevo', 10);
miRefrigerador.quitarProducto('leche', 1);
miRefrigerador.mostrarInformacion();
