import Student from "./Student";
import "./App.css";

function App() {

  // Event Handling Function
  const showMessage = () => {
    alert("Button Clicked!");
  };

  return (
    <>
      <h1>Student Information</h1>

      <button onClick={showMessage}>
        Click Me
      </button>

      <Student name="Anjali" age="20" course="AIML" />
      <Student name="ABC" age="21" course="CSE" />
    </>
  );
}

export default App;