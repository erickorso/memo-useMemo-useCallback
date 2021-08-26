import React, { memo, useEffect } from 'react'
import ItemList from "./ItemList"

export default memo(({ users, handleDelete }) => {
    useEffect(() => {
        console.log('list render');
    });
    return (
        <ul className="list-group">
            {users && users.map(user => <ItemList key={user.id} user={user} handleDelete={handleDelete} />)}
        </ul>
    )
})