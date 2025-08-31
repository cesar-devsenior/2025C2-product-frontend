import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Producto } from '../../models/producto';
import { Router, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css'],
})
export class ProductoFormComponent {
  productoForm: FormGroup;

  constructor(private fb: FormBuilder, private productoService: ProductoService, private router: Router) {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      precio: ['0', [Validators.required, Validators.min(0)]],
      imagenUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  onSubmit() {
    if (this.productoForm.valid) {
      const producto: Producto = {
        ...this.productoForm.value,
      };
      console.log('Producto a enviar:', producto);
      this.productoService.crearProducto(producto).subscribe({
        next: (producto) => {
            alert("Producto creado exitosamente");
            this.router.navigateByUrl("/productos");
        },
        error: (error) => {
            console.error("Error al crear el producto", error);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.productoForm.controls).forEach((key) => {
      const control = this.productoForm.get(key);
      control?.markAsTouched();
    });
  }

  get nombre() {
    return this.productoForm.get('nombre');
  }

  get precio() {
    return this.productoForm.get('precio');
  }

  get imagenUrl() {
    return this.productoForm.get('imagenUrl');
  }
}
