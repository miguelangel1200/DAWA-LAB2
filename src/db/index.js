import { defaultConfiguration } from "express/lib/application"

const data = []

export const findAll = () => {
    return data
}

//buscar por id
export const findOne = (id) => {
    return data.find((u) => u.id === Number(id))
}

//Create
export const store = (user) => {
    user.id = data.length + 1
    data.push(user)
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