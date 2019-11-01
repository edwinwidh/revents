import { combineReducers } from 'redux';
import { reducer as FormReducer} from 'redux-form'
import testReducer from '../../features/testarea/testReducer';
import eventReducers from '../../features/event/eventReducers';
import modalReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducers,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer
})

export default rootReducer;