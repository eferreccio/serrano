import './userDetail.css';

const UserDetail = () => {
    return (
        <div>
            <h3 className="msg-detail">Your Details</h3>
            <form className="main-form">
                <li>
                    <label for="name">Name</label>
                    <input type="text" name="name"></input>
                </li>
                <li>
                    <label for="number">Contact Number</label>
                    <input type="number" name="number"></input>                    
                </li>
                <li>
                    <label for="address">Address</label>
                    <input type="text" name="address"></input>                    
                </li>
                <li>
                    <label for="zip-code">Zip Code</label>
                    <input type="text" name="zip-code"></input>                    
                </li>
            </form>           
        </div>
    )
}

export default UserDetail