import { TaskStatusType } from "../@types/TaskStatusType";
import { TaskType } from "../@types/TaskType";
import { api } from "./api";


type TaskInfo = {
    title: string,
    description: string,
    status: TaskStatusType,
    taksID: string
}

interface Props extends TaskInfo {
    token: string
}
export async function updatetask({ title, description, status, taksID, token }: Props) {
    return api.put<TaskType>(
        'tasks',
        {
            title,
            description,
            status,
            taksID,
            token
        },
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    )
        .then(res => res.data)
}