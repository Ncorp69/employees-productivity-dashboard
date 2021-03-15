import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { setDateFilter, clearDateFilter } from '../../actions/containers/DashboardActions';
import { theme } from '../../styles/theme';
import { Input } from '../../components/Input';
import { InputWrap, DateRangeContainer, CloseIconWrap } from '../../components/InputWrap';
import { CrossIcon } from '../../components/Icons';

const DateFilter = ({ dateFrom, dateTo, setDateFilter, clearDateFilter }) => {
    const [ showDateRange, setDateRangeVisibility ] = useState( false );

    const inputRef = useRef( null );
    const dateRangeRef = useRef( null );

    const onChange = ({ dateFilter }) => {
        setDateFilter( dateFilter.startDate, dateFilter.endDate );
    };

    const bodyClickListener = event => {
        if ( dateRangeRef.current.contains(event.target)) return;

        setDateRangeVisibility( false );
        window.removeEventListener( 'click', bodyClickListener );
    };

    const InputClick = () => {
        inputRef.current.blur();

        if ( !showDateRange ) {
            setTimeout( () => window.addEventListener( 'click', bodyClickListener ), 0 );
            setDateRangeVisibility( true );
            setTimeout(() => dateRangeRef.current.scrollIntoView({ behavior: 'smooth' }), 0);
        }
    }

    const formatDate = date => {
        return date ? date.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'}) : '';
    }

    const ranges = [{ startDate: dateFrom, endDate: dateTo, key: 'dateFilter' }];
    const inputValue = `${formatDate( dateFrom )}${ dateFrom && dateTo ? ' - ' : ''}${formatDate( dateTo )}`;

    return <InputWrap>
        <Input type="text" ref={inputRef} value={inputValue}
               onClick={InputClick} placeholder="Search by date" readOnly/>
        { (dateFrom || dateTo) && <CloseIconWrap onClick={clearDateFilter}>
            <CrossIcon/>
        </CloseIconWrap> }
        { showDateRange && <DateRangeContainer ref={dateRangeRef}>
            <DateRangePicker
                onChange={onChange}
                ranges={ranges}
                months={1}
                color={theme.color.dark}
                rangeColors={[theme.color.dark]}
                direction="vertical"/>
            <DateRange
                onChange={onChange}
                ranges={ranges}
                months={1}
                color={theme.color.dark}
                rangeColors={[theme.color.dark]}/>
        </DateRangeContainer>}
    </InputWrap>;
}

const mapStateToProps = ({ dashboardReducer }) => ({
    dateFrom: dashboardReducer.filters.dateFrom,
    dateTo: dashboardReducer.filters.dateTo,
});

const mapDispatchToProps = {
    setDateFilter,
    clearDateFilter
};

export default connect( mapStateToProps, mapDispatchToProps )( React.memo( DateFilter ));