import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  getProductos(): Observable<Producto[]> {
    const productos: Producto[] = [
      {
        id: 1,
        nombre: 'Laptop Gaming Pro',
        precio: 1299.99,
        imagenUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400'
      },
      {
        id: 2,
        nombre: 'Smartphone Galaxy S23',
        precio: 899.99,
        imagenUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400'
      },
      {
        id: 3,
        nombre: 'Auriculares Inalámbricos',
        precio: 199.99,
        imagenUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
      },
      {
        id: 4,
        nombre: 'Tablet iPad Pro',
        precio: 1099.99,
        imagenUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400'
      },
      {
        id: 5,
        nombre: 'Cámara DSLR Canon',
        precio: 799.99,
        imagenUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400'
      },
      {
        id: 6,
        nombre: 'Monitor UltraWide LG',
        precio: 499.99,
        imagenUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400'
      },
      {
        id: 7,
        nombre: 'Teclado Mecánico RGB',
        precio: 149.99,
        imagenUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400'
      },
    ];

    return of(productos).pipe(delay(1500));
    
    //return throwError(() => new Error('Error al obtener los productos')).pipe(delay(3000));
  }
}
