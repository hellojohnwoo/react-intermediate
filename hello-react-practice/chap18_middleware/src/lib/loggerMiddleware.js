const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type); 
  console.log('prev State', store.getState());
  console.log('Action', action);
  next(action);
  console.log('next State', store.getState());
  console.groupEnd();
};

export default loggerMiddleware;



// const loggerMiddleware = function loggerMiddleware(store) {
// 	return function(next) {
// 		return function(action) {

// 		};
// 	};
// };