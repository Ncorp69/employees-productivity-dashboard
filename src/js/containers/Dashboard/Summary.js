import React from 'react';
import { connect } from 'react-redux';
import { getSummary, convertMins } from '../../actions/containers/DashboardActions';
import { Row, Label, Data } from '../../components/SummaryRow';

const Summary = ({ rows, showActive }) => {
    const { count, total, productive } = getSummary( rows, showActive );

    return <React.Fragment>
        <Row>
            <Label>Total {showActive ? 'active' : 'inactive'} employees:</Label>
            <Data>{count}</Data>
        </Row>
        <Row>
            <Label>Their total clockedIn time:</Label>
            <Data>{convertMins( total )}</Data>
        </Row>
        <Row>
            <Label>Their total productiveTime:</Label>
            <Data>{convertMins( productive )}</Data>
        </Row>
        <Row>
            <Label>Their total unproductiveTime:</Label>
            <Data>{convertMins( total - productive )}</Data>
        </Row>
    </React.Fragment>;
}

const mapStateToProps = ({ dashboardReducer }) => ({
    showActive: dashboardReducer.showActiveEmployee,
    rows: dashboardReducer.grid.data
});

export default connect( mapStateToProps )( React.memo( Summary ));