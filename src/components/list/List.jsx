import React from 'react'
import styles from './List.module.css'

const List = ({ name, data, settings, onChange }) => {
  return (
    <select
      name={name}
      size={settings?.size}
      className={styles.list}
      onChange={onChange}
    >
      {data.map(user => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  )
}

export default List
