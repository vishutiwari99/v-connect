import { postDataAPI } from "../../utils/fetchData"
import { GLOBALTYPES } from './globalTypes';

export const login = (data) => async (dispatch) => {

    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI('login', data);
        localStorage.setItem('firstLogin', true);
        dispatch({ type: GLOBALTYPES.AUTH, payload: { token: res.data.access_token, username: res.data.user } })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
        console.log(res)
    } catch (err) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } })
    }
}

export const refreshToken = () => async (dispatch) => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        try {
            const res = await postDataAPI('refresh_token');
            dispatch({ type: GLOBALTYPES.AUTH, payload: { token: res.data.access_token, username: res.data.user } })
            dispatch({ type: GLOBALTYPES.ALERT, payload: {} })

        } catch (err) {
            dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } })
        }
    }
}