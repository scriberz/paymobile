import {ModalReducer} from './compinents/modal/index';

export default combineReducers({
    routing: routerReducer,
    ...ModalReducer
});