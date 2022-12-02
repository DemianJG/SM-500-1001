import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const endpoint = 'http://localhost:8000/api/user'

const CreateUser = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, { name: name, username: username, email: email, password: password, password_confirmation: password_confirmation })
        navigate('/')
    }

    return (
        <div>
            <h3>Agregar usuario</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Nombre de usuario</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Correo electrónico</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Contraseña</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Confirmar contraseña</label>
                    <input
                        value={password_confirmation}
                        onChange={(e) => setPassword_confirmation(e.target.value)}
                        type='password'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Agregar</button>
            </form>
        </div>
    )
}

export default CreateUser