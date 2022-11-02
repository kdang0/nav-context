import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'


const Form = () => {
    const { name, setName} = useContext(UserContext);

    return (
        <div>
            <label>Your Name:</label>
            <input value={name} type="text" onChange = { e => setName(e.target.value) }/>
        </div>
    );
};

export default Form