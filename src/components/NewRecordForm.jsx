import React, { useState } from 'react';

const NewRecordForm = () => {
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
            <button onClick={() => console.log(gameValue, wonValue)}>Add Record</button>
        </div>
    );
}

export default NewRecordForm;