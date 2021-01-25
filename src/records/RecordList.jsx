import React from 'react';
import { connect } from 'react-redux';
import { getRecords } from './selectors';
import Record from './Record';
import { SectionCard } from '../components'

const RecordList = ({ records = [] }) => {
    const content = records.length > 0 ?
        records.map(record => <Record record={record} key={record.id}/>) : 
        'You have no records yet! Get to adding!';

    return (
        <SectionCard>
            {content}
        </SectionCard>
    );
};

const mapStateToProps = (state) => ({
    records: getRecords(state)
})

export default connect(mapStateToProps)(RecordList);