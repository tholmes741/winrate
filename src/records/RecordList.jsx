import React from 'react';
import { connect } from 'react-redux';
import { getRecords } from './selectors';
import Record from './Record';

const RecordList = ({ records = [] }) => (
    <div>
        {records.map(record => <Record record={record} key={record.id}/>)}
    </div>
);

const mapStateToProps = (state) => ({
    records: getRecords(state)
})

export default connect(mapStateToProps)(RecordList);