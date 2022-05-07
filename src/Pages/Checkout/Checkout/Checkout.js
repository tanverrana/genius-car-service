import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user, setUser] = useState({
        name: "Akbar Ali",
        email: "akbar@gmail.com",
        address: "Mohammadpur,dhaka",
        phone: "0102039484"
    });

    const handleAddressChange = event => {
        console.log(event.target.value);
        const { address, ...rest } = user;
        const newAddress = event.target.value;
        const newUser = { address: newAddress, ...rest };
        setUser(newUser);
        console.log(newUser);
    }

    return (
        <div>

            <h2>Please Checkout your booking!!</h2>
            <div className="w-50 mx-auto">
                <h3>Order Now:{service.name}</h3>
                <form>
                    <input className="w-1oo mb-2" type="text" value={user.name} name="name" placeholder="name" required />
                    <br />
                    <input className="w-1oo mb-2" type="email" value={user.email} name="email" placeholder="email" required />
                    <br />
                    <input className="w-1oo mb-2" type="text" value={service.name} name="service" placeholder="service" required />
                    <br />
                    <input className="w-1oo mb-2" type="text" value={user.address} onChange={handleAddressChange} name="address" placeholder="address" required />
                    <br />
                    <input className="w-1oo mb-2" type="text" value={user.phone} name="phone" placeholder="phone" required />
                    <br />
                    <input type="submit" className="btn btn-primary" value="Place Order" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;