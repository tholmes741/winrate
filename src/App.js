import RecordList from './records/RecordList';
import NewRecordForm from './records/NewRecordForm';
import { AppBody } from './components';
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
        <AppBody>
            <NewRecordForm />
            <RecordList />
        </AppBody>
    );
}

export default App;
