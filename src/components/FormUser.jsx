import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import './styles/FormUser.css'

const FormUser = ({ createUser, infoUpdate, updateUser, 
    setInfoUpdate, closeForm, setCloseForm }) => {

        const {handleSubmit,register,reset} = useForm()

    useEffect(() => {
     reset(infoUpdate)
    }, [infoUpdate])
    

    const submit = data => {
        if (infoUpdate) {
            updateUser('/users', infoUpdate.id, data)
            setInfoUpdate()
        } else {
            createUser('/users', data)
        }

      reset ({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: '',
      })
    }

    const handleCloseForm = () => {
        setCloseForm(true)
    }

  return (
    <div onClick= {handleCloseForm} className={`formUser_container ${closeForm && 'close-form'}`}>

    <form onClick={e => e.stopPropagation()} className="formUser" onSubmit={handleSubmit(submit)}>
    <h2 className="formUser__title">{infoUpdate ? 'Update user' : 'New user'}</h2>
    <div onClick= {handleCloseForm} className='formUser__close'>Close✖</div>
    <div className="formUser__group">
      <label htmlFor="first_name" className="form__label">First name</label>
      <input className="formUser__input" {...register('first_name')} type="text" id="first_name"/>
    </div>
    <div className="formUser__group">
      <label htmlFor="last_name" className="form__label">Last name</label>
      <input className="formUser__input" {...register('last_name')} type="text" id="last_name"/>
    </div>
    <div className="formUser__group">
      <label htmlFor="email" className="form__label">Email</label>
      <input className="formUser__input" {...register('email')} type="email" id="email"/>
    </div>
    <div className="formUser__group">
      <label htmlFor="password" className="form__label">Password</label>
      <input className="formUser__input" {...register('password')} type="password" id="password"/>
    </div>
    <div className="formUser__group">
      <label htmlFor="birthday" className="form__label">Birthday</label>
      <input className="formUser__input" {...register('birthday')} type="date" id="birthday"/>
    </div>
    <button className="formUser__button"> {infoUpdate ? 'Update user' : 'Create user'}
    </button>
  </form>
    </div>
  )
}

export default FormUser
