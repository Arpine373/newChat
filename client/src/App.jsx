import socketIO from 'socket.io-client'
const socket = socketIO.connect('http://localhost:5000')
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home socket={socket} />} />
              <Route path='/chat' element={<Chat socket={socket} />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
