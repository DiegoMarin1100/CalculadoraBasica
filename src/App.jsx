import { useState } from 'react'

const App = () => {
  const [input, setInput] = useState('');
  

  const operatorClick = (value) => {
    if (value === '=') {
      try {
        let replaceInput = input.replace('^', '**');
        replaceInput = replaceInput.replace('√', 'Math.sqrt');
        setInput(eval(replaceInput).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    }
    else if (value === 'Borrar') {
      setInput(input.slice(0, -1));
    } else  {
      if (input === 'Error') {
        setInput(value);
      } else {
        if (value === '√') {
          if(input.trim()===''){
            setInput(value +  '(' );
          }else {
            setInput(value +  '(' + input + ')');
          }
        }
        else {
        setInput(input + value);
       }
      }
    }
  };

  const InputFromKeyboardPress = (event) => {
    if (event.key === '0') {
      operatorClick('0');
    }
    if (event.key === '1') {
      operatorClick('1');
    }
    if (event.key === '2') {
      operatorClick('2');
    }
    if (event.key === '3') {
      operatorClick('3');
    }
    if (event.key === '4') {
      operatorClick('4');
    }
    if (event.key === '5') {
      operatorClick('5');
    }
    if (event.key === '6') {
      operatorClick('6');
    }
    if (event.key === '7') {
      operatorClick('7');
    }
    if (event.key === '8') {
      operatorClick('8');
    }
    if (event.key === '9') {
      operatorClick('9');
    }
    if (event.key === '+') {
      operatorClick('+');
    }
    if (event.key === '-') {
      operatorClick('-');
    }
    if (event.key === '*') {
      operatorClick('*');
    }
    if (event.key === '/') {
      operatorClick('/');
    }
    if (event.key === '.') {
      operatorClick('.');
    }
    if (event.key === 'Backspace') {
      operatorClick('Borrar');
    }
    if (event.key === 'Enter') {
      operatorClick('=');
    }
    if (event.key === '(') {
      operatorClick('(');
    }
    if (event.key === ')') {
      operatorClick(')');
    }
  };

  return (
    <div className="w-64 mx-auto mt-8 p-4 bg-gray-400 rounded-lg">
      <label className="font-bold p-5">Calculadora Estándar</label>
      <input
        type="text"
        value={input}
        className="w-full bg-gray-100 mb-4 px-2 py-1 text-xl rounded text-right"
        readOnly
        onKeyUp ={InputFromKeyboardPress}
      />
      <div className="grid grid-cols-4 gap-2">
        <button onClick={() => operatorClick('7')}  className="btn bg-gray-200">7</button>
        <button onClick={() => operatorClick('8')} className="btn bg-gray-200">8</button>
        <button onClick={() => operatorClick('9')} className="btn bg-gray-200">9</button>
        <button onClick={() => operatorClick('Borrar')} className="btn bg-gray-300">Borrar</button>
    
        <button onClick={() => operatorClick('4')} className="btn bg-gray-200">4</button>
        <button onClick={() => operatorClick('5')} className="btn bg-gray-200">5</button>
        <button onClick={() => operatorClick('6')} className="btn bg-gray-200">6</button>
        <button onClick={() => operatorClick('/')} className="btn bg-gray-300">÷</button>
        
        <button onClick={() => operatorClick('1')} className="btn bg-gray-200">1</button>
        <button onClick={() => operatorClick('2')} className="btn bg-gray-200">2</button>
        <button onClick={() => operatorClick('3')} className="btn bg-gray-200">3</button>
        <button onClick={() => operatorClick('*')} className="btn bg-gray-300">*</button>

        <button onClick={() => operatorClick('0')} className="btn bg-gray-200">0</button>
        <button onClick={() => operatorClick('.')} className="btn bg-gray-200">.</button>
        <button onClick={() => operatorClick('+')} className="btn bg-gray-300">+</button>
        <button onClick={() => operatorClick('-')} className="btn bg-gray-300">-</button>
        
        <button onClick={() => operatorClick('^')} className="btn bg-gray-300">^</button>
        <button onClick={() => operatorClick('√')} className="btn bg-gray-300">√</button>
        <button onClick={() => operatorClick('C')} className="btn bg-gray-300">C</button>
        <button onClick={() => operatorClick('=')} className="btn bg-blue-300">=</button>

        <button onClick={() => operatorClick('(')} className="btn bg-gray-300">(</button>
        <button onClick={() => operatorClick(')')} className="btn bg-gray-300">)</button>

      </div>
      <br></br>
      <br></br>
      <label className="text-xs italic"><strong>Elaborada por:</strong> Diego A Marín Acevedo</label>
    </div>
  );
}

export default App
