import logo from './logo.svg';

import './App.css';
import {useState} from 'react'
import Header from './component/Header'
import c from './component/stam'
import {data} from './listData/data'
import ItemList from './component/itemList';
import Card from './component/Card'
import ListStatus from './component/ListStatus.jsx';
import NoteForm from './component/NoteForm';
import { FeedbackProvider } from './context/feedbackContext';
const showcomment=false;
function App({handelDelete}) {
  const[show,setShow] = useState(false)
  const[message, setMessage] = useState("Hellllooo")
  const [notes,setNotes]=useState(data)
  // const deleteItem=(id)=>{
  //   if(window.confirm("do you want to delete?")){
  //     console.log(id);
  //     setNotes(notes.filter((item)=>item.id!==id))
  //   }

  // };
//   const addNote=(note)=>{
// note.id=uuidv4();
// setNotes([note,...notes])
//   }
  return (
    <FeedbackProvider>
    <div className="App">
      {/* <Header></Header> */}
      <NoteForm></NoteForm>
      <ListStatus/>
      <ItemList ></ItemList>
      {/* <Card reverse={true}>hello card</Card> */}
      {/* <input type='text' value={message} onChange={e => setMessage(e.target.value)}></input>
      <button onClick={ e => setShow(!show)}>Click Me</button> */}
      {show && message}
    </div>
    </FeedbackProvider>
  );
}

export default App;
