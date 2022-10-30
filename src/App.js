import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import NewsContainerConnect from './components/News/NewsContainer';
import MusicContainer from './components/Music/MusicContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import LoginConnect from './components/Login/Login';




const App = (props) => {
  return (
    <div className='app-wrapper' >
      <HeaderContainer />
      <Routes>
        <Route path='*' element={<NavbarContainer friends={props.friends} />} />
      </Routes>

      <div className='app-wrapper-content' >
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer
                                            state={props.store}
                                            dispatch={props.dispatch}
          />} />
          <Route path='/profile/*' element={<ProfileContainer
                                            state={props.store}
                                            dispatch={props.dispatch} />} />
          <Route path='/profile/:userId' element={<ProfileContainer
                                            state={props.store}
                                            dispatch={props.dispatch} />} />
          <Route path='/news' element={<NewsContainerConnect />} />
          <Route  exact path='/music' element={<MusicContainer />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/login' element={<LoginConnect/>} />
        </Routes >
      </div>
    </div>


  )
}


export default App;