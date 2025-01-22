
import './App.css'
import Form from './components/Form'
import Message from './components/Message'

function App() {

  return (
    
  <div className='w-full flex flex-col place-items-center relative'>
    <div className='w-40 h-40 rounded-full bg-orange-400 absolute top-4 right-[460px]'></div>
    <div className='w-40 h-40 rounded-full bg-yellow-400 absolute top-56  left-[440px]'></div>
    <Form></Form>
    <Message></Message>
  </div>
  )
}

export default App
