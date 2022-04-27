import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Home/Service/Service';
import "./Services.css";




const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className="container">
            <h1 className="text-center text-primary mt-5">Our Services:{services.length}</h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;