export interface MenuItem {
  id: number;
  name: string;
  description?: string;
  price: number;
}

export interface MenuCategory {
  id: number;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 1,
    name: 'Appetizers',
    items: [
      { id: 1, name: 'Spring Rolls (2)', description: 'Crispy vegetable spring rolls with sweet chili sauce', price: 4.95 },
      { id: 2, name: 'Gyoza (6)', description: 'Pan-fried pork and vegetable dumplings', price: 6.95 },
      { id: 3, name: 'Edamame', description: 'Steamed salted soybeans', price: 4.50 },
      { id: 4, name: 'Crab Rangoon (6)', description: 'Crispy wonton filled with cream cheese and crab', price: 6.50 },
      { id: 5, name: 'Shrimp Tempura (5)', description: 'Lightly battered shrimp with tempura dipping sauce', price: 7.95 },
    ],
  },
  {
    id: 2,
    name: 'Sushi Rolls',
    items: [
      { id: 1, name: 'California Roll', description: 'Crab, avocado, cucumber', price: 9.95 },
      { id: 2, name: 'Spicy Tuna Roll', description: 'Spicy tuna, cucumber, sriracha mayo', price: 11.95 },
      { id: 3, name: 'Dragon Roll', description: 'Shrimp tempura topped with avocado and eel sauce', price: 14.95 },
      { id: 4, name: 'Rainbow Roll', description: 'California roll topped with assorted sashimi', price: 15.95 },
      { id: 5, name: 'Volcano Roll', description: 'Spicy salmon, cucumber, topped with baked seafood mix', price: 13.95 },
      { id: 6, name: 'Philadelphia Roll', description: 'Salmon, cream cheese, cucumber', price: 11.95 },
    ],
  },
  {
    id: 3,
    name: 'Nigiri',
    items: [
      { id: 1, name: 'Salmon Nigiri (2)', description: 'Fresh salmon over seasoned rice', price: 6.50 },
      { id: 2, name: 'Tuna Nigiri (2)', description: 'Fresh tuna over seasoned rice', price: 7.50 },
      { id: 3, name: 'Shrimp Nigiri (2)', description: 'Cooked shrimp over seasoned rice', price: 6.00 },
      { id: 4, name: 'Yellowtail Nigiri (2)', description: 'Fresh yellowtail over seasoned rice', price: 7.00 },
      { id: 5, name: 'Eel Nigiri (2)', description: 'Grilled eel over seasoned rice with eel sauce', price: 7.50 },
    ],
  },
  {
    id: 4,
    name: 'Sashimi',
    items: [
      { id: 1, name: 'Salmon Sashimi (5 pcs)', description: 'Fresh sliced salmon', price: 12.95 },
      { id: 2, name: 'Tuna Sashimi (5 pcs)', description: 'Fresh sliced tuna', price: 14.95 },
      { id: 3, name: 'Yellowtail Sashimi (5 pcs)', description: 'Fresh sliced yellowtail', price: 13.95 },
      { id: 4, name: 'Sashimi Deluxe (15 pcs)', description: "Chef's selection of the freshest catch", price: 28.95 },
    ],
  },
  {
    id: 5,
    name: 'Hibachi Dinners',
    items: [
      { id: 1, name: 'Hibachi Chicken', description: 'Grilled chicken with fried rice, vegetables, and soup or salad', price: 16.95 },
      { id: 2, name: 'Hibachi Steak', description: 'Grilled sirloin with fried rice, vegetables, and soup or salad', price: 21.95 },
      { id: 3, name: 'Hibachi Shrimp', description: 'Grilled shrimp with fried rice, vegetables, and soup or salad', price: 18.95 },
      { id: 4, name: 'Hibachi Salmon', description: 'Grilled salmon with fried rice, vegetables, and soup or salad', price: 20.95 },
      { id: 5, name: 'Hibachi Combo', description: 'Choice of two proteins with fried rice, vegetables, and soup or salad', price: 23.95 },
    ],
  },
  {
    id: 6,
    name: 'Hibachi Fried Rice',
    items: [
      { id: 1, name: 'Chicken Fried Rice', description: 'Hibachi-style fried rice with chicken, egg, and vegetables', price: 11.95 },
      { id: 2, name: 'Shrimp Fried Rice', description: 'Hibachi-style fried rice with shrimp, egg, and vegetables', price: 12.95 },
      { id: 3, name: 'Vegetable Fried Rice', description: 'Hibachi-style fried rice with mixed vegetables and egg', price: 9.95 },
      { id: 4, name: 'Steak Fried Rice', description: 'Hibachi-style fried rice with sirloin, egg, and vegetables', price: 13.95 },
    ],
  },
  {
    id: 7,
    name: 'Noodle Dishes',
    items: [
      { id: 1, name: 'Pad Thai', description: 'Stir-fried rice noodles with egg, bean sprouts, and peanuts', price: 13.95 },
      { id: 2, name: 'Yaki Udon', description: 'Stir-fried thick udon noodles with vegetables and your choice of protein', price: 13.95 },
      { id: 3, name: 'Beef Noodle Soup', description: 'Rich broth with tender beef slices and rice noodles', price: 12.95 },
    ],
  },
  {
    id: 8,
    name: 'Wonton Soup',
    items: [
      { id: 1, name: 'Wonton Soup (Small)', description: 'Pork wontons in a savory clear broth', price: 4.95 },
      { id: 2, name: 'Wonton Soup (Large)', description: 'Pork wontons in a savory clear broth', price: 7.95 },
      { id: 3, name: 'Shrimp Wonton Soup', description: 'Shrimp wontons in a savory clear broth', price: 8.95 },
    ],
  },
  {
    id: 9,
    name: 'Hot & Sour Soup',
    items: [
      { id: 1, name: 'Hot & Sour Soup (Small)', description: 'Spicy and tangy soup with tofu, mushrooms, and egg', price: 4.95 },
      { id: 2, name: 'Hot & Sour Soup (Large)', description: 'Spicy and tangy soup with tofu, mushrooms, and egg', price: 7.95 },
    ],
  },
  {
    id: 10,
    name: 'Egg Fried Rice',
    items: [
      { id: 1, name: 'Plain Egg Fried Rice', description: 'Wok-fried rice with egg and scallions', price: 8.95 },
      { id: 2, name: 'Chicken Egg Fried Rice', description: 'Wok-fried rice with chicken and egg', price: 10.95 },
      { id: 3, name: 'Shrimp Egg Fried Rice', description: 'Wok-fried rice with shrimp and egg', price: 11.95 },
      { id: 4, name: 'House Special Fried Rice', description: 'Wok-fried rice with chicken, shrimp, and pork', price: 12.95 },
    ],
  },
  {
    id: 11,
    name: 'Lo Mein',
    items: [
      { id: 1, name: 'Vegetable Lo Mein', description: 'Soft egg noodles stir-fried with mixed vegetables', price: 9.95 },
      { id: 2, name: 'Chicken Lo Mein', description: 'Soft egg noodles stir-fried with chicken and vegetables', price: 11.95 },
      { id: 3, name: 'Shrimp Lo Mein', description: 'Soft egg noodles stir-fried with shrimp and vegetables', price: 12.95 },
      { id: 4, name: 'House Special Lo Mein', description: 'Soft egg noodles with chicken, shrimp, and pork', price: 13.95 },
    ],
  },
  {
    id: 12,
    name: 'Chow Mein',
    items: [
      { id: 1, name: 'Vegetable Chow Mein', description: 'Crispy noodles stir-fried with mixed vegetables', price: 9.95 },
      { id: 2, name: 'Chicken Chow Mein', description: 'Crispy noodles stir-fried with chicken and vegetables', price: 11.95 },
      { id: 3, name: 'Shrimp Chow Mein', description: 'Crispy noodles stir-fried with shrimp and vegetables', price: 12.95 },
    ],
  },
  {
    id: 13,
    name: 'Lunch Specials',
    items: [
      { id: 1, name: 'Lunch Hibachi Chicken', description: 'Hibachi chicken with fried rice and vegetables (Tue–Fri 11AM–3PM)', price: 11.95 },
      { id: 2, name: 'Lunch Hibachi Shrimp', description: 'Hibachi shrimp with fried rice and vegetables (Tue–Fri 11AM–3PM)', price: 12.95 },
      { id: 3, name: 'Lunch Sushi Combo', description: '8 pcs assorted sushi rolls with miso soup (Tue–Fri 11AM–3PM)', price: 12.95 },
      { id: 4, name: 'Lunch Bento Box', description: 'Choice of entree with rice, egg roll, and salad (Tue–Fri 11AM–3PM)', price: 10.95 },
    ],
  },
  {
    id: 14,
    name: 'Drinks',
    items: [
      { id: 1, name: 'Soda', description: 'Pepsi, Diet Pepsi, Sierra Mist, Dr. Pepper', price: 2.50 },
      { id: 2, name: 'Green Tea', description: 'Hot or iced', price: 2.95 },
      { id: 3, name: 'Miso Soup', description: 'Traditional Japanese miso soup', price: 2.50 },
      { id: 4, name: 'Sake (Small)', description: 'Hot or cold', price: 6.95 },
      { id: 5, name: 'Plum Wine', description: 'Sweet Japanese plum wine', price: 6.95 },
    ],
  },
];
