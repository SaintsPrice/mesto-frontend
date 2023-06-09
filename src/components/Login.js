import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/Header__logo.svg'
import {observer} from 'mobx-react-lite'
import { useStores } from '../contexts/rootStoreContext'

function Login() {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const {auth} = useStores()

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    auth.login(email, password)
  }

  return (
    <div className="auth">
      <header className="header">
        <img className="header__logo" src={logo} alt="Проект Место" />
        <NavLink to='/signup' className={'registration'}>Регистрация</NavLink>
      </header>
      <h2 className="register__title">Вход</h2>
      <form className="register__form" onSubmit={handleSubmit}>
       <input className="register__input" type="email" placeholder="Email" value={email} onChange={handleEmail} required></input>
        <input className="register__input" type="password" placeholder="Пароль" value={password} onChange={handlePassword} required></input>
       <button className="register__submit" style={{marginBottom: 80}}>Войти</button>
      </form>
    </div>
  )
}

export default observer(Login)