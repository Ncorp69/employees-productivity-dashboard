import DashboardActionTypes from '../../../actionTypes/containers/DashboardActionTypes';
import { List } from 'immutable';

const initialState = {
    loaded: false,
    error: false,
    data: List([])
};

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case DashboardActionTypes.LOAD_DATA_SUCCESS: {
            return {
                loaded: true,
                error: false,
                data: action.data
            };
        }

        case DashboardActionTypes.INIT_EMPLOYEE_ANIMATION:
        case DashboardActionTypes.SWITCH_EMPLOYEE_ACTIVE_VALUE: {
            return {
                ...state,
                data: action.data
            };
        }

        default: {
            return state;
        }
    }
}
