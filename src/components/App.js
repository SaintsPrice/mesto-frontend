import { useEffect } from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {observer} from 'mobx-react-lite';
import Login from "./Login";
import Page from "./Page";
import Register from "./Register";
import { useStores } from "../contexts/rootStoreContext";

function App() {

const {auth} = useStores()

useEffect(() => {
  if (localStorage.getItem('token')) {
    auth.checkAuth()
  }
}, [])

  return (
    <div className="page">
      <Routes>
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/page' element={auth.isAuth? <Page /> : <Navigate to='/signin' />} />
        <Route path='*' element={<Login />} />
      </Routes>
      {auth.isAuth && <Navigate to='/page' />}
    </div>
  )
}

export default observer(App)