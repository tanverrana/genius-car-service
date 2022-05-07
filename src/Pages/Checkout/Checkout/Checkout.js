import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    return (
        <div>

            <h2>Please Checkout your booking!!</h2>
            <div className="w-50 mx-auto">
                <h3>Order Now:{service.name}</h3>
                <form>
                    <input className="w-1oo mb-2" type="text" name="name" placeholder="name" required />
                    <br />
                    <input className="w-1oo mb-2" type="email" name="email" placeholder="email" required />
                    <br />
                    <input className="w-1oo mb-2" type="text" value={service.name} name="service" placeholder="service" required />
                    <br />
                    <input className="w-1oo mb-2" type="text" name="address" placeholder="address" required />
                    <br />
                    <input className="w-1oo mb-2" type="text" name="phone" placeholder="phone" required />
                    <br />
                    <input type="submit" className="btn btn-primary" value="Place Order" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;