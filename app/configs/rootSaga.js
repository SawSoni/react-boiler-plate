import { takeLatest, put, all, call } from 'redux-saga/effects';
import fetchDataFunction from './serviceFunction';
import { getUserAsyc } from '../containers/HomePage/actions';
import { GET_USERS } from '../containers/HomePage/constants';
import axios from 'axios';


/* const request = (constants) => {
  return { type: constants.INIT }
};

const receive = (constants, data, resolve) => {
  resolve ? resolve(data) : ''
  return { type: constants.SUCCESS, payload: { data } }
};

const error = (constants, err, reject) => {
  reject ? reject(err) : ''
  return { type: constants.ERROR, error: err }
}; */

const URL = "https://jsonplaceholder.typicode.com/users/";

function* getUsersData(){//saga personal
    try{
        console.log("ATTEMPTING TO CALL API BY SAGA");
        const response = yield call(axios.get, URL , {});
        if(response.status === 200){
            console.log(response.data);
            yield put(getUserAsyc(response.data));// this will call reducer
        }
    }
    catch(e){
        console.log(e);
    }
}

 export function* watchGetUsersData(){
    yield takeLatest(GET_USERS , getUsersData );// here the function is call back function, this is default saga
    // yeild will 
}

/* function* fetchDataFunction(url) {
  const { constants, resolve, reject } = action.payload;
  try {
    yield put(request(constants));
    const data = yield fetchApiService({ action });
    yield put(receive(constants, data, resolve));
  } catch (err) {
    yield put(error(constants, err, reject));
  }
}

export function* getApiData() {
  yield takeEvery('GET', fetchApiData);
}
 */
export default function* rootSaga() {
  yield all([watchGetUsersData()])
}