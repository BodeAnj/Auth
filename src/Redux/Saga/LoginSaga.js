import { put,call, takeEvery } from 'redux-saga/effects';
import firebase from 'firebase'
import {
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_REQUESTING
} from '../Action/Types'

export const watchSignupAsync = function* watchSignupAsync({ params }) {
    console.log(params)
       try {
           console.log('---------------SAGA CALLING')
           const response = yield call(firebase.auth().signInWithEmailAndPassword(params.email, params.password).then(
               res => {
                console.log(res)
               }
           ))
           console.log(response)
          yield put({ type: LOGIN_USER_SUCCESS });
       }   
       catch (e) {
           
           yield put({ type: LOGIN_USER_FAIL, payload: e });
       }     
   }
   
   
   const watchLogin = function* watchLogin() {
       yield takeEvery(LOGIN_USER_REQUESTING, watchSignupAsync);
     }
   
     export default watchLogin;