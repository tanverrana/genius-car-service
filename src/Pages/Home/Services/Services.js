import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Home/Service/Service';
import "./Services.css";




const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("service.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h2 className="services-title">Our Services:{services.length}</h2>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;