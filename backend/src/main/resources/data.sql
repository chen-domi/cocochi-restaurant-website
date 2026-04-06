INSERT INTO menu_categories (id, name) VALUES
  (1,  'Appetizers'),
  (2,  'Sushi Rolls'),
  (3,  'Nigiri'),
  (4,  'Sashimi'),
  (5,  'Hibachi Dinners'),
  (6,  'Hibachi Fried Rice'),
  (7,  'Noodle Dishes'),
  (8,  'Wonton Soup'),
  (9,  'Hot & Sour Soup'),
  (10, 'Egg Fried Rice'),
  (11, 'Lo Mein'),
  (12, 'Chow Mein'),
  (13, 'Lunch Specials'),
  (14, 'Drinks');

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (1,  'Spring Rolls (2)',    'Crispy vegetable spring rolls with sweet chili sauce', 4.95, 1),
  (2,  'Gyoza (6)',           'Pan-fried pork and vegetable dumplings',               6.95, 1),
  (3,  'Edamame',             'Steamed salted soybeans',                              4.50, 1),
  (4,  'Crab Rangoon (6)',    'Crispy wonton filled with cream cheese and crab',      6.50, 1),
  (5,  'Shrimp Tempura (5)', 'Lightly battered shrimp with tempura dipping sauce',   7.95, 1);

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (6,  'California Roll',   'Crab, avocado, cucumber',                                       9.95,  2),
  (7,  'Spicy Tuna Roll',   'Spicy tuna, cucumber, sriracha mayo',                           11.95, 2),
  (8,  'Dragon Roll',       'Shrimp tempura topped with avocado and eel sauce',              14.95, 2),
  (9,  'Rainbow Roll',      'California roll topped with assorted sashimi',                  15.95, 2),
  (10, 'Volcano Roll',      'Spicy salmon, cucumber, topped with baked seafood mix',         13.95, 2),
  (11, 'Philadelphia Roll', 'Salmon, cream cheese, cucumber',                                11.95, 2);

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (12, 'Salmon Nigiri (2)',     'Fresh salmon over seasoned rice',                6.50, 3),
  (13, 'Tuna Nigiri (2)',       'Fresh tuna over seasoned rice',                  7.50, 3),
  (14, 'Shrimp Nigiri (2)',     'Cooked shrimp over seasoned rice',               6.00, 3),
  (15, 'Yellowtail Nigiri (2)', 'Fresh yellowtail over seasoned rice',            7.00, 3),
  (16, 'Eel Nigiri (2)',        'Grilled eel over seasoned rice with eel sauce',  7.50, 3);

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (17, 'Salmon Sashimi (5 pcs)',     'Fresh sliced salmon',                         12.95, 4),
  (18, 'Tuna Sashimi (5 pcs)',       'Fresh sliced tuna',                           14.95, 4),
  (19, 'Yellowtail Sashimi (5 pcs)', 'Fresh sliced yellowtail',                     13.95, 4),
  (20, 'Sashimi Deluxe (15 pcs)',    'Chef''s selection of the freshest catch',     28.95, 4);

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (21, 'Hibachi Chicken', 'Grilled chicken with fried rice, vegetables, and soup or salad',        16.95, 5),
  (22, 'Hibachi Steak',   'Grilled sirloin with fried rice, vegetables, and soup or salad',         21.95, 5),
  (23, 'Hibachi Shrimp',  'Grilled shrimp with fried rice, vegetables, and soup or salad',          18.95, 5),
  (24, 'Hibachi Salmon',  'Grilled salmon with fried rice, vegetables, and soup or salad',          20.95, 5),
  (25, 'Hibachi Combo',   'Choice of two proteins with fried rice, vegetables, and soup or salad', 23.95, 5);

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (26, 'Chicken Fried Rice',   'Hibachi-style fried rice with chicken, egg, and vegetables',       11.95, 6),
  (27, 'Shrimp Fried Rice',    'Hibachi-style fried rice with shrimp, egg, and vegetables',        12.95, 6),
  (28, 'Vegetable Fried Rice', 'Hibachi-style fried rice with mixed vegetables and egg',            9.95, 6),
  (29, 'Steak Fried Rice',     'Hibachi-style fried rice with sirloin, egg, and vegetables',       13.95, 6);

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (30, 'Pad Thai',         'Stir-fried rice noodles with egg, bean sprouts, and peanuts',                     13.95, 7),
  (31, 'Yaki Udon',        'Stir-fried thick udon noodles with vegetables and your choice of protein',        13.95, 7),
  (32, 'Beef Noodle Soup', 'Rich broth with tender beef slices and rice noodles',                             12.95, 7);

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (33, 'Wonton Soup (Small)', 'Pork wontons in a savory clear broth',   4.95, 8),
  (34, 'Wonton Soup (Large)', 'Pork wontons in a savory clear broth',   7.95, 8),
  (35, 'Shrimp Wonton Soup',  'Shrimp wontons in a savory clear broth', 8.95, 8);

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (36, 'Hot & Sour Soup (Small)', 'Spicy and tangy soup with tofu, mushrooms, and egg', 4.95, 9),
  (37, 'Hot & Sour Soup (Large)', 'Spicy and tangy soup with tofu, mushrooms, and egg', 7.95, 9);

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (38, 'Plain Egg Fried Rice',     'Wok-fried rice with egg and scallions',          8.95,  10),
  (39, 'Chicken Egg Fried Rice',   'Wok-fried rice with chicken and egg',            10.95, 10),
  (40, 'Shrimp Egg Fried Rice',    'Wok-fried rice with shrimp and egg',             11.95, 10),
  (41, 'House Special Fried Rice', 'Wok-fried rice with chicken, shrimp, and pork', 12.95, 10);

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (42, 'Vegetable Lo Mein',    'Soft egg noodles stir-fried with mixed vegetables',        9.95,  11),
  (43, 'Chicken Lo Mein',      'Soft egg noodles stir-fried with chicken and vegetables',  11.95, 11),
  (44, 'Shrimp Lo Mein',       'Soft egg noodles stir-fried with shrimp and vegetables',   12.95, 11),
  (45, 'House Special Lo Mein','Soft egg noodles with chicken, shrimp, and pork',          13.95, 11);

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (46, 'Vegetable Chow Mein', 'Crispy noodles stir-fried with mixed vegetables',        9.95,  12),
  (47, 'Chicken Chow Mein',   'Crispy noodles stir-fried with chicken and vegetables',  11.95, 12),
  (48, 'Shrimp Chow Mein',    'Crispy noodles stir-fried with shrimp and vegetables',   12.95, 12);

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (49, 'Lunch Hibachi Chicken', 'Hibachi chicken with fried rice and vegetables (Tue-Fri 11AM-3PM)',    11.95, 13),
  (50, 'Lunch Hibachi Shrimp',  'Hibachi shrimp with fried rice and vegetables (Tue-Fri 11AM-3PM)',     12.95, 13),
  (51, 'Lunch Sushi Combo',     '8 pcs assorted sushi rolls with miso soup (Tue-Fri 11AM-3PM)',         12.95, 13),
  (52, 'Lunch Bento Box',       'Choice of entree with rice, egg roll, and salad (Tue-Fri 11AM-3PM)',   10.95, 13);

INSERT INTO menu_items (id, name, description, price, category_id) VALUES
  (53, 'Soda',         'Pepsi, Diet Pepsi, Sierra Mist, Dr. Pepper', 2.50, 14),
  (54, 'Green Tea',    'Hot or iced',                                  2.95, 14),
  (55, 'Miso Soup',    'Traditional Japanese miso soup',               2.50, 14),
  (56, 'Sake (Small)', 'Hot or cold',                                  6.95, 14),
  (57, 'Plum Wine',    'Sweet Japanese plum wine',                     6.95, 14);
