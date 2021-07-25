import React from 'react'
import { WiDayCloudy } from 'react-icons/wi';
import './Loader.scss';

export default function Loader() {
    return (
        <div className="Loader">
            <span className="Loader-icon">
                <WiDayCloudy aria-label="Weather loader" size={200}/>
            </span>
        </div>
    )
}
