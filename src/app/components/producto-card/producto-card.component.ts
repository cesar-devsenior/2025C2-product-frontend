import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-card.component.html',
  styleUrl: './producto-card.component.css'
})
export class ProductoCardComponent {
  @Input() producto!: Producto;
  @Output() eliminar = new EventEmitter<void>();

  constructor(private productoService: ProductoService, private router: Router){}

  borrarProducto() {
    if(confirm("Está seguro que lo desea eliminar?")){
      this.productoService.eliminarProducto(this.producto.id).subscribe({
        next: () => {
          alert("Producto eliminado exitosamente");
          this.eliminar.emit();
        },
        error: (error) => {
          console.error("Error al eliminar el producto", error);
        }
      });
    }
  }
}
