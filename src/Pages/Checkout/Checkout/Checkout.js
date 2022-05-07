import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    /* const [user, setUser] = useState({
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
    } */

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post("http://localhost:5000/order", order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast("your order is booked!!");
                    event.target.reset();
                }
            })
    }

    return (
        <div>

            <h2>Please Checkout your booking!!</h2>
            <div className="w-50 mx-auto">
                <h3>Order Now:{service.name}</h3>
                <form onSubmit={handlePlaceOrder}>
                    <input className="w-1oo mb-2" type="text" value={user?.displayName} name="name" placeholder="name" required readOnly />
                    <br />
                    <input className="w-1oo mb-2" type="email" value={user?.email} name="email" placeholder="email" required readOnly disabled />
                    <br />
                    <input className="w-1oo mb-2" type="text" value={service.name} name="service" placeholder="service" required readOnly />
                    <br />
                    <input className="w-1oo mb-2" type="text" value={user.address} name="address" placeholder="address" autoComplete="off" required />
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