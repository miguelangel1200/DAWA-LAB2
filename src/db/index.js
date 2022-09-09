import { defaultConfiguration } from "express/lib/application"

const data = []
let identificador = 0

export const findAll = () => {
    return data
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