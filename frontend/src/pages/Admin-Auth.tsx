import { useState } from 'react'

interface Login {
    email: string,
    password: string
}

const AdminAuth = () => {
    const [login, setLogin] = useState<Login>({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLogin((prevLogin) => ({
            ...prevLogin,
            [name]: value,
        }));
    };

    return (
        <div>
            <input
                type='email'
                name='email'
                placeholder='email'
                value={login.email}
                onChange={handleChange} />
            <input
                type='password'
                name='password'
                placeholder='pass'
                value={login.password}
                onChange={handleChange} />
        </div>
    )
}

export default AdminAuth
