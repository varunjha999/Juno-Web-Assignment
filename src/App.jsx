import './App.css'
import NavBar from './components/NavBar'
import Heading from './components/Heading'
import TaskStatus from './components/TaskStatus'
import Find from './components/Find'
import Completed from './components/Table/Completed'
import Pending from './components/Table/Pending'
import { useState } from 'react'
import CloseAccount from './components/CloseAccount'

function App() {
  const [tab, setTab] = useState('completed');
  const [showCloseAccountModal, setShowCloseAccountModal] = useState(false);

  return (
    <div className='flex relative'>
      {showCloseAccountModal && <CloseAccount setShowCloseAccountModal={setShowCloseAccountModal} />}
      <NavBar />
      <div className='w-full px-10'>
        <Heading />
        <TaskStatus setShowCloseAccountModal={setShowCloseAccountModal} setTab={setTab} tab={tab} />
        <Find />
        <div>
          {
            tab === "completed" && <Completed />
          }
          {
            tab === "pending" && <Pending />
          }
        </div>
      </div>
    </div>
  )
}

export default App
