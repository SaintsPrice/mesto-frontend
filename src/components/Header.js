import { useStores } from '../contexts/rootStoreContext'
import logo from '../images/Header__logo.svg'

function Header() {
  
  const {auth} = useStores()

  return (
    <header className="header">
    <img className="header__logo" src={logo} alt="Проект Место" />
    <button className="header__logout" onClick={() => auth.logout()}>Выйти</button>
</header>
  )
}

export default Header