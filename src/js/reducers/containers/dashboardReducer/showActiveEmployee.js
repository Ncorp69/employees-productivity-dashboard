import DashboardActionTypes from '../../../actionTypes/containers/DashboardActionTypes';

const initialState = true;

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case DashboardActionTypes.SWITCH_EMPLOYEE_TYPE: {
            return !state;
        }

        default: {
            return state;
        }
    }
}
