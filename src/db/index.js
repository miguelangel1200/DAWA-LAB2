import { defaultConfiguration } from "express/lib/application"

const dataProduct = [{
        id: "1",
        name: "Tv Samsung",
        description: "The Tv Samsung of 22' is a wonderful artifact also have new functions",
        price: 2400.99
    },
    {
        id: "2",
        name: "iPhone 14",
        description: "The last celphone from Apple, with a better camera and more capacity",
        price: 3200.99
    },
    {
        id: "3",
        name: "CPU i7 9no Generetion",
        description: "The new and fast pc for anyone, also if you lkike to play some videogames or office",
        price: 3200.99
    }]

const data = [{
        id: "1",
        name: "Miguel Angel",
        lastname: "Medina Ventura",
        age: 22
    },
    {
        id: "2",
        name: "Carlos",
        lastname: "Alcazar",
        age: 20
    },
    {
        id: "3",
        name: "Ana",
        lastname: "Lopez",
        age: 21
    }]
let identificador = 0

export const findAll = () => {
    return data
}

export const findAllProducts = () => {
    return dataProduct
}

export const index = () => {
    return test = [{
        message: "Hola Mundo"
    }]
}

//buscar por id
export const findOne = (id) => {
    return data.find((u) => u.id === Number(id))
}

//Create
export const store = (user) => {
    
    user.id = identificador + 1
    //Guardar los id sin borrar
    data.push(user)

    //const id_num_max = Object.values(id_num)
    // id_num.forEach( (elemento) => {
    //     if (!unicos.includes(elemento)) {
    //         unicos.push(elemento);
    //         //A{adir el maximo}
    //     }
    // })

    identificador = user.id
}

//update
export const update = (id, user) => {
    const index = data.findIndex((u) => u.id === Number(id))
    data[index] = {
        ...data[index],
        ...user,
    }
}

//remove 
export const remove = (id) => {
    const users = data.filter((u) => u.id !== Number(id))
    data.length = 0
    data.push(...users)

}