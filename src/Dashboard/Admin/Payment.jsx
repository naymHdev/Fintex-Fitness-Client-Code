import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_API_KEY);

  return (
    <>
      <SectionTitle heading={"Do Payment"} />
      <section>
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
      </section>
    </>
  );
};

export default Payment;
