import React from 'react'
import { WiDayCloudy } from 'react-icons/wi';

export default function Loader() {
    return (
        <div className="splash-container">
            <span className="loading-icon">
                <WiDayCloudy size={200}/>
            </span>
        </div>
    )
}
