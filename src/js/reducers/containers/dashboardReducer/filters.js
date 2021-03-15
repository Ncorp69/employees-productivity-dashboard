import DashboardActionTypes from '../../../actionTypes/containers/DashboardActionTypes';

const initialState = {
    name: '',
    dateFrom: void 0,
    dateTo: void 0
};

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case DashboardActionTypes.SET_NAME_FILTER: {
            return {
                ...state,
                name: action.name
            };
        }

        case DashboardActionTypes.SET_DATE_FILTER: {
            return {
                ...state,
                dateFrom: action.dateFrom,
                dateTo: action.dateTo
            };
        }

        case DashboardActionTypes.ClEAR_NAME_FILTER: {
            return {
                ...state,
                name: initialState.name
            };
        }

        case DashboardActionTypes.CLEAR_DATE_FILTER: {
            return {
                ...state,
                dateFrom: initialState.dateFrom,
                dateTo: initialState.dateTo
            };
        }

        default: {
            return state;
        }
    }
}
