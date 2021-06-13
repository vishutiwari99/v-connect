import { combineReducers } from 'redux';
import 'material-icons/iconfont/filled.css';
import auth from './authReducer'
import alert from './alertReducer'
import theme from './themeReducer'
export default combineReducers({
    auth,
    alert,
    theme
})