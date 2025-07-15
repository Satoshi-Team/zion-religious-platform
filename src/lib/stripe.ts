import Stripe from 'stripe'
import type { User } from '@supabase/supabase-js'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-02-24.acacia', // Updated to latest API version
  typescript: true
})

/**
 * Gets an existing Stripe customer or creates a new one
 */
export async function getOrCreateCustomer(user: User) {
  // Try to find existing customer by email
  const existingCustomers = await stripe.customers.list({
    email: user.email,
    limit: 1
  })

  if (existingCustomers.data.length > 0) 
    return existingCustomers.data[0]

  // Create new customer if none exists
  return stripe.customers.create({
    email: user.email,
    metadata: {
      supabaseUUID: user.id
    }
  })
} 