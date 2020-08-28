import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest, select, throttle } from "redux-saga/effects";


const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";


export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);


function* increaseSaga() {
  yield delay(1000);                // Wait 1 Second.
  yield put(increase());            // Dispatch a specific Action.
  const number = yield select(state => state.counter);    // select
  console.log(`Now Number is ${number}`);
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}
export function* counterSaga() {    // Saga
  // yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);   // throttle: Call Only Once in N Seconds
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}


const initialState = 0;
const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);


export default counter;


// // Thunk creator
// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };
// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

// // Thunk
// const initialState = 0;
// const counter = handleActions(
//   {
//     [INCREASE]: (state) => state + 1,
//     [DECREASE]: (state) => state - 1,
//   },
//   initialState
// );