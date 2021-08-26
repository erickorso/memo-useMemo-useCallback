import React, { memo, useEffect } from 'react'

export default memo(({ user, handleDelete }) => {
    useEffect(() => {
        console.log('item render');
    });
    return (
        <li>
            {user.name} &nbsp;
            <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
    )
})