import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Login } from './components/login/login';
import { Favoritoss } from './components/favoritoss/favoritoss';
import { Catalogo } from './components/catalogo/catalogo';
import { Ofertas } from './components/ofertas/ofertas';
import { Categorias } from './components/categorias/categorias';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'inicio', component: Inicio },
    { path: 'favoritoss', component: Favoritoss },
    { path: 'catalogo', component: Catalogo },
    { path: 'ofertas', component: Ofertas },
    { path: 'categorias', component: Categorias },
    { path: '**', redirectTo: 'login' }
];
