import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { usersActions } from './app/features/usersSlice'
import styles from './App.module.css'
import List from './components/list/List'
import UserCard from './components/usercard/UserCard'

const App = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  const selectedUserId = useSelector(state => state.users.selectedUserId)
  const [userProfile, setUserProfile] = useState()

  // called once on page load
  useEffect(() => {
    // fetch & update the redux store with users from the typicode api
    dispatch(usersActions.fetchUsers())
  }, [dispatch])

  // called anytime selectedUserId changes
  useEffect(() => {
    setUserProfile(users[selectedUserId])
  }, [selectedUserId, users])

  return (
    <div className={styles.app}>
      <List
        data={users}
        settings={{ size: 10 }}
        name="userList"
        onChange={e => dispatch(usersActions.setSelectedUser(e.target.value - 1))}
      />
      <UserCard data={userProfile} />
    </div>
  )
}

export default App
