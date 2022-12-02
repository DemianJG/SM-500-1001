import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/user/'

const EditUser = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            name: name, username: username, email: email, password: password, password_confirmation: password_confirmation 
        })
        navigate('/')
    }
    
    useEffect( () =>{
        const getUserById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setUsername(response.data.username)
            setEmail(response.data.email)
            setPassword(response.data.password)
            setPassword_confirmation(response.data.password)
        }
        getUserById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <h3>Edit Product</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Price</label>
                <input 
                    value={username}
                    onChange={ (e)=> setUsername(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Stock</label>
                <input 
                    value={email}
                    onChange={ (e)=> setEmail(e.target.value)}
                    type='email'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Contraseña</label>
                <input 
                    value={password}
                    onChange={ (e)=> setPassword(e.target.value)}
                    type='password'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Confirmar contraseña</label>
                <input 
                    value={password_confirmation}
                    onChange={ (e)=> setPassword_confirmation(e.target.value)}
                    type='password'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Actualizar</button>
        </form>
    </div>
    )
}

export default EditUser

