import { v4 as uuidv4 } from 'uuid';
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

// Use the API version that matches your installed Stripe package
type StripeApiVersion = '2025-03-31.basil';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-03-31.basil',
});

type Payment = {
  id: string;
  amount: number;
  status: string;
};

const payments: Payment[] = [];

class PaymentService {
  async getAllPayments(): Promise<Payment[]> {
    return payments;
  }

  async getPaymentById(id: string): Promise<Payment | undefined> {
    return payments.find(p => p.id === id);
  }

  async createPayment(data: Omit<Payment, 'id'>): Promise<Payment> {
    const payment = { id: uuidv4(), ...data };
    payments.push(payment);
    return payment;
  }

  async updatePayment(id: string, data: Partial<Omit<Payment, 'id'>>): Promise<Payment | undefined> {
    const payment = payments.find(p => p.id === id);
    if (payment) {
      Object.assign(payment, data);
      return payment;
    }
    return undefined;
  }

  async deletePayment(id: string): Promise<boolean> {
    const index = payments.findIndex(p => p.id === id);
    if (index !== -1) {
      payments.splice(index, 1);
      return true;
    }
    return false;
  }
}

export const paymentService = new PaymentService();

export async function createStripePaymentIntent(amount: number, currency: string = 'usd') {
  return await stripe.paymentIntents.create({
    amount,
    currency,
  });
}
