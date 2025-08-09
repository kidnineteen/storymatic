/*
 * data.js
 *
 * This file contains all the static data used by the website,
 * such as product listings, user accounts (for demo purposes),
 * and an initial empty cart state.
 *
 * NOTE: For a real-world application, this data would be fetched
 * from a database via an API.
 */

// A list of example products.
const products = [
    {
        id: 'p1',
        name: 'The Productivity Bundle',
        description: 'A powerful collection of templates, checklists, and guides to supercharge your daily workflow and project management.',
        category: 'Business',
        price: 39.99,
        image: 'https://placehold.co/400x300/5d56f9/ffffff?text=Productivity+Bundle'
    },
    {
        id: 'p2',
        name: 'Social Media Content Calendar',
        description: 'Plan, create, and schedule your content with ease. Includes prompts, post ideas, and a full-year calendar.',
        category: 'Content Creation',
        price: 24.99,
        image: 'https://placehold.co/400x300/f7a83d/ffffff?text=Content+Calendar'
    },
    {
        id: 'p3',
        name: 'Freelancer Startup Kit',
        description: 'Everything you need to launch your freelance career, from contracts and invoices to client onboarding checklists.',
        category: 'Freelancing',
        price: 49.99,
        image: 'https://placehold.co/400x300/1e1e2d/ffffff?text=Freelancer+Kit'
    },
    {
        id: 'p4',
        name: 'Etsy Shop Launch Guide',
        description: 'A step-by-step guide to setting up and optimizing your Etsy shop for maximum visibility and sales.',
        category: 'E-commerce',
        price: 19.99,
        image: 'https://placehold.co/400x300/6c757d/ffffff?text=Etsy+Guide'
    },
    {
        id: 'p5',
        name: 'Brand Identity Workbook',
        description: 'Define your brand\'s mission, vision, and voice with this comprehensive interactive workbook.',
        category: 'Branding',
        price: 29.99,
        image: 'https://placehold.co/400x300/e74c3c/ffffff?text=Brand+Workbook'
    },
    {
        id: 'p6',
        name: 'Email Marketing Playbook',
        description: 'Learn to build a loyal subscriber base and craft compelling email campaigns that convert.',
        category: 'Marketing',
        price: 34.99,
        image: 'https://placehold.co/400x300/3498db/ffffff?text=Email+Marketing'
    },
];

// A list of example user accounts for the demo.
const users = [
    {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User'
    },
];

// The shopping cart array, which will be populated dynamically.
let cart = [];