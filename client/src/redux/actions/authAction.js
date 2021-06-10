import { postDataAPI } from "../../utils/fetchData"

export const TYPES = {
    AUTH: 'AUTH'
}

export const login = (data) => async (dispatch) => {

    try {
        dispatch({ type: 'NOTIFY', payload: { loading: true } })
        const res = await postDataAPI('login', data);
        localStorage.setItem('firstLogin', true);
        dispatch({ type: 'AUTH', payload: { token: res.data.access_token, username: res.data.user } })
        dispatch({ type: 'NOTIFY', payload: { success: res.data.msg } })
        console.log(res)
    } catch (err) {
        dispatch({ type: 'NOTIFY', payload: { error: err.response.data.msg } })

    }
}