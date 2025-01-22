
import './App.css'
import Form from './components/Form'
import Message from './components/Message'

function App() {

  return (
    
  <div className='w-full flex flex-col place-items-center'>
    <div className='w- h-40 rounded-full bg-orange-400 fixed top-10 right-1/3'></div>
    <Form></Form>
    <Message></Message>
  </div>
  )
}

export default App
