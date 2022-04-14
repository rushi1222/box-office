import React, {useState} from 'react'
import MainPagesLayout from './MainPagesLayout'

function Home() {

  const [input, setInput] = useState('');

  const onInputChange = (ev)=>{
    setInput(ev.target.value)
  }
  const onSearch = ()=>{
    fetch (`https://api.tvmaze.com/search/shows?q=${input}`)
    .then(r => r.json())
    .then(result=>{
      console.log(result);
    })
  }
  const onKeyDown =(ev)=>{
    
    if (ev.keyCode == '13'){
      onSearch()
    }
  }
  return (
    <MainPagesLayout>
      <input type= "text" onChange = {onInputChange} onKeyDown = {onKeyDown} value = {input}/>
      <button type = "button" onClick = {onSearch}>Search</button>
    </MainPagesLayout>
  )
}

export default Home