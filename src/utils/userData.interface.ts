import { IProduct } from "./product.interface";

export interface IUserData {
    id: string;
    name: string;
    points: number;
    redeemHistory: IProduct[]
}
