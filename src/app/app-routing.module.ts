import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PaisComponent } from './pais/pages/pais/pais.component';
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { CapitalComponent } from './pais/pages/capital/capital.component';
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";


const routes: Routes = [
    {
        path: '',
        component: PaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: CapitalComponent
    },
    {
        path: 'pais/:codigoPais',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule ({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}