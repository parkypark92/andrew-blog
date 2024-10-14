import "./App.css";
import axios from "axios";

function App() {
  const ApiCall = () => {
    axios.get("http://localhost:3000/").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <button onClick={ApiCall}>Make Api call</button>
    </>
  );
}

export default App;
