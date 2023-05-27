import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <h1> Useful Website </h1>
      <h3> Which website do you want to open ? </h3>
      <Button name = "Google" link = "https://google.com"/>
      <Button name = "Facebook" link = "https://facebook.com"/>
      <br/>
      <Button name = "Youtube" link = "https://youtube.com"/>
      <Button name = "GitHuB" link = "https://github.com/apilsrm"/>
      

    </div>
  );
}

export default App;
