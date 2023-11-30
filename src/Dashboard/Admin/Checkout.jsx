import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import { isTrainers } from "../../Api/Featured/Featured";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axiosSecure from "../../Hooks/localAxios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  const navigate = useNavigate();
  const { user } = useAuth();

  const { data: trainers = [], refetch } = useQuery({
    queryKey: ["trainerPayment"],
    queryFn: async () => {
      const res = await isTrainers();
      return res;
    },
  });
  // console.log(trainers);
  const totalSalary = 5000;

  useEffect(() => {
    if (totalSalary > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalSalary })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [totalSalary]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      toast.error("paymentMethod Failed");
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      toast.success("Payment Success!");
    }

    /// Confirmed Payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || "anonymous",
        },
      },
    });

    if (confirmError) {
      console.log("confirmError", confirmError);
    } else {
      console.log("PaymentIntent======>", paymentIntent);
      // if (paymentIntent.status === "succeeded") {
      //   console.log("tran Id", paymentIntent);
      //   toast.success(paymentIntent.id);

      //     // Sent user payment data site to server
      //     const payment = {
      //       email: user?.email,
      //       transactionId: paymentIntent.id,
      //       price: totalSalary,
      //       date: new Date(),
      //       cartIds: cart?.map((item) => item._id),
      //       menuItemIds: cart?.map((item) => item.menuId),
      //       status: "pending",
      //     };

      //     const res = await axiosLock?.post("/payments", payment);
      //     refetch();
      //     console.log(res.data);
      //     navigate("/dashboard/paymentHistory");
      //   }
    }
  };

  return (
    <div className=" w-8/12 mx-auto mt-20 border border-green-400  p-8 rounded-md text-white font-bold">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn bg-green-500 text-white font-bold w-full hover:bg-yellow-400  mx-auto mt-20"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
