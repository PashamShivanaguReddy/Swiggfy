export const restaurants = [
  {
    id: "r1",
    name: "Biryani House",
    rating: 4.4,
    cuisine: "Biryani • North Indian",
    deliveryTime: "25-35 min",
    priceTier: 2,
    vegOnly: false,
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=60",
    offers: ["Flat 20% OFF", "Free delivery above ₹199"],
    menu: [
      {
        id: "m101",
        name: "Chicken Dum Biryani",
        description: "Aromatic basmati rice layered with tender chicken, slow-cooked with spices.",
        price: 249,
        veg: false,
        image:
          "https://images.unsplash.com/photo-1633945274309-2c16c9682a8a?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m102",
        name: "Mutton Biryani",
        description: "Rich, spicy mutton biryani with caramelized onions and saffron notes.",
        price: 329,
        veg: false,
        image:
          "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m103",
        name: "Veg Biryani",
        description: "Seasonal vegetables and fragrant rice cooked with whole spices.",
        price: 199,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m104",
        name: "Mirchi Ka Salan",
        description: "Classic Hyderabadi peanut-sesame curry; perfect with biryani.",
        price: 89,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m105",
        name: "Double Ka Meetha",
        description: "Hyderabadi bread pudding dessert with nuts and ghee-roasted bread.",
        price: 99,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1621939514649-280e2aa8f1b7?auto=format&fit=crop&w=1200&q=60"
      }
    ]
  },

  {
    id: "r2",
    name: "Green Bowl",
    rating: 4.6,
    cuisine: "Healthy • Salads • Bowls",
    deliveryTime: "20-30 min",
    priceTier: 2,
    vegOnly: true,
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=60",
    offers: ["UPTO ₹120 OFF"],
    menu: [
      {
        id: "m201",
        name: "Paneer Protein Bowl",
        description: "Grilled paneer, quinoa, veggies, and a zesty dressing.",
        price: 229,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m202",
        name: "Avocado Salad",
        description: "Creamy avocado with crunchy greens, seeds, and lemon dressing.",
        price: 249,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m203",
        name: "Fruit Yogurt Parfait",
        description: "Seasonal fruits with yogurt, honey, and granola crunch.",
        price: 159,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m204",
        name: "Cold Coffee (No Sugar)",
        description: "Chilled coffee blended smooth; unsweetened by default.",
        price: 129,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=1200&q=60"
      }
    ]
  },

  {
    id: "r3",
    name: "Pizza Corner",
    rating: 4.1,
    cuisine: "Pizza • Italian",
    deliveryTime: "30-40 min",
    priceTier: 3,
    vegOnly: false,
    image:
      "https://images.unsplash.com/photo-1548365328-9f5470a4f3d5?auto=format&fit=crop&w=1200&q=60",
    offers: ["Buy 1 Get 1"],
    menu: [
      {
        id: "m301",
        name: "Margherita Pizza",
        description: "Classic cheese pizza with basil and rich tomato sauce.",
        price: 299,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m302",
        name: "Pepperoni Pizza",
        description: "Loaded pepperoni, mozzarella, and oregano on a crisp base.",
        price: 399,
        veg: false,
        image:
          "https://images.unsplash.com/photo-1601924582975-7e1a1a7d2b3d?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m303",
        name: "Garlic Bread",
        description: "Buttery garlic bread baked golden; served with dip.",
        price: 149,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1604908177071-3bb2e2d5e8cc?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m304",
        name: "Choco Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 129,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=60"
      }
    ]
  },

  {
    id: "r4",
    name: "Dosa & Tiffins",
    rating: 4.5,
    cuisine: "South Indian • Tiffins",
    deliveryTime: "20-25 min",
    priceTier: 1,
    vegOnly: true,
    image:
      "https://images.unsplash.com/photo-1668236543090-82b0f0101d45?auto=format&fit=crop&w=1200&q=60",
    offers: ["Save ₹60 on combos"],
    menu: [
      {
        id: "m401",
        name: "Masala Dosa",
        description: "Crispy dosa stuffed with spiced potato masala; served with chutney & sambar.",
        price: 129,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m402",
        name: "Idli (4 pcs)",
        description: "Soft steamed idlis with coconut chutney and hot sambar.",
        price: 89,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1668236543222-5e4c2f8e02cf?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m403",
        name: "Vada (2 pcs)",
        description: "Crispy urad dal vadas; perfect with sambar dip.",
        price: 79,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1626078293495-0f22b0d5b2e7?auto=format&fit=crop&w=1200&q=60"
      }
    ]
  },

  {
    id: "r5",
    name: "Street Snacks",
    rating: 4.2,
    cuisine: "Chaat • Snacks • Fast Food",
    deliveryTime: "25-30 min",
    priceTier: 1,
    vegOnly: true,
    image:
      "https://images.unsplash.com/photo-1628294896516-344152f3ea7c?auto=format&fit=crop&w=1200&q=60",
    offers: ["Flat ₹50 OFF"],
    menu: [
      {
        id: "m501",
        name: "Pav Bhaji",
        description: "Buttery bhaji topped with onions & coriander; served with toasted pav.",
        price: 139,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc500f?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m502",
        name: "Samosa (2 pcs)",
        description: "Crispy, flaky samosas stuffed with spiced potato filling.",
        price: 59,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=60"
      },
      {
        id: "m503",
        name: "Pani Puri",
        description: "Crunchy puris with spicy-tangy pani and potato-chana stuffing.",
        price: 69,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1604908177077-5d1c5edc6e90?auto=format&fit=crop&w=1200&q=60"
      }
    ]
  }
];
