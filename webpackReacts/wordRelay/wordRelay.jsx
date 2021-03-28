const React = require("react");
const { useState, useRef } = React;
const WordRelay = () => {
  const [word, setWord] = useState("초기화");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const [dictionary] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (dictionary.includes(value)) {
      setResult("중복입니다.");
      inputRef.current.focus();
    } else {
      if (value[0] === word[word.length - 1]) {
        console.log(dictionary);
        setWord(value);
        dictionary.push(value);
        setResult("정답");
        setValue("");
        inputRef.current.focus();
      } else {
        setResult("땡");
        setValue("");
        inputRef.current.focus();
      }
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    setWord("초기화");
    setResult("");
    setValue("");
  };

  return (
    <>
      <div>
        <div>{word}</div>
        <form onSubmit={onSubmit}>
          <input type="text" ref={inputRef} value={value} onChange={onChange} />
          <button>입력</button>
          <button onClick={onClick}>초기화</button>
        </form>
      </div>
      <div>
        <div>{result}</div>
      </div>
    </>
  );
};

module.exports = WordRelay;
