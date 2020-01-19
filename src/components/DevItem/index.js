import React from 'react';
import './style.css';

function DevItem ({ dev }) {
    return (
        <li className="dev-item">
            <header>
            <img src={dev.avatar_url} />
            <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
            </div>              
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`} target="_blank">Acessar perfil no GitHub</a>
        </li>
    )
}

export default DevItem;