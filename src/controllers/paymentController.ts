import { Request, Response } from 'express';
import { paymentService, createStripePaymentIntent } from '../services/paymentService';

class PaymentController {
  async getAllPayments(req: Request, res: Response) {
    const payments = await paymentService.getAllPayments();
    res.json(payments);
  }

  async getPaymentById(req: Request, res: Response) {
    const payment = await paymentService.getPaymentById(req.params.id);
    if (payment) res.json(payment);
    else res.status(404).json({ message: 'Payment not found' });
  }

  async createPayment(req: Request, res: Response) {
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json(payment);
  }

  async updatePayment(req: Request, res: Response) {
    const payment = await paymentService.updatePayment(req.params.id, req.body);
    if (payment) res.json(payment);
    else res.status(404).json({ message: 'Payment not found' });
  }

  async deletePayment(req: Request, res: Response) {
    const success = await paymentService.deletePayment(req.params.id);
    if (success) res.json({ message: 'Payment deleted' });
    else res.status(404).json({ message: 'Payment not found' });
  }

  // Stripe PaymentIntent endpoint
  async createStripePaymentIntent(req: Request, res: Response) {
    try {
      const { amount, currency } = req.body;
      const paymentIntent = await createStripePaymentIntent(amount, currency);
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

const paymentController = new PaymentController();
export default paymentController;
