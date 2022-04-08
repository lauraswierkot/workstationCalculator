import { Guid } from "guid-typescript";

export interface ItemModel
{
    id: Guid; 
    item: string; 
    details: string; 
    category: string; 
    price: number;
}