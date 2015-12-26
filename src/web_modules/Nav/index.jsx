import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
    <ul>
        <li><Link to='/'>Homepage</Link></li>
        <li><Link to='/orders'>Commandes</Link></li>
        <li><Link to='/account'>Mon compte</Link></li>
    </ul>
);

export default Nav;
