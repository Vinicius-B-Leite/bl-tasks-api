import { api } from "./api";



type Response = {
    id: string,
    username: string,
    password: string
}
export async function singup(username: string, password: string) {
    return api.post<Response>(
        'user',
        {
            username,
            password
        }
    )
        .then((res) => res.data)
        .catch((error) => {
            throw new Error(error.response.data.error)
        })
}