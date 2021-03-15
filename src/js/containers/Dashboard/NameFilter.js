import React from 'react';
import { connect } from 'react-redux';
import { setNameFilter, clearNameFilter } from '../../actions/containers/DashboardActions';
import { Input } from '../../components/Input';
import { InputWrap, CloseIconWrap } from '../../components/InputWrap';
import { CrossIcon } from '../../components/Icons';

const NameFilter = ({ name, setNameFilter, clearNameFilter }) => {
    return <InputWrap>
        <Input type="text" value={name} onChange={setNameFilter}
               marginRight placeholder="Search by name"/>
        { name && <CloseIconWrap onClick={clearNameFilter}>
            <CrossIcon/>
        </CloseIconWrap> }
    </InputWrap>;
}

const mapStateToProps = ({ dashboardReducer }) => ({
    name: dashboardReducer.filters.name
});

const mapDispatchToProps = {
    setNameFilter,
    clearNameFilter
};

export default connect( mapStateToProps, mapDispatchToProps )( NameFilter );