export interface Categoria{
    id:number;
    nombre:string;
    color_class:string;
}
export let lista_categorias:Array<Categoria>=[
    {id:1, nombre:'Entretenimiento',color_class:'verde'},
    {id:2, nombre:'Mundo',color_class:'azul'},
    {id:3, nombre:'Deporte',color_class:'rojo_oscuro'},
    {id:4, nombre:'Economía',color_class:'violeta'},
    {id:5, nombre:'Salud',color_class:'azul_oscuro'},
    {id:6, nombre:'Tecnología',color_class:'rojo'}
];