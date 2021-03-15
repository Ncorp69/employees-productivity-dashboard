import React from 'react';
import { connect } from 'react-redux';
import { H1 } from '../../components/Headers';
import { Button } from '../../components/Button';
import { switchEmployeeType } from '../../actions/containers/DashboardActions';

const MenuTop = ({ showActive, switchEmployeeType }) => {
    return <React.Fragment>
        <H1 inline>Employees' productivity dashboard</H1>
        <Button onClick={switchEmployeeType} width="200px">show {showActive ? 'inactive' : 'active'} employees</Button>
    </React.Fragment>;
}

const mapStateToProps = ({ dashboardReducer }) => ({
    showActive: dashboardReducer.showActiveEmployee
});

const mapDispatchToProps = {
    switchEmployeeType
};

export default connect( mapStateToProps, mapDispatchToProps )( MenuTop );