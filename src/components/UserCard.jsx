import React from 'react'
import './styles/UserCard.css'

const UserCard = ({ user, deleteUser, setInfoUpdate, handleOpenForm }) => {
    const handleDelete = () => {
    deleteUser('/users', user.id)
    }
    const handleEdit = ( ) => {
        setInfoUpdate(user)
        handleOpenForm()
    }

  return (
    <article className='Usercard' >
        
      <div className='Usercard__div' >
    <h3 className='Usercard__Userid' >User id: {user.id} </h3>
    <hr />
    <h3 className='Usercard__Username' >User: {`${user.first_name} ${user.last_name}`}</h3>
        <hr />
    <ul className='Usercard__Info' >

      <li><span className='Usercard__Email' >Email: </span>
      <span className='Usercard__Getemail' >📬 {user.email}</span></li>

      <li><span  className='Usercard__Birthday' >Birthday: </span>
      <span  className='Usercard__Getbirthday' > 🎁 {user.birthday}</span></li>

    </ul>
    <hr />
    <button className='Usercard__Delete' onClick={handleDelete}>❌Delete</button>
    <button className='Usercard__Edit' onClick={handleEdit}>📝Edit</button>
      </div>          
  </article>
  )
}

export default UserCard