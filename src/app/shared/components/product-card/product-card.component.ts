import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductImage } from '../../../models/product-image';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent  implements OnInit{
  @Input() id?: number;  
  @Input() sku?: string;
  @Input() descripcionCard?: string;
  @Input() precio?: number;
  @Input() listaImagenes?: ProductImage[];
  @Output() esDetalle = new EventEmitter<boolean>();

  
  imagenPrincipal?:string;
  segundaImagen?:string;
  primeraImagen?:string;
  ngOnInit() : void{
    this.id;
    this.sku;
    this.descripcionCard;    
    if(this.listaImagenes!=null)
      {
        this.imagenPrincipal = this.listaImagenes[0].route;
        this.primeraImagen  = this.listaImagenes[0].route;
        this.segundaImagen = this.listaImagenes[1].route;
      }
    
  }

  obtenerImagenPrincipal(){
    this.imagenPrincipal = this.primeraImagen;
  }

  obtenerImagenSecundaria(){    
    this.imagenPrincipal = this.segundaImagen;
  }

  obtenerDetalle(){
    console.log("Hola estamos aqui");
  }
  onEsDetalle(){
    this.esDetalle.emit(true);
  }

}
