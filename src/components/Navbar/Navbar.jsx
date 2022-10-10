import React from 'react'
import classes from '../Navbar/Navbar.module.css'
import { NavLink } from 'react-router-dom';


const itemProfile = [
  {id:1, url:'/profile', item:'Profile'},
  {id:2, url:'/dialogs', item:'Messages'},
  {id:3, url:'/news', item:'News'},
  {id:4, url:'/music', item:'Music'},
  {id:5, url:'/settings', item:'Settings'},
  {id:6, url:'/users', item:'Find Users'},
]


const Navbar = (props) => {


  const navBarFriends = props.friends.map(friend => <NavLink key={Math.random()*10} to={'/friends/' + friend.name}><div  className={classes.sideBarItem}><img src={friend.url} /> <div className={classes.siteBarItemNumber}> {friend.name}</div></div> </NavLink>)

  const navBarItems = itemProfile.map(i =>{
    return (
      <div key={Math.random()*100} className={classes.item} >
          <NavLink to={i.url}
              activeclassname={classes.active ? classes.active : undefined}
              className={classes.link}
          >{i.item}
          </NavLink>
      </div>
    )
  })

  
  return (
    <nav className={classes.nav}>
      {navBarItems}
      <div className={`${classes.link} ${classes.siteBar}`}>
        <span className={classes.siteBarName}>Friends</span>
        <div className={classes.sideBarItems}>
          {navBarFriends}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;