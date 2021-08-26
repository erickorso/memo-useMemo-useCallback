import React, { memo, useEffect } from 'react'

export default memo(({ user, handleDelete }) => {
    useEffect(() => {
        console.log('item render');
    });
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {user.name} &nbsp;
            <button className="btn btn-outline-danger" onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
    )
})