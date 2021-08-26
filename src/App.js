import React, { useState, useEffect, useMemo, useCallback } from 'react'
import List from './List'

const usersDefault = [
  {
    id: 1, name: 'Erick'
  },
  {
    id: 2, name: 'Rodrigo'
  },
  {
    id: 3, name: 'Thaydeé'
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
    <div className="App container">
      <div class="jumbotron mt-5">
        <h1>memo - useMemo - useCallback</h1>
        <div class="input-group">
          <input
            className="form-control"
            placeholder="Write a name..."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div class="input-group-append" id="button-addon3">
            <button className="btn btn-outline-secondary" onClick={handleSearch}>Search</button>
            <button className="btn btn-outline-success" onClick={handleAdd}>Add</button>
          </div>
        </div>
        <br />
        <List users={filteredUsers} handleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default App
