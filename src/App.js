import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log("I run only once");
  }, []); //처음 render 되었을 때 한번만 실행함.
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]); //keyword가 변화할때만 이 코드 실행함.
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]); //counter가 변화할때만 이 코드 실행함.

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Searfch here..."
      />
      <h1 className={styles.title}>{counter}!</h1>
      <Button text={"Continue"} clickEvent={onClick} />
    </div>
  );
}

export default App;
