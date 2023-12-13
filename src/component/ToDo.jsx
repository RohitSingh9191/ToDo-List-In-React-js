import React,{useState} from 'react'

function ToDo(pros) {
    const [inputText,setInputText]=useState('');
    const handleEntrePress=(e)=>{
    if(e.keyCode===13){
      pros.addList(inputText)
      setInputText("")
    }
  }
  return (
    <div className="input-container">
        <input type="text" className='input-box-todo' placeholder='Enter Your Item'
         value={inputText} onChange={e=>{setInputText(e.target.value)}}
         onKeyDown={handleEntrePress}
         />
        <button className='add-btn' onClick={()=>{
            pros.addList(inputText)
            setInputText("")
        }}>+</button>
        {/* <div>{inputText}</div> */}

    </div>
  )
}

export default ToDo