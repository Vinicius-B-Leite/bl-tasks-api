import { TaskType } from "../@types/TaskType"
import { api } from "./api"

type Props = {
    userID: string,
    status: 'on hold' | 'done',
    token: string
}
export async function getTasks({ status, userID, token }: Props) {
    const { data } = await api.get(
        `tasks/${userID}?status=${status}`,
        {
            headers: {
                'Authorization': token
            }
        })

    return data as TaskType[]
}