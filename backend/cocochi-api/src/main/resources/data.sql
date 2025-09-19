DELETE FROM menu_items;

INSERT INTO menu_items (category, item_name, price) VALUES 
-- Appetizers
('appetizers', 'Egg Roll (1)', 2.95),
('appetizers', 'Japanese Spring Roll (2)', 4.65),
('appetizers', 'Edamame', 5.25),
('appetizers', 'Gyoza (6)', 6.95),
('appetizers', 'Fried Chinese Dumpling (8)', 7.95),
('appetizers', 'Shumai', 6.65),
('appetizers', 'Crab Rangoon (8)', 7.50),
('appetizers', 'Shrimp Tempura', 9.95),
('appetizers', 'Teriyaki Beef Stick', 7.75),
('appetizers', 'Chicken Finger', 6.95),
('appetizers', 'French Fries', 5.50),
('appetizers', 'Japanese Donut', 6.00),
('appetizers', 'Tuna Tataki', 9.95),
('appetizers', 'Pepper Tuna', 10.95),
('appetizers', 'Tuna Pizza', 10.95),
('appetizers', 'Salmon Pizza', 10.95),

-- Soup or Salad
('soup-salad', 'Wonton Soup', 4.25),
('soup-salad', 'Hot & Sour Soup', 4.75),
('soup-salad', 'Onion Soup', 4.00),
('soup-salad', 'Miso Soup', 4.00),
('soup-salad', 'House Salad', 4.50),
('soup-salad', 'Kani Salad', 6.75),
('soup-salad', 'Seaweed Salad', 6.25),

-- Yaki Soba
('yaki-soba', 'Vegetable Yaki Soba', 10.45),
('yaki-soba', 'Chicken Yaki Soba', 11.45),
('yaki-soba', 'Beef Yaki Soba', 11.65),
('yaki-soba', 'Shrimp Yaki Soba', 11.65),
('yaki-soba', 'Hibachi Yaki Soba', 10.00),
('yaki-soba', 'Pork Yaki Soba', 11.45),

-- Fried Rice
('fried-rice', 'Vegetable Fried Rice', 9.45),
('fried-rice', 'Chicken Fried Rice', 10.45),
('fried-rice', 'Beef Fried Rice', 11.45),
('fried-rice', 'Shrimp Fried Rice', 11.45),
('fried-rice', 'Hibachi Fried Rice', 9.00),
('fried-rice', 'Pork Fried Rice', 11.45),

-- Kitchen Special
('kitchen-special', 'General Tso''s Chicken', 15.25),
('kitchen-special', 'Sesame Chicken', 15.25),
('kitchen-special', 'Orange Chicken', 15.25),
('kitchen-special', 'Mei Fun Noodle', 9.75),

-- Hibachi Dinner
('hibachi', 'Hibachi Vegetable', 12.45),
('hibachi', 'Hibachi Chicken', 13.45),
('hibachi', 'Hibachi Scallops', 16.45),
('hibachi', 'Hibachi Salmon', 16.45),
('hibachi', 'Hibachi Jumbo Shrimp', 15.45),
('hibachi', 'Hibachi New York Strip Steak', 16.45),
('hibachi', 'Hibachi Filet Mignon', 18.45),
('hibachi', 'Hibachi Chicken & Shrimp', 16.75),
('hibachi', 'Hibachi New York Steak & Chicken', 17.45),
('hibachi', 'Hibachi Scallops & Shrimp', 17.45),
('hibachi', 'Hibachi Filet Mignon & Shrimp', 18.45),
('hibachi', 'Hibachi New York Strip & Shrimp', 17.45),
('hibachi', 'Hibachi Salmon & Chicken', 16.45),
('hibachi', 'Hibachi Salmon & Shrimp', 17.45),
('hibachi', 'Hibachi Salmon & Scallops', 17.45),
('hibachi', 'Hibachi Filet Mignon & Chicken', 18.45),

-- Sushi or Sashimi A La Carte
('sushi-sashimi', 'Maguro', 6.00),
('sushi-sashimi', 'Sake', 6.00),
('sushi-sashimi', 'Ebi', 5.50),
('sushi-sashimi', 'Tako', 5.50),
('sushi-sashimi', 'Hamachi', 6.00),
('sushi-sashimi', 'Smoked Salmon', 5.50),
('sushi-sashimi', 'Unagi', 6.00),
('sushi-sashimi', 'Saba', 4.50),

