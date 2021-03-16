import { Router } from "express";

export default interface IRoute {
    PATH: string,
    create: () => Router
}