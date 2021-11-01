import React from 'react'
import styles from './UserCard.module.css'

const UserCard = ({ data }) => {
  if (!data) {
    return <div className={styles.usercard + ' ' + styles.empty}>
      <p className={styles.center_text}>Select an user</p>
    </div>
  }

  return (
    <div className={styles.usercard}>
      <h4 className={styles.user__name}>{data.name}</h4>
      <h5 className={styles.user__phone}>{data.phone}</h5>
      <h5 className={styles.user__address}>{data.address.street}</h5>
    </div>
  )
}

export default UserCard