-- Sushi Rolls or Hand Roll
('sushi-rolls', 'Cucumber', 4.55),
('sushi-rolls', 'Sweet Potato', 5.55),
('sushi-rolls', 'Avocado', 4.55),
('sushi-rolls', 'Vegetable', 5.55),
('sushi-rolls', 'California', 6.25),
('sushi-rolls', 'Salmon', 5.95),
('sushi-rolls', 'Spicy Salmon', 6.75),
('sushi-rolls', 'Spicy Tuna', 6.75),
('sushi-rolls', 'Tuna', 5.95),
('sushi-rolls', 'Philadelphia', 6.75),
('sushi-rolls', 'Eel Avocado', 6.50),
('sushi-rolls', 'Eel Cucumber', 6.50),
('sushi-rolls', 'Shrimp Tempura', 7.55),
('sushi-rolls', 'Boston', 6.25),
('sushi-rolls', 'Alaskan', 6.25),
('sushi-rolls', 'Shrimp Avocado', 6.25),

-- Sushi Bar Special Entrée
('sushi-bar-entree', 'Sushi Regular', 17.00),
('sushi-bar-entree', 'Sushi Deluxe', 20.50),
('sushi-bar-entree', 'Sashimi Regular', 20.50),
('sushi-bar-entree', 'Sashimi Deluxe', 22.50),
('sushi-bar-entree', 'Sushi & Sashimi Combo', 27.00),

-- Special Sushi Roll
('special-rolls', 'Spicy Girl Roll', 12.45),
('special-rolls', 'Rainbow Roll', 11.75),
('special-rolls', 'Cocochi Roll', 12.45),
('special-rolls', 'Volcano Roll', 12.45),
('special-rolls', 'Pink Lady Roll', 14.45),
('special-rolls', 'Lion King Roll (8 pcs)', 12.45),
('special-rolls', 'Edison Roll', 13.45),
('special-rolls', 'Dragon Roll', 13.45),
('special-rolls', 'Red Head Roll', 13.45),
('special-rolls', 'Rock''s Shrimp Roll', 13.45),
('special-rolls', 'Magic Castle Roll', 14.45),
('special-rolls', 'Sexy on the Beach Roll', 14.45),
('special-rolls', 'Spider Roll', 10.05),
('special-rolls', 'Super Spider Roll', 15.05),
('special-rolls', 'Feeding Hills Roll', 14.45),
('special-rolls', 'Fantastic Roll', 13.45),

-- All Day Bento Special
('bento', 'Chicken Bento', 10.25),
('bento', 'Steak Bento', 11.25),
('bento', 'Shrimp Bento', 11.25),
('bento', 'Shrimp Tempura Bento', 11.25),
('bento', 'Chicken Tempura Bento', 10.25),
('bento', 'Salmon Bento', 11.15),
('bento', 'Sushi Bento', 11.25),

-- Happy Meal
('happy-meal', 'Hibachi Chicken Happy Meal', 7.85),
('happy-meal', 'Hibachi Steak Happy Meal', 8.85),
('happy-meal', 'Hibachi Shrimp Happy Meal', 8.85),

-- Sushi Roll Lunch Special
('lunch-specials', 'Any Two Roll', 10.95),
('lunch-specials', 'Any Three Roll', 14.95),
('lunch-specials', 'Hibachi Vegetable', 9.25),
('lunch-specials', 'Hibachi Chicken', 10.25),
('lunch-specials', 'General Tso''s Chicken', 10.25),
('lunch-specials', 'Hibachi Salmon', 11.25),
('lunch-specials', 'Hibachi Jumbo Shrimp', 11.25),
('lunch-specials', 'Hibachi New York Strip Steak', 11.25),
('lunch-specials', 'Hibachi Filet Mignon', 12.25),
('lunch-specials', 'Hibachi Chicken & Shrimp', 12.25),
('lunch-specials', 'Hibachi Steak & Chicken', 12.25),
('lunch-specials', 'Hibachi Steak & Shrimp', 12.25),

-- Desserts
('desserts', 'Ice Cream Tempura', 3.99),
('desserts', 'Fried Cheese Cake', 3.99);