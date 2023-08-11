import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "sk_test_51NdYFfSJusYxjhWag3WcqGfikx29fNDHYCyuvlLCox1CEbaWOHz7sriML5kJmDVGfeLwVWN35JandBDaoP0HWV9M008U8arTFY"
);

export default stripePromise;
