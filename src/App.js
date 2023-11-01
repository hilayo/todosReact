import logo from './logo.svg';
import {v4 as uuidv4} from 'uuid'
import './App.css';
import {useState} from 'react'
import Header from './component/Header'
import c from './component/stam'
import {data} from './listData/data'
import ItemList from './component/itemList';
import Card from './component/Card'
import ListStatus from './component/ListStatus.jsx';
import NoteForm from './component/NoteForm';
const showcomment=false;
function App({handelDelete}) {
  const[show,setShow] = useState(false)
  const[message, setMessage] = useState("Hellllooo")
  const [notes,setNotes]=useState(data)
  const deleteItem=(id)=>{
    if(window.confirm("do you want to delete?")){
      console.log(id);
      setNotes(notes.filter((item)=>item.id!==id))
    }

  };
  const addNote=(note)=>{
note.id=uuidv4();
setNotes([note,...notes])
  }
  return (
    <div className="App">
      <Header text="goog"></Header>
      <NoteForm handelAdd={addNote}></NoteForm>
      <ListStatus notes={notes}></ListStatus>
      <ItemList items={notes} handelDelete={deleteItem}></ItemList>
      <Card reverse={true}>hello card</Card>
      <input type='text' value={message} onChange={e => setMessage(e.target.value)}></input>
      <button onClick={ e => setShow(!show)}>Click Me</button>
      {show && message}
    </div>
  );
}

export default App;
