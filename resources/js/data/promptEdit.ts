import type { Feature, TemplateCategory, Testimonial, FaqItem, PricingPlan, NavLink } from '@/types'

export const navLinks: NavLink[] = [
    { label: 'Features', href: '#features' },
    { label: 'Templates', href: '#templates' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
]

export const features: Feature[] = [
    {
        title: 'AI Image Tools',
        icon: '🎨',
        items: ['AI Clones', 'Social Media Posts', 'Graphic Design', 'Image Editing', 'YouTube Thumbnails', 'Online Ads'],
    },
    {
        title: 'AI Video Tools',
        icon: '🎬',
        items: ['Clone Videos', 'Visual Effects', 'Cinematic Films', 'Video Ads', 'Reels & TikToks', 'YouTube Videos'],
    },
    {
        title: 'AI Audio Tools',
        icon: '🎵',
        items: ['AI Voiceovers', 'AI Voice Clones', 'Voice Swaps', 'AI Sound Effects', 'AI Music Generation'],
    },
    {
        title: 'AI Editing Plugins',
        icon: '🔌',
        items: [
            'Access AI tools within your editing software',
            'Generate AI creations in your favorite editor',
            'No browser needed – plugins work inside your app',
        ],
    },
]

export const templateCategories: TemplateCategory[] = [
    { name: 'LUTs', count: '4,000+', description: 'Cinematic color presets. Drag and drop for professional-grade color grading.', icon: '🎨' },
    { name: 'Sound Effects', count: '60,000+', description: 'Royalty-free professional SFX for any project.', icon: '🔊' },
    { name: 'Text Animations', count: '3,000+', description: 'Scroll-stopping title templates and motion graphics.', icon: '💬' },
    { name: 'Overlays', count: '2,000+', description: 'Viral textures, vintage looks, and creative overlays.', icon: '🪄' },
    { name: 'Backgrounds', count: '5,000+', description: 'Animated and static backgrounds for clean, pro videos.', icon: '✅' },
]

export const testimonials: Testimonial[] = [
    {
        quote: 'Thank you so much for the Content Creator Templates Library! My daughter and I got more editing work done today in 3 hours than we normally do in 3 days.',
        author: 'Hilda Schlueter',
        role: 'Online Course Creator',
    },
    {
        quote: 'My videos wouldn\'t look HALF as good as they do if it wasn\'t for the Content Creator Templates Library.',
        author: 'Matt Lilley',
        role: 'ContentCreator.com Student',
    },
    {
        quote: 'The Content Creator Templates Library is a fantastic resource! I don\'t need any other digital asset subscriptions.',
        author: 'Brady Hales',
        role: 'ContentCreator.com Student',
    },
]

export const faqs: FaqItem[] = [
    {
        q: 'What is PromptEdit.com?',
        a: 'Think of PromptEdit like a "grocery store for AI tools". It lets you access all your favorite AI tools in one place — without subscribing to each tool individually. You simply purchase and use credits. No subscription required, just pay for what you use.',
    },
    {
        q: 'Can I use what I create for commercial projects?',
        a: 'Absolutely! Everything you create or download during your active membership is cleared for use in all commercial projects. We don\'t charge extra for commercial licensing.',
    },
    {
        q: 'Is there a quality difference between tools on PromptEdit and the original sites?',
        a: 'No quality difference whatsoever. You\'re accessing the same tools on a "pay-per-use" basis instead of paying through a subscription.',
    },
    {
        q: 'What is Content Creator Templates?',
        a: 'It\'s the world\'s most affordable library of 100,000+ royalty-free video editing templates. With a PromptEdit subscription, you get full unlimited access — including color grading presets, titles, visual effects, sound effects, motion backgrounds, and much more.',
    },
    {
        q: 'Do any limits apply to downloads?',
        a: 'No limits! With your one login you get unlimited downloads of all templates on the site.',
    },
    {
        q: 'Will the templates work in my editing platform?',
        a: 'Yes, the templates work with all major video editing platforms. Some custom templates are made for specific platforms as well.',
    },
    {
        q: 'Can I cancel at anytime?',
        a: 'Absolutely. No long-term contracts. Email us at support@contentcreator.com or cancel directly through the site.',
    },
    {
        q: 'What happens to my downloaded templates if I cancel?',
        a: 'Any videos you created during your membership are cleared for life! After cancellation, you can no longer use the templates for new projects.',
    },
]

export const pricingPlans: PricingPlan[] = [
    {
        name: 'Starter Credits',
        price: '$98',
        period: 'one payment',
        credits: '$110 worth of AI credits',
        badge: 'Save 10%',
        features: [
            'Use credits on any AI tool',
            'No subscription required',
            'Access all major AI tools',
            'Pay-as-you-go flexibility',
        ],
        cta: 'Claim Deal',
        highlighted: false,
    },
    {
        name: 'Monthly Subscription',
        price: '$39',
        period: 'per month',
        credits: '$49 worth of AI credits every month',
        badge: 'Most Popular',
        features: [
            'Get $49 in AI credits each month',
            '10% off anytime you buy more',
            'Lifetime 20% boost on monthly credits',
            'Full access to Templates Library',
            'Faster generation speeds',
            'Run multiple generations at once',
        ],
        cta: 'Claim Deal',
        highlighted: true,
    },
]
