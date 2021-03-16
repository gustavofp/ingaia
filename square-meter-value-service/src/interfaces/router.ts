import { Router } from "express";

export default interface IRouter {
    create: () => Router
}