import { createClient } from "@supabase/supabase-js"
import { stripe, getOrCreateCustomer } from "@/lib/stripe"
import { type User } from "@supabase/supabase-js"

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable')
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

interface SubscriptionPlan {
  id: string
  name: string
  price: number
  interval: "month" | "year"
  features: string[]
}

export const SUBSCRIPTION_PLANS = {
  monthly: {
    id: "price_monthly",
    name: "Monthly Plan",
    price: 5,
    interval: "month",
    features: [
      "Ad-free experience",
      "Premium content access",
      "Early access to new features",
      "Offline listening",
      "HD audio quality"
    ]
  },
  yearly: {
    id: "price_yearly",
    name: "Yearly Plan",
    price: 50,
    interval: "year",
    features: [
      "All monthly features",
      "17% discount",
      "Priority support"
    ]
  }
} as const

export async function createSubscription({
  priceId,
  user,
  returnUrl
}: {
  priceId: string
  user: User
  returnUrl: string
}) {
  const customer = await getOrCreateCustomer(user)
  
  const session = await stripe.checkout.sessions.create({
    customer: customer.id,
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    success_url: `${returnUrl}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: returnUrl,
    metadata: {
      userId: user.id
    }
  })

  return session
}

export async function getSubscriptionStatus(userId: string) {
  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("*, prices(*, products(*))")
    .eq("user_id", userId)
    .single()

  return subscription
} 