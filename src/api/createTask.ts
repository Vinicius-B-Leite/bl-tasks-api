import { TaskType } from "../@types/TaskType";
import { api } from "./api";


type Props = {
    userID: string,
    title: string,
    description: string,
    token: string
}
export async function createTask({ userID, title, description, token }: Props) {
    return api.post<TaskType>(
        'task',
        {
            userID,
            title,
            description
        },
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    )
        .then((res) => res.data)
        .catch((err) => {
            throw new Error(err.response.data.error)
        })

}