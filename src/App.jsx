import Button from "./components/Button";

//rafce
const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <div>
        <Button label="Button Login" color="blue" />
      </div>
      <div>
        <Button label="Button Register" color="green" />
      </div>
      <div></div>
      <div>
        <Button label="Button Hello" color="red" />
      </div>
    </div>
  );
};

export default App;
