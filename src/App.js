import React, { useState, useEffect, useMemo, useCallback } from 'react'
import List from './List'

const usersDefault = [
  {
    id: 1, name: 'Erick'
  },
  {
    id: 2, name: 'Rodrigo'
  }
]
const App = () => {
  const [users, setUsers] = useState(usersDefault)
  const [name, setName] = useState('')
  const [search, setSearch] = useState('')

  const handleAdd = () => {
    const newUser = {
      id: Date.now(),
      name
    }
    setUsers([...users, newUser])
    setName('')
    setSearch('')
  }

  const handleDelete = useCallback((userId) => {
    setUsers(users.filter(user => user.id !== userId))
  }, [users])

  const handleSearch = () => {
    setSearch(name)
  }

  const printUsers = useCallback(() => {
    console.log('changed users', { users });
  }, [users])

  const filteredUsers = useMemo(() =>
    users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())
    ), [users, search])

  useEffect(() => {
    console.log('app render');
  })

  useEffect(() => {
    printUsers()
  }, [users, printUsers])

  return (
    <div className="App">
      <fieldset>
        <legend>Registro</legend>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleAdd}>Add</button>
      </fieldset>
      <List users={filteredUsers} handleDelete={handleDelete} />
    </div>
  )
}

export default App
