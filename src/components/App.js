import "../App.css";
import AddHabbit from "./AddHabbit";
import Daily from "./Daily";
import Habbit from "./Habbit";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const onDaily = () => {
    navigate('/');
  }

  const onWeekly = () => {
    navigate('/weekly_view');
  }
  return (
    <div className="App">
      <AddHabbit />
      <div style={styles.buttonContainer}>
        <button style={styles.Daily} onClick={onDaily}>Daily View</button>
        <button style={styles.Week} onClick={onWeekly}>Week View</button>
      </div>

      <Routes>
        <Route path="/" element={<Daily />} />
        <Route path="/weekly_view" element={<Habbit />} />
      </Routes>
    </div>
  );
}

const styles = {
  buttonContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "15%",
    left: "15%",
    marginTop: "1%",
  },
  Daily: {
    fontFamily: "Trebuchet MS, sans-serif",
    fontSize: "18px",
    padding: "8px 10px",
    marginRight: "10px",
    background: "#aa76f2",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: 'pointer'
  },
  Week: {
    fontFamily: "Trebuchet MS, sans-serif",
    fontSize: "18px",
    padding: "8px 10px",
    background: "#aa76f2",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: 'pointer'
  },
};
export default App;
