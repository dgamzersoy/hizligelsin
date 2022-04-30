import { BaseClass } from "./baseClass";
import { Rating } from "./rating";


export interface Product extends BaseClass{
    id:number;
    title:string;
    description:string;
    price:number;
    category:string;
    image:string;
    rating:Rating;
}
    
    