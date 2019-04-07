import {LOGIN_USER_REQUESTING,
    SIGN_UP_REQUESTING

} from './Types'


export const loginRequest = (params) => {
  console.log(params)
    return {
      type: LOGIN_USER_REQUESTING,
      params,
    };
  }

  // export const signupRequest = (params) => {
  //   return {
  //     type: SIGN_UP_REQUESTING,
  //     params
  //   };
  // }


  