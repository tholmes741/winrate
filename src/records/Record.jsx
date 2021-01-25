import React from 'react';

const Record = ({ record }) => (
    <div>You {record.won ? 'won' : 'lost'} {record.game} on {record.date}. Id: {record.id}</div>
)

export default Record;