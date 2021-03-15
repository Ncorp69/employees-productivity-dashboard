import React from 'react';
import { fromJS } from 'immutable';
import DashboardActionTypes from '../../actionTypes/containers/DashboardActionTypes';
import { Data } from '../../constants/Data';
import { Button } from '../../components/Button';

export const loadData = () => dispatch => {
    const data = Data.map(( employee, ind ) => {
        const { times } = employee;
        const { totalClockedInTime, totalUnproductiveTime } = times.reduce(( res, cur ) => {
            cur.clockedIn = new Date( cur.clockedIn );
            cur.clockedOut = new Date( cur.clockedOut );
            cur.unproductiveTime = cur.unproductiveTime ? + ( cur.unproductiveTime.split( 'min' )[0]) : 0;
            cur.clockedInTime = ( cur.clockedOut - cur.clockedIn ) / 60000;

            return {
                totalClockedInTime: res.totalClockedInTime + cur.clockedInTime,
                totalUnproductiveTime: res.totalUnproductiveTime + cur.unproductiveTime
            }
        }, { totalClockedInTime: 0, totalUnproductiveTime: 0 });

        return {
            ...employee,
            index: ind,
            totalClockedInTime,
            totalUnproductiveTime,
            totalProductiveTime: totalClockedInTime - totalUnproductiveTime,
            ratio: (( totalClockedInTime - totalUnproductiveTime ) * 100 / totalClockedInTime).toFixed(2) + '%'
        };
    });

    setTimeout(() => dispatch({
        type: DashboardActionTypes.LOAD_DATA_SUCCESS,
        data: fromJS( data )
    }), 2000 );
};

export const convertMins = mins => `${ mins >= 1440 ? Math.floor(mins / 1440) + 'd. ' : ''}${Math.floor(mins / 60) % 24}h. ${mins % 60}min.`;

export const removeExcessEmployees = ( rows, showActive ) => rows.filter( row => row.get( 'active' ) === showActive);

export const getSummary = ( rows, showActive ) => removeExcessEmployees( rows, showActive )
    .reduce(( res, cur ) => ({
        total: res.total + cur.get( 'totalClockedInTime' ),
        productive: res.productive + cur.get( 'totalProductiveTime' ),
        count: ++res.count
    }), { total: 0, productive: 0, count: 0 });

const getRowButton = ( rows, ind, active) => dispatch => {
    const action = () => {
        const data = rows.setIn([ ind, 'switching' ], true );

        dispatch({
            type: DashboardActionTypes.INIT_EMPLOYEE_ANIMATION,
            data
        });

        setTimeout(() => dispatch({
            type: DashboardActionTypes.SWITCH_EMPLOYEE_ACTIVE_VALUE,
            data: data.setIn([ ind, 'switching' ], false ).setIn([ ind, 'active' ], !active )
        }), 200 );
    }

    return <Button onClick={action} width="100%">{active ? 'deactivate' : 'activate'}</Button>;
};

const checkName = ( row, name ) => typeof name !== 'string' || row.get( 'name' ).toLowerCase().includes( name.toLowerCase());

const checkTimes = ( row, dateFrom, dateTo ) => row.get( 'times' )
    .filter( time => {
        const clockedIn = time.get( 'clockedIn' );

        return ( !dateFrom || clockedIn >= dateFrom ) && ( !dateTo || clockedIn <= dateTo );
    })
    .size !== 0;

export const rowsPreprocessor = ( rows, showActive, name, dateFrom, dateTo ) => dispatch => removeExcessEmployees( rows, showActive )
    .filter( row => checkName( row, name ) && checkTimes( row, dateFrom, dateTo ))
    .map( row => row.set( 'btn', dispatch( getRowButton( rows, row.get( 'index' ), row.get( 'active' ))))
           .set( 'totalClockedInTime', convertMins( row.get( 'totalClockedInTime' )))
           .set( 'totalProductiveTime', convertMins( row.get( 'totalProductiveTime' )))
           .set( 'totalUnproductiveTime', convertMins( row.get( 'totalUnproductiveTime' ))));

export const switchEmployeeType = () => ({ type: DashboardActionTypes.SWITCH_EMPLOYEE_TYPE });

export const setNameFilter = ( event ) => ({
    type: DashboardActionTypes.SET_NAME_FILTER,
    name: event.target.value
});

export const clearNameFilter = () => ({ type: DashboardActionTypes.ClEAR_NAME_FILTER });

export const setDateFilter = ( dateFrom, dateTo ) => ({
    type: DashboardActionTypes.SET_DATE_FILTER,
    dateFrom,
    dateTo
});

export const clearDateFilter = () => ({ type: DashboardActionTypes.CLEAR_DATE_FILTER });