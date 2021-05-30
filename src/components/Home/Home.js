import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='text-center'>
           <h1>Welcome To Noboni Internal Chat</h1> 
           <Link to='/chatpage'><Button variant='secondary'>SignIn With Google</Button></Link>
        </div>
    );
};

export default Home;