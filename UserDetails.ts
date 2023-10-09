import Stripe from "stripe";

export interface UserDetails {
  id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  avatar_url: string;
  billing_address: string;
  payment_method: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}
