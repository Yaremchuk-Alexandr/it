import React from "react"
import classes from './users.module.css';
import icon from '../../img/target-user-icon.svg';
import { NavLink } from "react-router-dom";
import { Formik, Form, Field } from 'formik';





const Users = (props: any) => {

  const FindUsersWithFormik = (props: any) => (
    <div>

      <Formik
        initialValues={{ term: '' }}

        onSubmit={(values, { setSubmitting }) => {
          props.findUsersThunk(values.term)
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="input" name="term" />
            <button type="submit" disabled={isSubmitting}>
              Find Users
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (<div className={classes.userswrapper}>

    <FindUsersWithFormik findUsersThunk={props.findUsersThunk}/>

    <div className={classes.userPagination}>
      {pages.map(p => {

        return <span key={Math.random() * 10} className={props.currentPage === p ? classes.selectedPage : null}
          onClick={(e) => { props.onPageChanges(p) }}> {p} </span>
      })}
    </div>
    {
      props.users.map((user:any) =>
        <div key={user.id} className={classes.userItem} >
          <div className={classes.Userleft}>
            <NavLink to={'/profile/' + user.id}>
              <img alt='' src={user.photos.small != null ? user.photos.small : icon} className={classes.logo} />
            </NavLink>
            {user.followed
              ? <button className={classes.usersBtn} onClick={() => { props.unfollowThunk(user.id) }}> UNFOLLOW </button>


              : <button className={classes.usersBtn} onClick={() => { props.followThunk(user.id) }}> FOLLOW </button>
            }
          </div>
          <div className={classes.UserCenter}  >
            <div className={classes.UserRightLeft}><div className={classes.userFullName}>{user.name} </div> <div className={classes.userStatus}> {user.status}</div> </div>
          </div>
          <div className={classes.UserRight}  >
            <div className={classes.UserRightright}> <div> {'user.location.city'} </div> <div> {'user.location.country'}</div> </div>
          </div>
        </div>)
    }
  </div>
  )

}


export default Users