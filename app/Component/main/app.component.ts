import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Classes/Producto';
import { ListaCompraApiService } from '../../Services/listaCompraApi-service/listaCompraApi-service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  productos: Array<Producto> = [];

  constructor(private servicio: ListaCompraApiService) {

  }

  ngOnInit() {
    this.servicio.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  guardar(model: Producto) {

    this.servicio.addProducto(model).subscribe(data => {
      this.productos.push(data);
    });


  }

}
