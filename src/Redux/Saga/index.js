import watchLogin from './LoginSaga';

const rootSaga = function* rootSaga(){
    yield [
        watchLogin()
    ]
};

export default rootSaga;