const React = require("react");
const { useState, useRef } = React;
const GuguDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult((prevResult) => {
        return `정답 : ${value}`;
      });
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult(`${value} 땡!`);
      setFirst(first);
      setSecond(second);
      setValue("");
      inputRef.current.focus();
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div>
        {first} 곱하기 {second}
      </div>
      <form onSubmit={onSubmit}>
        <input type="number" ref={inputRef} value={value} onChange={onChange} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = GuguDan;
