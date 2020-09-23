import React from 'react';
import './App.css';

function App() {

  const [extenso, setExtenso] = React.useState('')
  const [decimal, setDecimal] = React.useState('')
  const inputRef = React.useRef()

  const PORT = 3000
  let link = `http://localhost:${PORT}/${decimal}`

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const resp = await fetch(link)
      const json = await resp.json()
      setExtenso(json.extenso)
    } catch (error) {
      return console.log(error)
    } 
  }

  const handleClick = () => {
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  const handleChange = ({target}) => {
    setDecimal(target.value)
    setExtenso('')
  }

  return (
    <div className="Aligner">
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} onChange={handleChange} type="text"/>
        <button onClick={handleClick}>Converter</button>
        <p>{decimal} {extenso}</p>
      </form>
    </div>
  );
}

export default App;
