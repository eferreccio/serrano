import React from 'react'
import Mode from './mode/Mode';
import UserDetail from './userDetail/UserDetail';



const Header = () => {
    return (
        <div>
            <Mode /> 
            <UserDetail />           
        </div>
    )
}

export default Header