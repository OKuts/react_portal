import {useState} from "react";
import './App.css';
import {Modal} from "./Modal/Modal";
import {Window} from "./Modal/Window";


export const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <h1>
      Hello
      <button onClick={() => setOpen(true)}>Set</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        children={<Window/>}/>
    </h1>
  );
}
