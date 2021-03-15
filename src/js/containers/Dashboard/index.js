import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { WorkSpace, Panel } from '../../components/WorkSpace';
import { Loader } from '../../components/Loader';
import ScrollToTopBtn from '../../components/ScrollToTopBtn';
import MenuTop from'./MenuTop';
import Summary from './Summary';
import NameFilter from './NameFilter';
import DateFilter from './DateFilter';
import Grid from './Grid';
import { loadData } from '../../actions/containers/DashboardActions';

const Dashboard = ({ loaded, loadData }) => {
    useEffect(() => {
        loadData();
    }, []);

    if ( !loaded ) return <WorkSpace>
        <Panel>
            <Loader/>
        </Panel>
    </WorkSpace>;

    return <WorkSpace>
        <Panel justify="space-between">
            <MenuTop/>
        </Panel>
        <Panel column align="stretch">
            <Summary/>
        </Panel>
        <Panel justify="flex-end">
            <NameFilter/>
            <DateFilter/>
        </Panel>
        <Panel column align="stretch">
            <Grid/>
        </Panel>
        <ScrollToTopBtn/>
    </WorkSpace>;
};

const mapStateToProps = ({ dashboardReducer }) => ({
    loaded: dashboardReducer.grid.loaded
});

const mapDispatchToProps = {
    loadData
};

export default connect( mapStateToProps, mapDispatchToProps )( Dashboard );