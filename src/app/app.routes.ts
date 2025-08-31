import { Routes } from '@angular/router';
import { ProductoFormComponent, ProductoListComponent } from './components';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "productos",
        pathMatch: "full"
    },
    {
        path: "productos",
        component: ProductoListComponent
    },
    {
        path: "productos/nuevo",
        component: ProductoFormComponent
    }
];
