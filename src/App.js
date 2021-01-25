import RecordList from './records/RecordList';
import NewRecordForm from './records/NewRecordForm';
import './App.css';

function App() {
    // const records = [
    //     {
    //         game: 'overwatch',
    //         won: true,
    //         date: new Date().toString(),
    //         id: 1
    //     },
    //     {
    //         game: 'Bloons td',
    //         won: true,
    //         date: new Date().toString(),
    //         id: 2
    //     },
    //     {
    //         game: 'BG',
    //         won: false,
    //         date: new Date().toString(),
    //         id: 3
    //     }
    // ]
    return (
        <div className="App">
            <RecordList />
            <NewRecordForm />
        </div>
    );
}

export default App;
