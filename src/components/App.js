import '../App.css';
import AddHabbit from './AddHabbit';
import Daily from './Daily';
import Habbit from './Habbit';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AddHabbit />
      <div style={styles.buttonContainer}>
        <button style={styles.Daily}>Daily View</button>
        <button style={styles.Week}>Week View</button>
      </div>

      <Routes>
        <Route path='/daily_view' element={<Daily/>}/>
        <Route path='/weekly_view' element={<Habbit/>}/>
      </Routes>

    </div>
  );
}

const styles = {
  buttonContainer: {
    
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '15%',
    left: '15%',
    marginTop: '1%',
  },
  Daily: {
    fontFamily: 'Trebuchet MS, sans-serif',
    fontSize: '18px',
    padding: '8px 10px',
    marginRight: '10px',
    background: '#aa76f2',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
  },
  Week: {
    fontFamily: 'Trebuchet MS, sans-serif',
    fontSize: '18px',
    padding: '8px 10px',
    background: '#aa76f2',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
  }
}
export default App;
