import React, { useState } from 'react';
import { connect } from 'react-redux';
import { create_record } from './actions';

const NewRecordForm = ({ onAddRecordPressed }) => {
    const [gameValue, setGameValue] = useState('');
    const [wonValue, setWonValue] = useState(true);

    return (
        <div>
            <input 
                type="text"
                placeholder="What game did you play?"
                value={gameValue}
                onChange={e => setGameValue(e.target.value)} />
            <br/>
            <input 
                type="radio"
                name="won"
                id="win"
                checked={wonValue}
                onChange={() => setWonValue(true)}/>
            <label htmlFor="win">Win</label>
            <input 
                type="radio"
                name="won"
                id="loss"
                checked={!wonValue}
                onChange={() => setWonValue(false)}/>
            <label htmlFor="loss">Loss</label>
            <button 
                onClick={() => onAddRecordPressed({
                    game: gameValue,
                    won: wonValue,
                    date: new Date().toDateString(),
                    id: Math.floor(Math.random() * 100)
                })}>
                Add Record</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onAddRecordPressed: record => dispatch(create_record(record))
});

export default connect(null, mapDispatchToProps)(NewRecordForm);