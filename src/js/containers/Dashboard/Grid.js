import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import Table from '../../components/Table';
import { rowsPreprocessor } from '../../actions/containers/DashboardActions';

const columns = [
    { label: 'Name', key: 'name', minWidth: '180px' },
    { label: 'Total Clocked-in time', key: 'totalClockedInTime', minWidth: '140px', right: true },
    { label: 'Total Productive time', key: 'totalProductiveTime', minWidth: '140px', right: true },
    { label: 'Total Unproductive time', key: 'totalUnproductiveTime', minWidth: '140px', right: true },
    { label: 'Productivity ratio', key: 'ratio', minWidth: '120px' },
    { label: 'Activate btn', key: 'btn', minWidth: '120px' }
];

const Grid = ({ rows, showActive, name, dateFrom, dateTo, rowsPreprocessor }) => {
    if ( !List.isList( rows ) || rows.size === 0 ) return <div>No Data for display</div>;

    const filteredRows = rowsPreprocessor( rows, showActive, name, dateFrom, dateTo )

    return <Table columns={columns} rows={filteredRows}/>;
}

const mapStateToProps = ({ dashboardReducer }) => ({
    rows: dashboardReducer.grid.data,
    showActive: dashboardReducer.showActiveEmployee,
    name: dashboardReducer.filters.name,
    dateFrom: dashboardReducer.filters.dateFrom,
    dateTo: dashboardReducer.filters.dateTo,
});

const mapDispatchToProps = {
    rowsPreprocessor
};

export default connect( mapStateToProps, mapDispatchToProps )( React.memo( Grid ));