import React, { useState } from "react"
import classes from './users.module.css';
import icon from '../../img/target-user-icon.svg';
import { NavLink } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { Button, Pagination, PaginationProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { setUsers } from "../../redux/users-page-reducer";
import { userAPI } from "../../api/api";

const Users = (props: any) => {
  const totalCount = useSelector((state: AppStateType) => state.usersPage.totalUsersCount)
  const dispatch = useDispatch()

  const FindUsersWithFormik = (props: any) => (
    <div>
      <Formik
        initialValues={{ term: '', friends: '' }}
        onSubmit={(values, { setSubmitting }) => {
          props.findUsersThunk(values.term, values.friends)
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="input" name="term" placeholder='Enter friends name' className={classes.FindUserInput} />
            <Field as="select" name="friends" style={{ marginLeft: '15px' }} >
              <option value="Any">Any</option>
              <option value="false">Folollow</option>
              <option value="true">Unfollow</option>
            </Field>
            <Button htmlType="submit" disabled={isSubmitting} type='ghost' icon={<SearchOutlined />} style={{ marginLeft: '15px' }} >
              Find Users
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );


  //// work with ANT DESIGN PAGINATION

  const [current, setCurrent] = useState(1);
  const onChange: PaginationProps['onChange'] = async (pageNumber, pageSize) => {
    dispatch(props.setToggleFetching(true))
    dispatch(props.setCurrentPage(pageNumber))
    let data = await userAPI.getPageChanges(pageNumber, pageSize)
    dispatch(setUsers(data.items))
    dispatch(props.setToggleFetching(false))
    setCurrent(pageNumber);
  }

  return (<div className={classes.userswrapper}>
    <FindUsersWithFormik findUsersThunk={props.findUsersThunk} />
    <div className={classes.userPagination}><Pagination current={current} responsive={true} defaultCurrent={1} total={totalCount} onChange={onChange} /> </div>
    {
      props.users.map((user: any) =>
        <div key={user.id} className={classes.userItem} >
          <div className={classes.Userleft}>
            <NavLink to={'/profile/' + user.id}>
              <img alt='' src={user.photos.small != null ? user.photos.small : icon} className={classes.logo} />
            </NavLink>
            {user.followed
              ? <Button type='primary' block danger className={classes.usersBtn} onClick={() => { props.unfollowThunk(user.id) }}> UNFOLLOW </Button>
              : <Button type='primary' block className={classes.usersBtn} onClick={() => { props.followThunk(user.id) }}> FOLLOW </Button>
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


//// work without ANT DESIGN PAGINATION
// let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

// let pages = []
// for (let i = 1; i <= pagesCount; i++) {
//   pages.push(i)
// }


{/* <div className={classes.userPagination}>   //// work without ANT DESIGN PAGINATION
      {pages.map(p => {

        return <span key={Math.random() * 10} className={props.currentPage === p ? classes.selectedPage : null}
          onClick={(e) => { props.onPageChanges(p) }}> {p} </span>
      })}
    </div> */}