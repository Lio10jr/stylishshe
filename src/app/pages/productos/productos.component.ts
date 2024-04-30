import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productosMujer: any[] = [
    {
      marca: "Zara",
      categoria: "Vestidos",
      nombre: "Vestido floral",
      color: "Rojo",
      precio: "$49.99",
      imagen: "https://images.vestiairecollective.com/cdn-cgi/image/w=1246,q=70,f=auto,/produit/vestidos-zara-de-poliester-rojo-27115154-10_1.jpg",
      descripcion: "Un hermoso vestido floral en tonos rojos y rosados, perfecto para una ocasión especial."
    },
    {
      marca: "H&M",
      categoria: "Pantalones",
      nombre: "Jeans ajustados",
      color: "Azul oscuro",
      precio: "$29.99",
      imagen: "https://i.pinimg.com/736x/8e/32/77/8e32771a0c53b532b2ba9f8f7c57af28.jpg",
      descripcion: "Jeans ajustados de alta calidad en un azul oscuro clásico. Combinan perfectamente con cualquier blusa o camiseta."
    },
    {
      marca: "Forever 21",
      categoria: "Tops",
      nombre: "Top crop con estampado tropical",
      color: "Rosa/Multicolor",
      precio: "$19.99",
      imagen: "https://i.ebayimg.com/thumbs/images/g/lfsAAOSwmRFkvgRf/s-l640.jpg",
      descripcion: "Un top crop con un divertido estampado tropical en tonos verdes y multicolores. Ideal para los días de verano."
    },
    {
      marca: "Mango",
      categoria: "Blusas",
      nombre: "Blusa de satén",
      color: "Blanco",
      precio: "$39.99",
      imagen: "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2023/09/05/16939022166982.png",
      descripcion: "Blusa de satén suave y elegante en color blanco. Perfecta para una salida nocturna o una ocasión especial."
    },
    {
      marca: "Zara",
      categoria: "Faldas",
      nombre: "Falda plisada",
      color: "Roja",
      precio: "$34.99",
      imagen: "https://phantom-telva.unidadeditorial.es/773ebf6536cd8d7aa1c66ed746f731ec/resize/640/assets/multimedia/imagenes/2020/04/07/15862691109561.jpg",
      descripcion: "Falda plisada en negro clásico. Versátil y elegante, ideal para el trabajo o una cena."
    },
    {
      marca: "H&M",
      categoria: "Vestidos",
      nombre: "Vestido camisero a rayas",
      color: "Blanco/Negro",
      precio: "$39.99",
      imagen: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F95%2F1d%2F951dca088fa984242c775a8829d94cd8d92746f1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D",
      descripcion: "Vestido camisero a rayas en blanco y negro. Cómodo y elegante, perfecto para el uso diario."
    },
    {
      marca: "Zara",
      categoria: "Chaquetas",
      nombre: "Cárdigan largo",
      color: "Blanco",
      precio: "$45.99",
      imagen: "https://okdiario.com/look/img/2020/09/09/3859002712_6_1_1.jpg",
      descripcion: "Cárdigan largo en un suave tejido de punto en color gris. Perfecto para mantenerse abrigada en días frescos."
    },
    {
      marca: "Forever 21",
      categoria: "Shorts",
      nombre: "Shorts de mezclilla",
      color: "Azul claro",
      precio: "$24.99",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFeaQRsf6de3e83CaZoP8c-VQ1HRAjMbk5P2DaMb_3A&s",
      descripcion: "Shorts de mezclilla en un azul claro desgastado. Cómodos y versátiles, ideales para los días calurosos."
    },
    {
      marca: "Mango",
      categoria: "Blusas",
      nombre: "Blusa de encaje",
      color: "Transparente",
      precio: "$29.99",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJkkvNnppEVmDRPCIYZjYYqXG1ZwY3qOoAlvXQuFudw&s",
      descripcion: "Blusa de encaje delicada en negro clásico. Elegante y romántica, perfecta para una salida nocturna."
    },
    {
      marca: "Zara",
      categoria: "Vestidos",
      nombre: "Vestido camisero",
      color: "Blanco",
      precio: "$39.99",
      imagen: "https://static.zara.net/assets/public/3690/342e/d7d34a1c9ace/73af544d6bda/08351030250-e1/08351030250-e1.jpg?ts=1714133156100&w=412",
      descripcion: "Vestido camisero en azul intenso. Cómodo y elegante, perfecto para el trabajo o una cita casual."
    },
    {
      marca: "H&M",
      categoria: "Faldas",
      nombre: "Falda midi plisada",
      color: "Rosa",
      precio: "$29.99",
      imagen: "https://hmecuador.vtexassets.com/arquivos/ids/1696672/Falda-plisada---Negro---H-M-EC.jpg?v=638471362943970000",
      descripcion: "Falda midi plisada en un hermoso tono rosa suave. Versátil y femenina, ideal para cualquier ocasión."
    },
    {
      marca: "Forever 21",
      categoria: "Tops",
      nombre: "Top corto con volantes",
      color: "Rosa",
      precio: "$19.99",
      imagen: "https://d30o7qbghf97ws.cloudfront.net/itemimage/6342463/image/list-7bdf71167f94247cd3afed5927e5b1b6.jpg",
      descripcion: "Top corto con volantes en blanco puro. Fresco y juvenil, ideal para los días de verano."
    },
    {
      marca: "Zara",
      categoria: "Pantalones",
      nombre: "Pantalones cargo",
      color: "Beige",
      precio: "$49.99",
      imagen: "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2023/09/15/16947683647098.jpg",
      descripcion: "Pantalones cargo en beige neutro. Cómodos y funcionales, perfectos para un look casual urbano."
    },
    {
      marca: "H&M",
      categoria: "Blusas",
      nombre: "Blusa sin mangas",
      color: "Verde",
      precio: "$24.99",
      imagen: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F41%2F00%2F41009b174da8c711e8bdcbe8ea51abd0ca800a0d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shirtsblouses_blouses%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      descripcion: "Blusa sin mangas en un vibrante tono amarillo. Fresca y alegre, perfecta para el verano."
    },
    {
      marca: "Forever 21",
      categoria: "Vestidos",
      nombre: "Vestido skater",
      color: "Negro",
      precio: "$29.99",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEhU1V9fXyyiV49NQnyy8KKlwS-5ykbgW6AC0A9Fo6A&s",
      descripcion: "Vestido skater en rosa pastel. Dulce y femenino, ideal para una tarde de paseo."
    },
  ];
  
  
}
