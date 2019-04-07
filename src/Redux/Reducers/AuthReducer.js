import { LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS ,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS

} from '../Action/Types';

    const INITIAL_STATE = {};
  
    export default (state = INITIAL_STATE, action) => {
        console.log('*****************REDUCER')
        switch (action.type) {

            case LOGIN_USER_SUCCESS:
                return { loginSuccess : true,};

            case LOGIN_USER_FAIL:
                return { loginFail : true };

            // case SIGN_UP_FAIL:
            //     return { loginFail : true };

            // case SIGN_UP_SUCCESS:
            //     return { loginFail : true ,data : action.payload };

                default:
                return state;
        };
    };