import React from 'react';

const Record = ({ record }) => (
    <div>You {record.won ? 'won' : 'lost'} {record.game} on {record.date}</div>
)

export default Record;