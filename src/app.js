import express from "express";
import cors from "cors";
import { user, product } from "./components";

export const app = express()

app.use(cors())
app.use(express.json())
// express url encode
app.use(express.urlencoded({ extended: true}))

app.use('/api/v1/user', user)
app.use('/api/v1/product', product)