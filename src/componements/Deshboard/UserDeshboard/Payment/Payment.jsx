import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
// import useBooking from "../../../../../hooks/useBooking";
import { useParams } from "react-router-dom";
import useTitle from "../../../../../hooks/useTitle";
// import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    useTitle("PaymentPage")
    const { id } = useParams();
    // console.log(id)
    // const total = cart.reduce((sum, item) => sum + item.price, 0);
    // const location = useLocation();
    // const item = location.state && location.state.item;
    // console.log(item);
    // const [bookings] = useBooking();
    // const total = bookings.reduce((sum, item) => sum + item.price, 0);
    // const price = parseFloat(total.toFixed(2))

    // console.log(bookings, price)

    return (
        <div>
            <h2 className="text-3xl"> Teka Pay...{id}</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm id={id}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;