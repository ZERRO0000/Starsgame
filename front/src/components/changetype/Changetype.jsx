import React, { useState} from 'react';
import './style.css';

export default function ChangeType() {
    const [theme, setTheme] = useState();
    const switchTheme = () => {
        setTheme((cur) => (cur === 'Светлый' ? 'Темный' : 'Светлый'));

    };
    return (
        <div className="wrapper" id = {theme}>
      		<div className="toggle-container">
				<p className="change-text">{theme} тип</p>
				<input onChange={switchTheme} type="checkbox" id="toggle-btn" />
				<label htmlFor="toggle-btn" className="toggle-label"></label>
      		</div>
		</div>
    )
}