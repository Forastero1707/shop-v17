import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { CardProduct } from './models/card-product';
import { ProductDetilComponent } from './shared/components/product-detil/product-detil.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
register();
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCardComponent, ProductDetilComponent],
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './app.component.scss',
  host: {ngSkipHydration: 'true'},
  
})

export class AppComponent implements OnInit{
  
  
  estadoHola = false;
  title = 'app-prueba-v1';

  esDetalle: boolean = false;
  esfiltro: boolean = false;
  productosNuevos: CardProduct[] = [
    {
      id : 1,
      sku : "025478",
      descripcionCard: "DISCO SOLIDO SSD MSI 500GB SPATIUM M450 ( SPATIUM M450 ) PCIE | NVME | GEN4",
      precio : 165,
      listaImagenes : [
        {
          id : 1,
          route : "https://www.infotec.com.pe/73330-medium_default/disco-solido-ssd-msi-500gb-spatium-m450-spatium-m450-pcie-nvme-gen4.jpg"
        },
        {
          id : 2,
          route : "https://www.infotec.com.pe/73329-thickbox_default/disco-solido-ssd-msi-500gb-spatium-m450-spatium-m450-pcie-nvme-gen4.jpg"
        }
      ]
    },
    {
      id : 2,
      sku : "025479",
      descripcionCard: "PARLANTE CREATIVE PEBBLE PLUS 2.1 USB BLACK",
      precio : 149,
      listaImagenes : [
        {
          id : 3,
          route : "https://www.infotec.com.pe/76472-thickbox_default/parlante-creative-pebble-plus-21-usb-black.jpg"
        },
        {
          id : 4,
          route : "https://www.infotec.com.pe/76468-thickbox_default/parlante-creative-pebble-plus-21-usb-black.jpg"
        }
      ]
    },
    {
      id : 3,
      sku : "025480",
      descripcionCard: "TECLADO LOGITECH PEBBLE KEYS 2 K380S WIRELESS| BLUETOOTH | GRAPHITE SP ( 920-011783 )",
      precio : 129,
      listaImagenes : [
        {
          id : 5,
          route : "https://www.infotec.com.pe/79982-thickbox_default/teclado-logitech-pebble-keys-2-k380s-wireless-bluetooth-graphite-sp-920-011783-.jpg"
        },
        {
          id : 6,
          route : "https://www.infotec.com.pe/79983-thickbox_default/teclado-logitech-pebble-keys-2-k380s-wireless-bluetooth-graphite-sp-920-011783-.jpg"
        }
      ]
    },
    {
      id : 4,
      sku : "025481",
      descripcionCard: "CABLE HDMI UGREEN ( 80403 ) 4K 120HZ - 8K 60HZ | 2 METROS | TRENZADOds",
      precio : 49,
      listaImagenes : [
        {
          id : 7,
          route : "https://www.infotec.com.pe/83922-thickbox_default/cable-hdmi-ugreen-80403-4k-120hz-8k-60hz-2-metros-trenzado.jpg"
        },
        {
          id : 8,
          route : "https://www.infotec.com.pe/83923-thickbox_default/cable-hdmi-ugreen-80403-4k-120hz-8k-60hz-2-metros-trenzado.jpg"
        }
      ]
    },
];
ngOnInit(): void {
  
}

  mostrar() {
    
    this.title = 'Jhames';
  }
  public mostrarProducto(): void {
    alert("Hola Carla");
  }
  public swipeOptions = {
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  sku :string ="ASUS TUF FX505DT Gaming Laptop- 15.6inch, 120Hz Full HD, AMD Ryzen 5 R5-3550H Processor, GeForce GTX 1650 Graphics, 8GB DDR4, 256GB PCIe SSD, RGB Keyboard, Windows 10 64-bit - FX505DT-AH51";
  precio : number = 3499;

  procesarRespuesta(esDetalle:boolean)
  {
    if(esDetalle){
      this.esDetalle = esDetalle;
      console.log("entró")
    }
  }
}
