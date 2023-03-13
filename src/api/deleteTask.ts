import { api } from "./api";

export async function deleteTask(taskID: string, token: string) {
    return api.delete(
        'tasks/' + taskID,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    )
}
