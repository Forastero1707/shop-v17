import { ProductImage } from "./product-image";

export class CardProduct {
    public id : number|undefined;
    public sku : string|undefined;
    public descripcionCard: string|undefined;
    public precio : number|undefined;
    public listaImagenes : ProductImage[] | undefined;
}