import React from 'react'
import classes from '../Navbar/Navbar.module.css'
import { NavLink } from 'react-router-dom';
import {
  FileSearchOutlined,
  HomeOutlined,
  MessageOutlined,
  SearchOutlined,
  SettingOutlined,
  SoundOutlined,
} from '@ant-design/icons'
import { MenuProps, Row } from 'antd'
import { Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider';


const items: MenuItem[] = [
  getItem(<NavLink to={'/profile/'}>Profile</NavLink>, '2', <HomeOutlined />, undefined, undefined),
  getItem(<NavLink to={'/dialogs/'} >Dialogs</NavLink>, '1', <MessageOutlined />, undefined, undefined),
  getItem(<NavLink to={'/news'} >News</NavLink>, '3', <FileSearchOutlined />, undefined, undefined),
  getItem(<NavLink to={'/music'} >Music</NavLink>, '4', <SoundOutlined />, undefined, undefined),
  getItem(<NavLink to={'/settings'} >Settings</NavLink>, '5', <SettingOutlined />, undefined, undefined),
  getItem(<NavLink to={'/users'} >Find Users</NavLink>, '6', <SearchOutlined />, undefined, undefined)
];

const Navbar: React.FC = () => {


  return (
    <Row className={classes.navRow}>
      {/* <Col flex='auto' > */}
      <Sider
        //  style={{all:'initial'}} // при активации не влияей соотношение в % навигации  и контента
        theme="light"
        breakpoint="md"
        collapsedWidth="1"
      >
        <Menu
          style={{ border: 'none' }}
          defaultSelectedKeys={['2']}
          mode="inline"
          theme="light"
          items={items}
        />

      </Sider>
    </Row>


  );
};

export default Navbar;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}



// const itemProfile = [
//   { id: 1, url: '/profile', item: 'Profile' },
//   { id: 2, url: '/dialogs', item: 'Messages' },
//   { id: 3, url: '/news', item: 'News' },
//   { id: 4, url: '/music', item: 'Music' },
//   { id: 5, url: '/settings', item: 'Settings' },
//   { id: 6, url: '/users', item: 'Find Users' },
// ]


// const Navbar = () => {
//   const friends = useSelector((state:AppStateType)=> state.navbar.friends)

//   const navBarFriends = friends.map(friend => <NavLink key={Math.random() * 10} to={'/friends/' + friend.name}><div className={classes.sideBarItem}><img alt= 'my friends'src={friend.url} /> <div className={classes.siteBarItemNumber}> {friend.name}</div></div> </NavLink>)

//   const navBarItems = itemProfile.map(i => {
//     return (
//       <div key={Math.random() * 100} className={classes.item} >
//         <NavLink to={i.url}
//           // activeclassname={classes.active ? classes.active : undefined}
//           className={classes.link}
//         >{i.item}
//         </NavLink>
//       </div>
//     )
//   })


//   return (
//     // <nav className={classes.nav}>
//     //   {navBarItems}
//     //   <div className={`${classes.link} ${classes.siteBar}`}>
//     //     <span className={classes.siteBarName}>Friends</span>
//     //     <div className={classes.sideBarItems}>
//     //       {navBarFriends}
//     //     </div>
//     //   </div>
//     //   </div>
//     //   </div>
//     // </nav>

//     <>
//       <div className={classes}>
//         <Menu
//           style={{ width: 180 }}
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['sub1']}
//           mode={'vertical'}
//           theme={'light'} >
//           {navBarItems}


//           <Divider type="vertical" />
//         <div className={`${classes.link} ${classes.siteBar}`}>
//         <span className={classes.siteBarName}>Friends</span>

//          <div className={classes.sideBarItems}>
//           {/* style={{ width: 180 }}
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['sub1']}
//           mode={'vertical'}
//           theme={'dark'}
//           >  */}
//           {navBarFriends}
//           <div className={classes.sideBarItems}></div>
//           </div>
//           </div>
//           </Menu>
//       </div>
//       </>
//   )
// }