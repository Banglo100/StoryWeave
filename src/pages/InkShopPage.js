import React, { useState } from 'react';

// This is placeholder data for the shop items.
// In a real application, this data would be fetched from a server.
const shopItems = {
    inkPacks: [
        { id: 'pack-1', name: 'Ink Vial', description: 'A small vial with 100 Inks.', price: '$1.99', amount: 100 },
        { id: 'pack-2', name: 'Inkwell', description: 'A full inkwell with 500 Inks.', price: '$4.99', amount: 500 },
        { id: 'pack-3', name: 'Ink Bottle', description: 'A large bottle with 1,500 Inks.', price: '$9.99', amount: 1500 },
    ],
    upgrades: [
        { id: 'upgrade-1', name: 'Ink Caddy', description: 'Permanently increases your maximum Ink capacity by 100.', price: '$5.99', capacity: 100 },
        { id: 'upgrade-2', name: 'Ink Barrel', description: 'Permanently increases your maximum Ink capacity by 500.', price: '$19.99', capacity: 500 },
    ],
    subscription: {
        id: 'sub-1',
        name: 'Master Weaver Subscription',
        price: '$4.99/month',
        features: [
            'Enhanced Ink regeneration',
            'Large monthly Ink grant',
            'Special profile badge',
            'Ad-free experience',
        ],
    },
};

function InkShopPage() {
    // A placeholder function to handle a purchase
    const handlePurchase = (item) => {
        // You would integrate with a payment service like Stripe or PayPal here.
        console.log(`User is attempting to purchase: ${item.name}`);
        alert(`Thank you for your purchase of ${item.name}! (Placeholder action)`);
    };

    return (
        <div className="ink-shop-page">
            <header className="page-header">
                <h1>The Ink Shop</h1>
                <p>Buy Inks, upgrades, and more to enhance your writing experience!</p>
            </header>

            <hr />

            <section className="ink-packs-section">
                <h2>Buy Ink</h2>
                <div className="item-grid">
                    {shopItems.inkPacks.map(item => (
                        <div key={item.id} className="shop-item">
                            <h3>{item.name}</h3>
                            <p className="item-description">{item.description}</p>
                            <span className="item-price">{item.price}</span>
                            <button onClick={() => handlePurchase(item)} className="buy-button">Buy Now</button>
                        </div>
                    ))}
                </div>
            </section>

            <hr />

            <section className="upgrades-section">
                <h2>Permanent Upgrades</h2>
                <div className="item-grid">
                    {shopItems.upgrades.map(item => (
                        <div key={item.id} className="shop-item">
                            <h3>{item.name}</h3>
                            <p className="item-description">{item.description}</p>
                            <span className="item-price">{item.price}</span>
                            <button onClick={() => handlePurchase(item)} className="buy-button">Buy Upgrade</button>
                        </div>
                    ))}
                </div>
            </section>

            <hr />

            <section className="subscription-section">
                <h2>Master Weaver Subscription</h2>
                <div className="subscription-item">
                    <div className="subscription-info">
                        <h3>{shopItems.subscription.name}</h3>
                        <p className="subscription-price">{shopItems.subscription.price}</p>
                        <ul className="subscription-features">
                            {shopItems.subscription.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={() => handlePurchase(shopItems.subscription)} className="buy-button">
                        Become a Master Weaver
                    </button>
                </div>
            </section>
        </div>
    );
}

export default InkShopPage;