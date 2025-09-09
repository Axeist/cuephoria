import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Zap, Coffee, Gamepad2, Sparkles, Eye, EyeOff, Play, Pause, Monitor, Smartphone, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEOMetadata from '../components/SEOMetadata';
import Footer from '../components/Footer';

const CafeMenu = () => {
  const navigate = useNavigate();
  const [tvMode, setTvMode] = useState(false);
  const [showPinInput, setShowPinInput] = useState(false);
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Enhanced Menu Data with detailed descriptions
  const menuData = {
    savorySnacks: [
      {
        name: "Crispy Potato Waves",
        original: "French Fries (7mm)",
        originalPrice: 180,
        price: 120,
        periPeriOriginalPrice: 200,
        periPeriPrice: 140,
        description: "Golden crispy potato fries cut to perfect 7mm thickness with a fluffy inside and crunchy outside. Perfectly salted for a classic taste, and available with a spicy Peri Peri seasoning that adds a fiery kick with authentic Portuguese spice blend. Served hot and fresh, these fries are the perfect gaming fuel.",
        icon: "🍟",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Happy Faces",
        original: "Smiley Fries",
        originalPrice: 150,
        price: 100,
        description: "Delightfully crispy potato smileys that are guaranteed to brighten your mood and gaming session. These bite-sized golden treats come with a satisfying crunch and mild seasoning that's perfect for all ages. Each piece is shaped like a cheerful smile, making them Instagram-worthy and delicious.",
        icon: "😊",
        image: "https://images.unsplash.com/photo-1541592106381-b31e8e095584?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Onion Tornado Rings",
        original: "Onion Rings (Medium)",
        originalPrice: 160,
        price: 110,
        schezwanOriginalPrice: 180,
        schezwanPrice: 125,
        description: "Crispy, golden-battered onion rings made from fresh medium-sized onions, served piping hot with a perfect crunch. Choose between the classic standard seasoning for a mild flavor or enjoy our signature Schezwan twist that adds layers of tangy and spicy notes for an extra flavor adventure.",
        icon: "🧅",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Garlic Fire Pops",
        original: "Chilli Garlic Pops",
        originalPrice: 200,
        price: 140,
        description: "Crunchy and intensely flavorful chicken pops infused with fresh garlic and a perfect hint of chili that creates an ideal balance of heat and aromatic satisfaction. These bite-sized pieces are marinated with special spices and cooked to perfection - ideal for spice lovers who want both flavor and fire.",
        icon: "🔥",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Golden Veg Bites",
        original: "Veg Nuggets",
        originalPrice: 150,
        price: 100,
        description: "A delicious medley of fresh vegetables formed into perfectly golden nuggets with a crispy exterior and tender interior. Made with a blend of seasonal vegetables and served with creamy dip options including mayo duo that perfectly complements their savory and wholesome flavor profile.",
        icon: "🥬",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Jalapeño Cheese Poppers",
        original: "Jalapeño Cheese Pops",
        originalPrice: 200,
        price: 140,
        description: "Fresh jalapeño peppers stuffed with creamy cheese filling, coated in a crispy golden batter and fried to perfection. Each bite delivers a burst of fiery creaminess that balances the heat of jalapeños with the cooling effect of melted cheese - a perfect harmony of flavors.",
        icon: "🌶️",
        image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Popcorn Chicken",
        original: "Chicken Bites (Popcorn)",
        originalPrice: 220,
        price: 160,
        description: "Tiny, tender chicken pieces marinated in special spices and coated with a light, crispy batter that pops with flavor in every bite. These golden morsels are incredibly light, crunchy, and absolutely addictive - perfect for continuous munching during long gaming sessions without feeling heavy.",
        icon: "🍿",
        image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Golden Chicken Nuggets",
        original: "Chicken Nuggets",
        originalPrice: 200,
        price: 140,
        description: "Classic chicken nuggets made from tender chicken breast pieces, coated in seasoned breadcrumbs and fried to golden perfection. Soft and juicy inside with a satisfying crispy exterior, served with your choice of ketchup, mayo, or spicy Peri Peri sauce for the ultimate dipping experience.",
        icon: "🍗",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    momosRolls: [
      {
        name: "Veggie Momos",
        original: "Veg Momos (Fried)",
        originalPrice: 160,
        price: 110,
        quantity: "5 pieces",
        description: "Traditional vegetable momos filled with a flavorful mix of fresh cabbage, carrots, onions, and aromatic spices, then fried to achieve a perfect golden crispy exterior while maintaining a juicy, flavorful interior. Served with our signature tangy Schezwan sauce that adds the perfect spicy kick to complement the vegetables.",
        icon: "🥟",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Paneer Twist Momos",
        original: "Paneer Momos",
        originalPrice: 180,
        price: 130,
        quantity: "5 pieces",
        description: "Soft, handcrafted momos stuffed with fresh cottage cheese (paneer) marinated in Indian spices and herbs, creating a delightful fusion of traditional momo-making with authentic Indian flavors. Each piece bursts with creamy paneer goodness and is served with our special Schezwan dip for an extra punch of flavor.",
        icon: "🧀",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Cheese Burst Momos",
        original: "Cheese Corn Momos",
        originalPrice: 170,
        price: 120,
        quantity: "5 pieces",
        description: "Innovative momos filled with a delicious combination of sweet corn kernels and molten cheese that creates an explosion of flavors in every bite. The crispy momo shell encases the creamy, cheesy corn filling that stretches beautifully when bitten. Served with mayo duo sauce for a creamy complement to the rich filling.",
        icon: "🌽",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Classic Chicken Momos",
        original: "Chicken Momos",
        originalPrice: 180,
        price: 130,
        quantity: "5 pieces",
        description: "Authentic chicken momos made with tender minced chicken marinated in traditional Tibetan spices and wrapped in thin, soft dough. These steamed-then-fried momos offer the perfect balance of juicy chicken filling and crispy exterior. Served hot with your choice of spicy Schezwan sauce or creamy mayo duo for the perfect desi street food experience.",
        icon: "🍖",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Fiery Schezwan Momos",
        original: "Chicken Schezwan Momos",
        originalPrice: 200,
        price: 140,
        quantity: "5 pieces",
        description: "For those who love heat! These special momos are stuffed with tender chicken that's pre-marinated in authentic Schezwan sauce, creating a double dose of spiciness. The filling itself is infused with Schezwan flavors, and they're served with extra Schezwan sauce on the side. Perfect for spice enthusiasts who can handle the intense heat and bold flavors.",
        icon: "🔥",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Cheesy Chicken Momos",
        original: "Chicken Cheese Momos",
        originalPrice: 220,
        price: 150,
        quantity: "5 pieces",
        description: "The ultimate fusion momo experience combining succulent chicken pieces with gooey melted cheese in every bite. The chicken is marinated with herbs and spices, then combined with premium cheese that melts beautifully when cooked. These indulgent momos offer a rich, creamy texture with savory chicken flavors, served with mayo duo for extra creaminess.",
        icon: "🧀",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Tikka Thunder Momos",
        original: "Chicken Tikka Momos",
        originalPrice: 200,
        price: 140,
        quantity: "5 pieces",
        description: "A unique Indian-Chinese fusion featuring chicken tikka pieces as the filling, marinated in yogurt and traditional tandoor spices for that authentic smoky flavor. These momos bring together the best of Indian tikka preparation with Chinese momo techniques, creating a smoky, spicy, and absolutely sensational taste experience served with Schezwan sauce.",
        icon: "🍖",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Veggie Roll-Up",
        original: "Veg Roll (Patty)",
        originalPrice: 130,
        price: 90,
        quantity: "1 roll",
        description: "A wholesome vegetable roll featuring a crispy vegetable patty wrapped in soft, fresh roti with crunchy lettuce, onions, and creamy mayo duo sauce. This portable snack is perfect for on-the-go gaming sessions, offering a satisfying combination of textures and flavors that won't weigh you down during intense gameplay.",
        icon: "🌯",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Peri Peri Veggie Roll-Up",
        original: "Veg Roll + Peri Peri",
        originalPrice: 150,
        price: 105,
        quantity: "1 roll",
        description: "An elevated version of our classic veggie roll, featuring the same crispy vegetable patty but with an added kick of authentic Peri Peri seasoning that transforms the entire flavor profile. The Portuguese-inspired spice blend adds heat and complexity, making this roll perfect for those who want their vegetables with some serious attitude.",
        icon: "🌯",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Paneer Wrap Delight",
        original: "Paneer Roll (Veg)",
        originalPrice: 160,
        price: 120,
        quantity: "1 roll",
        description: "Tender, marinated paneer cubes grilled to perfection and wrapped in soft roti with fresh vegetables and creamy mayo duo sauce. The paneer is seasoned with aromatic Indian spices that complement its natural creamy texture, creating a satisfying and protein-rich wrap that's both filling and flavorful for vegetarian gamers.",
        icon: "🧀",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    beverages: [
      {
        name: "Blue Lagoon Lemonade",
        syrup: "Blue Curacao",
        originalPrice: 180,
        price: 129,
        description: "A visually stunning blue-colored lemonade that's as refreshing as it is Instagram-worthy. Made with premium Blue Curacao syrup, fresh lemon juice, and sparkling soda water, this drink delivers a perfect balance of citrusy tang and sweet refreshment. The vibrant blue color comes from natural food coloring, making it the perfect companion for your gaming sessions.",
        icon: "🌊",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Classic Virgin Mojito",
        syrup: "Mojito",
        originalPrice: 170,
        price: 119,
        description: "The ultimate refreshing drink featuring fresh mint leaves muddled to release their essential oils, combined with zesty lime juice, mojito syrup, and topped with sparkling soda water. This alcohol-free version of the classic Cuban cocktail provides the perfect cooling effect and invigorating taste that helps you stay refreshed during intense gaming marathons.",
        icon: "🌿",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Mango Mint Mojito",
        syrup: "Mango",
        originalPrice: 190,
        price: 139,
        description: "A tropical twist on the classic mojito, combining the sweetness of ripe mango syrup with the cooling freshness of mint leaves and lime. This fusion drink captures summer vibes all year round, offering a sweet-tangy flavor profile that's both refreshing and energizing. Perfect for when you want something fruity yet refreshing during your gaming sessions.",
        icon: "🥭",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Orange Mojito",
        syrup: "Orange",
        originalPrice: 180,
        price: 129,
        description: "A citrus lover's dream combining the zesty brightness of orange syrup with fresh mint leaves and lime juice, topped with sparkling soda. This vibrant orange-colored drink offers a perfect balance of sweet citrus flavors and refreshing mint, creating a drink that's both energizing and cooling - ideal for maintaining focus during competitive gaming.",
        icon: "🍊",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Electric Blue Spritz",
        syrup: "Blue Curacao",
        originalPrice: 190,
        price: 139,
        description: "An electrifying drink that lives up to its name with shocking blue color and an even more shocking taste experience. Made with Blue Curacao syrup, fresh lemon juice, and a special soda blend that creates a unique fizzy sensation. This tangy and electrifying beverage provides the perfect energy boost with its vibrant appearance and invigorating taste.",
        icon: "⚡",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Mango Mule",
        syrup: "Mango",
        originalPrice: 200,
        price: 149,
        description: "A tropical interpretation of the classic mule, featuring rich mango syrup combined with fresh lime juice and spicy ginger ale that creates a perfect sweet-spicy balance. The natural sweetness of mango pairs beautifully with the warming kick of ginger, creating a sophisticated drink that's both refreshing and energizing for extended gaming sessions.",
        icon: "🍹",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Sunrise Orange Cooler",
        syrup: "Orange",
        originalPrice: 180,
        price: 129,
        description: "Inspired by beautiful sunrise colors, this refreshing orange cooler combines premium orange syrup with soda water and a hint of lemon for added zestiness. The drink's gradient appearance mimics a sunrise, while its refreshing and energizing taste helps you start or continue your gaming sessions with renewed vigor and a cool, satisfied feeling.",
        icon: "🌅",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    combos: [
      {
        name: "Duo Delight Lite",
        includes: "Crispy Potato Waves + Classic Virgin Mojito",
        suitableFor: "2 people",
        originalPrice: 299,
        discountedPrice: 239,
        hasMocktail: true,
        description: "Perfect for couples or close friends who want to share a light yet satisfying snack experience. This combo pairs our signature golden crispy potato fries with a refreshing Virgin Mojito that perfectly balances the saltiness of the fries with its cool, minty freshness. The combination offers complementary flavors and textures - crispy meets refreshing, salty meets sweet. With this combo, you save ₹60 compared to ordering individually, making it an excellent value for a casual gaming session for two.",
        icon: "👥",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Momo Mania Lite",
        includes: "Schezwan Veg Momos + Blue Lagoon Lemonade",
        suitableFor: "2 people",
        originalPrice: 299,
        discountedPrice: 239,
        hasMocktail: true,
        description: "Designed for momo lovers who appreciate the perfect pairing of spicy and refreshing flavors. This combo features our popular fried vegetable momos with their crispy exterior and flavorful vegetable filling, served with tangy Schezwan sauce, alongside our visually stunning Blue Lagoon Lemonade. The cool, citrusy drink provides the perfect cooling contrast to the spicy momos, while the vibrant blue color makes for great social media content. Save ₹60 with this combo that's perfect for sharing between two people during a casual gaming session.",
        icon: "🥟",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Snack Attack Duo",
        includes: "Chicken Nuggets + Garlic Fire Pops",
        suitableFor: "2 people",
        originalPrice: 340,
        discountedPrice: 259,
        hasMocktail: false,
        description: "A protein-packed combo for serious snackers who want variety and substance in their gaming fuel. This combination brings together our classic Golden Chicken Nuggets with their crispy exterior and tender interior, alongside our intensely flavorful Garlic Fire Pops that pack a spicy punch. The contrast between the mild, familiar taste of nuggets and the bold, garlicky heat of the pops creates an exciting flavor journey. Perfect for two people who want to try different textures and spice levels, with a total savings of ₹81 compared to individual ordering.",
        icon: "🍗",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Roller's Duo",
        includes: "Paneer Wrap + Veggie Roll",
        suitableFor: "2 people",
        originalPrice: 240,
        discountedPrice: 219,
        hasMocktail: false,
        description: "A wholesome vegetarian combo that combines two different wrap experiences for variety-loving vegetarians. The Paneer Wrap Delight features marinated cottage cheese with Indian spices, while the Veggie Roll-Up offers a crispy vegetable patty experience. Both are served with fresh vegetables and creamy sauces, providing different textures and flavors in portable, easy-to-eat formats. This combo is perfect for two people who want filling, satisfying food that won't interfere with their gaming performance, saving ₹21 in the process.",
        icon: "🌯",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Mock & Munch Duo",
        includes: "Cheese Burst Momos + Mango Mint Mojito",
        suitableFor: "2 people",
        originalPrice: 309,
        discountedPrice: 259,
        hasMocktail: true,
        description: "An indulgent combination that pairs rich, cheesy flavors with tropical refreshment. The Cheese Burst Momos offer a delightful cheese-corn filling that stretches beautifully with each bite, while the Mango Mint Mojito provides a sweet-tropical cooling effect with its mango sweetness balanced by fresh mint. This combo is designed for those who enjoy rich, comfort food flavors balanced with refreshing beverages. The pairing works especially well as the creamy cheese and sweet mango complement each other, saving you ₹50 compared to individual ordering.",
        icon: "🧀",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Quad Feast Value",
        includes: "Peri Peri Potato Blast + Jalapeño Cheese Poppers + Mango Mint Mojito (4 servings)",
        suitableFor: "4 people",
        originalPrice: 599,
        discountedPrice: 479,
        hasMocktail: true,
        description: "A premium group sharing experience designed for squads who want variety, quality, and excellent value. This feast includes our spicy Peri Peri Potato Waves that bring Portuguese fire to classic fries, complemented by Jalapeño Cheese Poppers that offer creamy relief with their molten cheese centers. Four servings of our tropical Mango Mint Mojito ensure everyone stays refreshed while enjoying the spicy snacks. The combination creates a perfect balance of heat, creaminess, and cooling refreshment. This combo is ideal for group gaming sessions, birthday celebrations, or tournament viewing parties, offering massive savings of ₹120 compared to individual orders.",
        icon: "👨‍👩‍👧‍👦",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Lazy Gamers Quad",
        includes: "Chicken Momos + Happy Faces",
        suitableFor: "4 people",
        originalPrice: 509,
        discountedPrice: 439,
        hasMocktail: false,
        description: "Perfect for extended gaming sessions where you want satisfying food that's easy to eat without taking attention away from the game. This combo combines our Classic Chicken Momos with their juicy filling and crispy exterior, alongside cheerful Happy Face smiley fries that are perfectly sized for continuous munching. Both items are designed for easy one-handed eating, making them ideal for gamers who don't want to pause their gameplay. The variety ensures no one gets bored, while the substantial quantity keeps everyone satisfied throughout long gaming marathons. Save ₹70 with this strategically designed combo for serious gamers.",
        icon: "🎮",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Family Snack Pack",
        includes: "Onion Rings + Jalapeño Poppers + Fries",
        suitableFor: "4 people",
        originalPrice: 570,
        discountedPrice: 479,
        hasMocktail: false,
        description: "A comprehensive snack spread that offers three different crispy textures and flavor profiles for family groups or friend circles with varying taste preferences. The combo includes our golden Onion Tornado Rings with their sweet onion interior, spicy Jalapeño Cheese Poppers that deliver heat and creaminess, and classic Crispy Potato Waves for those who prefer familiar flavors. This variety pack ensures everyone finds something they love while providing enough quantity to satisfy a group of four. The different textures and flavors create an engaging snacking experience that pairs perfectly with group gaming or movie watching, saving ₹91 compared to individual purchases.",
        icon: "👨‍👩‍👧‍👦",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Game On Combo",
        includes: "Chicken Nuggets + Schezwan Momos + Orange Cooler (4 servings)",
        suitableFor: "4 people",
        originalPrice: 609,
        discountedPrice: 489,
        hasMocktail: true,
        description: "The ultimate gaming fuel combo designed specifically for competitive gamers and tournament participants. This power-packed combination features our classic Golden Chicken Nuggets that provide familiar comfort food satisfaction, paired with fiery Schezwan Momos that deliver an exciting spicy kick to keep energy levels high. Four servings of refreshing Orange Cooler ensure everyone stays hydrated and alert during intense gaming sessions. The protein from chicken helps maintain sustained energy, while the spicy momos provide excitement and the citrus drinks offer mental clarity. This combo is scientifically designed for peak gaming performance, offering incredible value with ₹120 in savings while fueling your team to victory.",
        icon: "🎮",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Basic Snack Quad",
        includes: "Happy Faces + Onion Rings + Veg Nuggets",
        suitableFor: "4 people",
        originalPrice: 480,
        discountedPrice: 439,
        hasMocktail: false,
        description: "An economical yet satisfying combo that provides three different vegetarian snacking experiences without overwhelming flavors or excessive spice. This combination includes cheerful Happy Face smiley fries for fun, crispy Onion Tornado Rings for a mild onion flavor, and Golden Veg Bites for a wholesome vegetable experience. All items are prepared with standard seasoning, making this combo perfect for groups with sensitive palates, younger gamers, or anyone who prefers milder flavors. Despite being budget-friendly, this combo doesn't compromise on quality or quantity, providing substantial snacking for four people while saving ₹41 compared to individual ordering.",
        icon: "👥",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Friends' Momo Box",
        includes: "Schezwan Chicken Momos + Paneer Momos + Tikka Thunder Momos",
        suitableFor: "5 people",
        originalPrice: 600,
        discountedPrice: 479,
        hasMocktail: false,
        description: "A momo enthusiast's dream featuring three premium momo varieties that showcase different flavor profiles and preparation styles. This extensive combo includes our Fiery Schezwan Momos with their double-dose of spicy sauce, Paneer Twist Momos that bring Indian cottage cheese flavors, and our signature Tikka Thunder Momos with their smoky tandoor-inspired taste. With 15 pieces total (5 of each variety), this combo ensures everyone gets to try all three unique flavors while having enough quantity for a group of five. Perfect for momo lovers who want variety and those looking to explore different fusion flavors, offering substantial savings of ₹121 compared to individual orders.",
        icon: "🥟",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Group Chill Pack",
        includes: "Garlic Pops + Popcorn Chicken + Sunrise Cooler (5 servings)",
        suitableFor: "5 people",
        originalPrice: 685,
        discountedPrice: 479,
        hasMocktail: true,
        description: "The ultimate relaxation combo for larger groups who want to chill out with great food and drinks while gaming or socializing. This premium package combines our intensely flavorful Garlic Fire Pops with their perfect garlic-chili balance, alongside addictive Popcorn Chicken pieces that are impossible to stop eating once you start. Five servings of our beautiful Sunrise Orange Cooler ensure everyone stays refreshed while enjoying the bold flavors. The combination is designed for extended social gaming sessions, providing both bold flavors to keep things exciting and cooling beverages to balance the intensity. This combo offers exceptional value with massive savings of ₹206, making it perfect for celebrations, tournaments, or group hangout sessions.",
        icon: "👥",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Big Game Snack Box Lite",
        includes: "Fries + Nuggets + Mocktail Sampler (8 mixed servings)",
        suitableFor: "8 people",
        originalPrice: 799,
        discountedPrice: 499,
        hasMocktail: true,
        description: "The ultimate party combo designed for large groups, tournaments, birthday parties, or major gaming events. This comprehensive package includes generous portions of our classic Crispy Potato Waves and Golden Chicken Nuggets, ensuring familiar favorites that appeal to all taste preferences. The mocktail sampler provides 8 mixed servings of our most popular beverages, allowing everyone to try different flavors including Blue Lagoon Lemonade, Virgin Mojito, and Orange Cooler varieties. This combo is strategically designed to feed a crowd without breaking the budget, perfect for esports tournaments, birthday celebrations, or any large gathering. With incredible savings of ₹300 compared to individual ordering, this combo proves that group gaming can be both delicious and economical.",
        icon: "🎉",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ]
  };

  // All slides for TV mode carousel
  const allSlides = [
    { type: 'category', title: '🍽️ Savory Snacks & Seasoning Impact', items: menuData.savorySnacks },
    { type: 'category', title: '🥟 Momos & Rolls', items: menuData.momosRolls },
    { type: 'category', title: '🍹 Syrup-Based Beverages', items: menuData.beverages },
    { type: 'category', title: '🎉 Combos (10% Discount Applied)', items: menuData.combos }
  ];

  // Slower TV Mode Auto-play (10 seconds per slide)
  useEffect(() => {
    if (tvMode && isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % allSlides.length);
      }, 10000); // 10 seconds per slide
      return () => clearInterval(interval);
    }
  }, [tvMode, isAutoPlaying, allSlides.length]);

  const handlePinSubmit = useCallback(() => {
    if (pin === '2101') {
      setTvMode(true);
      setShowPinInput(false);
      setPin('');
    } else {
      alert('Incorrect PIN');
    }
  }, [pin]);

  const exitTvMode = useCallback(() => {
    setTvMode(false);
    setCurrentSlide(0);
    setIsAutoPlaying(true);
  }, []);

  // Subtle menu item card with no order button
  const MenuItemCard = ({ item, type = 'default' }) => (
    <div className="group relative bg-gaming-darker/90 backdrop-blur-sm border border-neon-blue/20 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md hover:border-neon-blue/40 transition-all duration-300">
      {/* Food Image */}
      {item.image && (
        <div className="relative h-48 overflow-hidden rounded-lg mb-4">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/60 via-transparent to-transparent" />
          
          {/* Opening Offer Badge */}
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Gift className="h-3 w-3" />
            OPENING OFFER
          </div>
          
          {/* Price Badge */}
          <div className="absolute top-3 right-3 bg-neon-pink/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-center">
            {type === 'combo' ? (
              <>
                <div className="text-xs line-through text-gray-200">₹{item.originalPrice}</div>
                <div className="text-lg font-bold">₹{item.discountedPrice}</div>
              </>
            ) : (
              <>
                <div className="text-xs line-through text-gray-200">₹{item.originalPrice}</div>
                <div className="text-lg font-bold">₹{item.price}</div>
              </>
            )}
          </div>
        </div>
      )}
      
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl mt-1">{item.icon}</span>
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-neon-blue transition-colors duration-300">
            {item.name}
          </h4>
          {item.original && (
            <p className="text-sm text-gray-400 mb-1">{item.original}</p>
          )}
          {item.quantity && (
            <p className="text-sm text-neon-blue mb-1">{item.quantity}</p>
          )}
          {item.suitableFor && (
            <p className="text-sm text-neon-pink mb-2">👥 {item.suitableFor}</p>
          )}
        </div>
      </div>
      
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {item.description}
      </p>
      
      {/* Pricing Details */}
      <div className="space-y-2">
        {type === 'combo' ? (
          <div className="bg-gaming-accent/10 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400 line-through">Original: ₹{item.originalPrice}</span>
              <span className="text-xl font-bold text-neon-blue">₹{item.discountedPrice}</span>
            </div>
            <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-semibold text-center mb-2">
              💰 Save ₹{item.originalPrice - item.discountedPrice}!
            </div>
            {item.includes && (
              <p className="text-sm text-neon-blue mb-1">📦 Includes: {item.includes}</p>
            )}
            {item.hasMocktail && (
              <span className="inline-block text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-full">
                🍹 Includes Mocktail
              </span>
            )}
          </div>
        ) : (
          <div className="bg-gaming-accent/10 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400 line-through">Regular: ₹{item.originalPrice}</span>
              <span className="text-xl font-bold text-neon-blue">₹{item.price}</span>
            </div>
            <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-semibold text-center mb-2">
              💰 Save ₹{item.originalPrice - item.price}!
            </div>
            
            {/* Extra variants */}
            {item.periPeriPrice && (
              <div className="flex items-center justify-between bg-red-500/10 p-2 rounded mb-1">
                <span className="text-sm text-red-400">🌶️ Peri Peri Option</span>
                <div className="text-right">
                  <div className="text-xs line-through text-gray-400">₹{item.periPeriOriginalPrice}</div>
                  <div className="text-lg font-bold text-red-400">₹{item.periPeriPrice}</div>
                </div>
              </div>
            )}
            
            {item.schezwanPrice && (
              <div className="flex items-center justify-between bg-orange-500/10 p-2 rounded">
                <span className="text-sm text-orange-400">🔥 Schezwan Option</span>
                <div className="text-right">
                  <div className="text-xs line-through text-gray-400">₹{item.schezwanOriginalPrice}</div>
                  <div className="text-lg font-bold text-orange-400">₹{item.schezwanPrice}</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  // TV Mode Carousel Slide with smooth transition
  const CarouselSlide = ({ slide }) => (
    <div className="min-h-screen bg-gaming-darker p-8 flex flex-col transition-all duration-1000 ease-in-out">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-bold neon-text-blue mb-4">
          {slide.title}
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-1">
        {slide.items.map((item, index) => (
          <div key={index} className="transform transition-all duration-500" style={{animationDelay: `${index * 0.1}s`}}>
            <MenuItemCard 
              item={item} 
              type={slide.title.includes('Combos') ? 'combo' : 'default'} 
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (tvMode) {
    return (
      <div className="min-h-screen bg-gaming-dark text-white relative overflow-hidden">
        <SEOMetadata 
          title="Cafe Menu TV Display | Cuephoria Gaming Lounge Trichy" 
          description="Digital menu display for Cuephoria - Gaming cafe menu in TV mode"
        />
        
        {/* TV Mode Header */}
        <div className="absolute top-4 left-4 right-4 z-50 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Monitor className="h-6 w-6 text-neon-blue" />
            <span className="text-neon-blue font-semibold">TV MODE ACTIVE</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-4 py-2 bg-neon-blue/80 text-white rounded-lg hover:bg-neon-blue transition flex items-center gap-2"
            >
              {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={exitTvMode}
              className="px-4 py-2 bg-red-500/80 text-white rounded-lg hover:bg-red-500 transition"
            >
              Exit TV Mode
            </button>
          </div>
        </div>

        {/* Carousel with smooth transitions */}
        <div className="relative">
          <CarouselSlide slide={allSlides[currentSlide]} />
          
          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {allSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-neon-pink shadow-lg' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gaming-dark text-white">
      <SEOMetadata 
        title="Cuephoria Cafe Menu | Opening Offer - Gaming Snacks & Beverages in Trichy" 
        description="🎉 OPENING OFFER! Explore Cuephoria's gaming cafe menu with special launch prices - Crispy snacks, momos, refreshing beverages & combo deals. Perfect fuel for your gaming sessions!"
        keywords="cuephoria opening offer, gaming cafe food trichy, student snacks discount, momos special price trichy, gaming beverages offer"
      />

      {/* Hidden Admin Access */}
      <div className="fixed top-2 left-2 z-50">
        <button
          onClick={() => setShowPinInput(!showPinInput)}
          className="w-8 h-8 bg-transparent hover:bg-gaming-accent/20 rounded-full opacity-10 hover:opacity-100 transition-all duration-300"
          aria-label="Admin access"
        >
          <Eye className="h-4 w-4 text-gray-600 mx-auto" />
        </button>
      </div>

      {/* PIN Input Modal */}
      {showPinInput && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gaming-darker border border-neon-blue/30 rounded-xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4 text-center text-neon-blue">Admin Access</h3>
            <div className="relative mb-4">
              <input
                type={showPin ? 'text' : 'password'}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN"
                className="w-full px-4 py-2 bg-gaming-accent/20 border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 pr-10"
                onKeyPress={(e) => e.key === 'Enter' && handlePinSubmit()}
              />
              <button
                onClick={() => setShowPin(!showPin)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePinSubmit}
                className="flex-1 px-4 py-2 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition"
              >
                Enter
              </button>
              <button
                onClick={() => {setShowPinInput(false); setPin('');}}
                className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Menu Content */}
      <div className="relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gaming-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.1)_0,rgba(15,25,40,0.5)_100%)]" />
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              >
                <Sparkles className="h-2 w-2 text-neon-blue/20" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Header with Opening Offer */}
          <div className="text-center mb-16">
            {/* Opening Offer Banner */}
            <div className="relative mb-8">
              <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white px-6 py-3 rounded-xl shadow-lg mx-auto max-w-xl">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Gift className="h-6 w-6" />
                  <h2 className="text-xl md:text-2xl font-bold">🎉 OPENING OFFER 🎉</h2>
                  <Gift className="h-6 w-6" />
                </div>
                <p className="text-sm md:text-base font-semibold">
                  Special Launch Prices - Limited Time Only!
                </p>
              </div>
            </div>
            
            <div className="inline-block mb-6">
              <img
                src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png"
                alt="Cuephoria Logo"
                className="h-16 md:h-20 mx-auto"
                loading="eager"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="neon-text-blue">CUEPHORIA</span>
              <br />
              <span className="text-2xl md:text-3xl text-neon-pink">Gaming Cafe Menu</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our delicious offerings designed to fuel your gaming sessions. From crispy snacks to refreshing beverages and value-packed combos - explore what makes Cuephoria the perfect gaming destination.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={() => navigate('/book')}
                className="px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition flex items-center gap-2 font-semibold"
              >
                <Gamepad2 className="h-5 w-5" />
                Book Gaming Session
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-neon-blue/80 text-white rounded-lg hover:bg-neon-blue transition flex items-center gap-2 font-semibold"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
                Back to Home
              </button>
            </div>

            {/* Device Mode Indicator */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Smartphone className="h-4 w-4" />
              <span>Optimized for all devices</span>
            </div>
          </div>

          {/* Savory Snacks Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <span className="text-neon-blue">🍽️ Savory Snacks</span>
                <Zap className="h-8 w-8 text-neon-pink" />
              </h2>
              <p className="text-gray-300">Crispy, crunchy, and absolutely irresistible gaming fuel!</p>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData.savorySnacks.map((item, index) => (
                <MenuItemCard key={index} item={item} />
              ))}
            </div>
          </section>

          {/* Momos & Rolls Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <span className="text-neon-blue">🥟 Momos & Rolls</span>
                <Coffee className="h-8 w-8 text-neon-pink" />
              </h2>
              <p className="text-gray-300">Steaming hot bites perfect for sharing with your gaming squad!</p>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData.momosRolls.map((item, index) => (
                <MenuItemCard key={index} item={item} />
              ))}
            </div>
          </section>

          {/* Beverages Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <span className="text-neon-blue">🍹 Refreshing Beverages</span>
                <Sparkles className="h-8 w-8 text-neon-pink" />
              </h2>
              <p className="text-gray-300">Cool down and energize with our signature mocktails and refreshers!</p>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData.beverages.map((item, index) => (
                <MenuItemCard key={index} item={item} />
              ))}
            </div>
          </section>

          {/* Combos Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <span className="text-neon-blue">🎉 Combo Deals</span>
                <span className="text-lg bg-neon-pink/20 text-neon-pink px-3 py-1 rounded-full">10% OFF</span>
              </h2>
              <p className="text-gray-300">Save more when you share more! Perfect for group gaming sessions.</p>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.combos.map((item, index) => (
                <MenuItemCard key={index} item={item} type="combo" />
              ))}
            </div>
          </section>

          {/* Ready to Order Call to Action */}
          <div className="text-center bg-gaming-darker/80 backdrop-blur-md border border-neon-blue/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neon-blue">
              Ready to Order? 🎮
            </h3>
            <p className="text-gray-300 mb-6">
              Visit us at Cuephoria or call ahead to place your order. Fresh food, fast service, and endless gaming fun!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+918637625155"
                className="px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition flex items-center gap-2 font-semibold"
              >
                📞 Call to Order: +91 86376 25155
              </a>
              <a
                href="https://wa.me/918637625155?text=Hi! I'd like to order from the Cuephoria menu."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-2 font-semibold"
              >
                💬 WhatsApp Order
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              🏪 Location: Thiruverumbur, Trichy | ⏰ Open: 11:00 AM - 11:00 PM
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CafeMenu;
