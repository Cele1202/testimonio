import React from 'react';

const Usuario = (usuario) => {
    return (
        <div>
            <h1>User Details</h1>
            <p>ID: {usuario.id}</p>
            <p>Name: {usuario.name}</p>
            <p>Username: {usuario.username}</p>
            <p>Email: {usuario.email}</p>
            <p>Address: {usuario.address.street}, {usuario.address.suite}, {usuario.address.city}, {usuario.address.zipcode}</p>
            <p>Phone: {usuario.phone}</p>
            <p>Website: {usuario.website}</p>
            <p>Company: {usuario.company.name}</p>
        </div>
    );
};

export default Usuario;
