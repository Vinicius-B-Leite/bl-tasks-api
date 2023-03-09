export type TaskType = {
    id: string,
    userID: string,
    titile: string,
    description: string,
    status: 'on hold' | 'done',
    created_at: Date,
  
}