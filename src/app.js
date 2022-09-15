import express from "express";
import cors from "cors";
import { user, product } from "./components";

export const app = express()

app.use(cors())
app.use(express.json())
// express url encode
app.use(express.urlencoded({ extended: true}))

app.use('/clientes', user)
app.use('/productos', product)

