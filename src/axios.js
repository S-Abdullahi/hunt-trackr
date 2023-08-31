import axios from "axios";

const customFetch = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit'
})

export const headerAuth = (thunkAPI) =>{
    return {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        }
}
}

export default customFetch