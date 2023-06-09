import { useEffect } from 'react';
import {observer} from 'mobx-react-lite';
import { useStores } from '../contexts/rootStoreContext';

function Main(props) {
  
  const {auth, profile} = useStores()

  useEffect(() => {
    profile.getUser(auth.user.id)
  }, [])

  console.log(profile.userProfile)
  return (
    <main className="content">
        <section className="profile">
          <div className="profile__image">
            <img className="profile__avatar" src={profile.userProfile.avatar} alt="Жак-Ив Кусто" />
            <button className="profile__avatar__edit" type="button" onClick={props.onEditAvatar}></button>
          </div>
            <div className="profile__info">
                <h1 className="profile__name">{profile.userProfile.name}</h1>
                <button className="profile__edit" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__description">{profile.userProfile.about}</p>
            <button className="profile__add" type="button" onClick={props.onAddPlace}></button>
        </section>
         <section className="places">
          {props.children}
        </section>
    </main>
  )
};

export default observer(Main);