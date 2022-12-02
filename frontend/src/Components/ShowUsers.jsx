import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const endpoint = 'http://localhost:8000/api'

const ShowUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/users`)
        setUsers(response.data)
        //console.log(response.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`${endpoint}/user/${id}`)
        getAllProducts()
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Agregar</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Nombre</th>
                        <th>Nombre de usuario</th>
                        <th>Correo</th>
                        <th>Contraseña</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteUser(user.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowUsers;