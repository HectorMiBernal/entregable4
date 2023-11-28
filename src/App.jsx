import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hook/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {
  const [infoUpdate, setInfoUpdate] = useState()
  const [closeForm, setCloseForm] = useState(true)

  const baseUrl = 'https://entregable2node-dev-rfjf.4.us-1.fl0.io/users'
const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl, setCloseForm)

useEffect(() => {
  getUsers('/users')
}, [])
const handleOpenForm = () => {
  setCloseForm(false)
}

  return (
 <div className='all__form' >

  <div className='like__header' >
  <h1 className='Users__title' >USERS</h1>
  <button onClick={handleOpenForm} className='formUser__button'>Open User Form</button>
  </div>

  <div>
  <FormUser
    createUser = {createUser}
    infoUpdate = {infoUpdate}
    updateUser = {updateUser}
    setInfoUpdate = {setInfoUpdate}
    closeForm={closeForm}
    setCloseForm={setCloseForm}
    />
  </div>
  <div>
    {
      users?.map(user => (
        <UserCard 
          key={user.id}
          user={user}
          deleteUser = {deleteUser}
          setInfoUpdate = {setInfoUpdate}
          handleOpenForm = {handleOpenForm}
        /> 
      ))
    }
  </div>
 </div>
  )
}

export default App
