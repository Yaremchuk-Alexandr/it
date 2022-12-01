import React, {  } from 'react';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer'
import NewsContainerConnect from './components/News/NewsContainer'
import MusicContainer from './components/Music/MusicContainer'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import { Routes, Route } from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs'
import LoginConnect from './components/Login/Login'
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';




const App = (props: { friends: []; store: any; dispatch: any; }) => {

  return (
    <div className='app-wrapper' >
      <HeaderContainer />
      <Routes >
        <Route  path='*' element={<Navbar />} />
      </Routes>

      <div className='app-wrapper-content' >
        <Routes>
          {/* <Route path='/dialogs/*' element={<Dialogs dialogs={[]} id={0} />} /> */}
          <Route path='/dialogs/*' element={<Dialogs />} />
          <Route path='/profile/*' element={<ProfileContainer
                                            state={props.store}
                                            dispatch={props.dispatch} />} />
          <Route path='/profile/:userId' element={<ProfileContainer
                                            state={props.store}
                                            dispatch={props.dispatch} />} />
          <Route path='/news' element={<NewsContainerConnect />} />
          <Route path='/music' element={<MusicContainer />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer pagesCount={0} term={''} friend={false} />} />
          <Route path='/login' element={<LoginConnect/>} />
        </Routes >
      </div>
    </div>
  )
}

export default App


