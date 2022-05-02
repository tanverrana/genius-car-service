import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services] = useServices();
    return (
        <div className="w-50 mx-auto">
            <h2>Manage Your Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name}</h4>
                </div>)
            }
        </div>
    );
};

export default ManageServices;