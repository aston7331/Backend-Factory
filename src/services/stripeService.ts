import stripe from '../config/stripe';

export const createPaymentIntent = async (amount: number, currency: string) => {
  return await stripe.paymentIntents.create({
    amount,
    currency,
  });
};

export const createPlan = async (amount: number, currency: string, interval: 'day' | 'week' | 'month' | 'year', productName: string) => {
  const product = await stripe.products.create({ name: productName });
  return await stripe.plans.create({
    amount,
    currency,
    interval,
    product: product.id,
  });
};

export const createSubscription = async (customerId: string, planId: string) => {
  return await stripe.subscriptions.create({
    customer: customerId,
    items: [{ plan: planId }],
  });
};

export const getPaymentStatus = async (paymentIntentId: string) => {
  return await stripe.paymentIntents.retrieve(paymentIntentId);
};

export const getSubscriptionStatus = async (subscriptionId: string) => {
  return await stripe.subscriptions.retrieve(subscriptionId);
};

export const getPlan = async (planId: string) => {
  return await stripe.plans.retrieve(planId);
};
