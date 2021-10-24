import data from '../models/data.json';


export interface Noticia{
  id:number;
  titulo:string;
  contenido:string;
  img:string;
  autor:string;
  categoria:number;
  fecha: string;
}
export let lista_noticias:Array<Noticia>=data;
// export let lista_noticias:Array<Noticia>=[
//     { id:1,titulo:'titulo1',
//       contenido:'contenido1',
//       img:'https://i.redd.it/suj8rjaqyrd31.png',
//       autor:'autor1',
//       categoria:1,
//       fecha:Date().toString()
//     },
//     { id:2,titulo:'titulo2',
//       contenido:'contenido2',
//       img:'https://i.redd.it/suj8rjaqyrd31.png',
//       autor:'autor2',
//       categoria:2,
//       fecha:Date().toString()
//     },
//     { id:3,titulo:'titulo3',
//       contenido:'contenido3',
//       img:'https://i.redd.it/suj8rjaqyrd31.png',
//       autor:'autor3',
//       categoria:3,
//       fecha:Date().toString()
//     },
//     { id:4,titulo:'titulo4',
//       contenido:'contenido4',
//       img:'https://i.redd.it/suj8rjaqyrd31.png',
//       autor:'autor4',
//       categoria:4,
//       fecha:Date().toString()
//     },
//     { id:5,titulo:'titulo5',
//       contenido:'contenido5',
//       img:'https://i.redd.it/suj8rjaqyrd31.png',
//       autor:'autor5',
//       categoria:5,
//       fecha:Date().toString()
//     },
//     { id:6,titulo:'titulo6',
//       contenido:'contenido6',
//       img:'https://i.redd.it/suj8rjaqyrd31.png',
//       autor:'autor6',
//       categoria:6,
//       fecha:Date().toString()
//     },
//     { id:7,titulo:'titulo7',
//       contenido:'contenido7',
//       img:'https://i.redd.it/suj8rjaqyrd31.png',
//       autor:'autor7',
//       categoria:1,
//       fecha:Date().toString()
//     },
//     { id:8,titulo:'titulo8',
//       contenido:'contenido8',
//       img:'https://i.redd.it/suj8rjaqyrd31.png',
//       autor:'autor8',
//       categoria:2,
//       fecha:Date().toString()
//     },
//     { id:9,titulo:'titulo9',
//       contenido:'contenido9',
//       img:'https://i.redd.it/suj8rjaqyrd31.png',
//       autor:'autor9',
//       categoria:3,
//       fecha:Date().toString()
//     },
//     { id:10,titulo:'titulo10',
//       contenido:'contenido10',
//       img:'https://i.redd.it/suj8rjaqyrd31.png',
//       autor:'autor5',
//       categoria:4,
//       fecha:Date().toString()
//     },
//     { id:11,titulo:'titulo11',
//       contenido:'contenido11',
//       img:'https://i.redd.it/suj8rjaqyrd31.png',
//       autor:'autor5',
//       categoria:5,
//       fecha:Date().toString()
//     },
//     { id:12,titulo:'titulo12',
//       contenido:'contenido12',
//       img:'https://i.redd.it/suj8rjaqyrd31.png',
//       autor:'autor5',
//       categoria:6,
//       fecha:Date().toString()
//     }
// ];
