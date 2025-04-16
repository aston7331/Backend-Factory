import { Request, Response } from 'express';
import * as stripeService from '../services/stripeService';

export const createPaymentIntent = async (req: Request, res: Response) => {
  try {
    const { amount, currency } = req.body;
    const paymentIntent = await stripeService.createPaymentIntent(amount, currency);
    res.json(paymentIntent);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const createPlan = async (req: Request, res: Response) => {
  try {
    const { amount, currency, interval, productName } = req.body;
    const plan = await stripeService.createPlan(amount, currency, interval, productName);
    res.json(plan);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const createSubscription = async (req: Request, res: Response) => {
  try {
    const { customerId, planId } = req.body;
    const subscription = await stripeService.createSubscription(customerId, planId);
    res.json(subscription);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getPaymentStatus = async (req: Request, res: Response) => {
  try {
    const { paymentIntentId } = req.params;
    const paymentIntent = await stripeService.getPaymentStatus(paymentIntentId);
    res.json(paymentIntent);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getSubscriptionStatus = async (req: Request, res: Response) => {
  try {
    const { subscriptionId } = req.params;
    const subscription = await stripeService.getSubscriptionStatus(subscriptionId);
    res.json(subscription);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getPlan = async (req: Request, res: Response) => {
  try {
    const { planId } = req.params;
    const plan = await stripeService.getPlan(planId);
    res.json(plan);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
