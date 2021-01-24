import React from 'react';
import Record from './Record';

const RecordList = ({ records = [] }) => (
    <div>
        {records.map(record => <Record record={record} key={record.id}/>)}
    </div>
);

export default RecordList;