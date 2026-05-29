export interface Feature {
    title: string
    icon: string
    items: string[]
}

export interface TemplateCategory {
    name: string
    count: string
    description: string
    icon: string
}

export interface Testimonial {
    quote: string
    author: string
    role: string
}

export interface FaqItem {
    q: string
    a: string
}

export interface PricingPlan {
    name: string
    price: string
    period: string
    credits: string
    badge: string | null
    features: string[]
    cta: string
    highlighted: boolean
}

export interface NavLink {
    label: string
    href: string
}
