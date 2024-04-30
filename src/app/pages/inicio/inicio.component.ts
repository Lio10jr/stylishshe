import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  categorias: any[] = [
    {
      nombre: "Vestidos",
      descripcion: "Prendas versátiles y elegantes para ocasiones especiales o uso diario.",
    },
    {
      nombre: "Pantalones",
      descripcion: "Diversos estilos de pantalones para adaptarse a cualquier ocasión o preferencia."
    },
    {
      nombre: "Tops",
      descripcion: "Camisetas, blusas y tops de moda para combinar con cualquier parte inferior."
    },
    {
      nombre: "Blusas",
      descripcion: "Blusas elegantes y sofisticadas para ocasiones formales o informales."
    },
    {
      nombre: "Faldas",
      descripcion: "Faldas de diversos estilos y longitudes para lucir femenina y elegante."
    },
    {
      nombre: "Chaquetas",
      descripcion: "Chaquetas y abrigos para mantenerte abrigada y a la moda en cualquier clima."
    },
    {
      nombre: "Shorts",
      descripcion: "Shorts cómodos y modernos para disfrutar del verano con estilo."
    },
  ];

  marcas: any[] = [
    {
      nombre: "Zara",
      descripcion: "Marca de moda global conocida por su estilo moderno y vanguardista.",
      img: 'https://logowik.com/content/uploads/images/zara-new3742.logowik.com.webp'
    },
    {
      nombre: "H&M",
      descripcion: "Marca sueca de moda asequible y sostenible para toda la familia.",
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png'
    },
    {
      nombre: "Forever 21",
      descripcion: "Marca estadounidense de moda rápida que ofrece las últimas tendencias a precios asequibles.",
      img: 'https://logodownload.org/wp-content/uploads/2021/04/forever-21-logo-0.png'
    },
    {
      nombre: "Mango",
      descripcion: "Marca española de moda que ofrece ropa elegante y contemporánea para mujeres urbanas.",
      img: 'https://i.pinimg.com/originals/95/db/e9/95dbe9457b02f38b2e18393ceaafee7f.png'
    },
  ];
  
  
}
