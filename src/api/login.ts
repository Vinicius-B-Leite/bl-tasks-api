import { UserType } from "../@types/UserType"
import { api } from "./api"

type LoginProps = {
    username: string,
    password: string
}
interface ApiError {
    message: string;
    response: {
      status: number;
      data: any
    };
    request?: any;
    config?: any;
  }
  

export async function login({ password, username }: LoginProps) {


    return api.post<UserType>(
        'login',
        {
            password,
            username
        }
    )
        .then(res => res.data)
        .catch((err: ApiError) => {            
            throw new Error(err?.response.data.error)
        })

}