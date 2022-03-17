import { Component, OnInit } from '@angular/core';

interface componente{
  icon: string;
  name: string;
  redirecto: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: componente[]=[
    {
     icon: 'cellular-outline',
     name:'LUGAR DE PROCEDENCIA',
     redirecto:'/action-sheet'
    },
    {
      icon: 'battery-half-outline',
      name:'METAS',
      redirecto:'/alert'
     }
  ];
  constructor() { }

  ngOnInit() {
  }

}
