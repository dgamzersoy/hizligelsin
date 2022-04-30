import { Address } from "cluster";
import { BaseClass } from "./baseClass";
import { Name } from "./name";

export interface User extends BaseClass{
    address: Address;
    id: number;
    email: string;
    username: string;
    password: string;
    name: Name;
    phone: string;
    __v: number;
}