import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Zap, Coffee, Gamepad2, Sparkles, Eye, EyeOff, Play, Pause, Monitor, Smartphone, Flame, Gift } from 'lucide-react';
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

  // Enhanced Menu Data with Images and Opening Offer Pricing
  const menuData = {
    savorySnacks: [
      {
        name: "Crispy Potato Waves",
        original: "French Fries (7mm)",
        originalPrice: 180,
        price: 120,
        periPeriOriginalPrice: 200,
        periPeriPrice: 140,
        description: "Golden crispy potato fries with a fluffy inside and crunchy outside. Best enjoyed with a sprinkle of Peri Peri magic for a fiery kick!",
        icon: "🍟",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-yellow-400 to-orange-500"
      },
      {
        name: "Happy Faces",
        original: "Smiley Fries",
        originalPrice: 150,
        price: 100,
        description: "Joy in every bite! Crunchy potato smileys to brighten any mood.",
        icon: "😊",
        image: "https://images.unsplash.com/photo-1541592106381-b31e8e095584?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-yellow-300 to-yellow-500"
      },
      {
        name: "Onion Tornado Rings",
        original: "Onion Rings (Medium)",
        originalPrice: 160,
        price: 110,
        schezwanOriginalPrice: 180,
        schezwanPrice: 125,
        description: "Crispy golden onion rings that whirl into flavor, with an optional Schezwan punch.",
        icon: "🧅",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-amber-400 to-orange-600"
      },
      {
        name: "Garlic Fire Pops",
        original: "Chilli Garlic Pops",
        originalPrice: 200,
        price: 140,
        description: "Piping hot, crunchy bites bursting with garlicky heat – perfect for spice lovers.",
        icon: "🔥",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-red-400 to-red-600"
      },
      {
        name: "Golden Veg Bites",
        original: "Veg Nuggets",
        originalPrice: 150,
        price: 100,
        description: "Crunchy veg-packed nuggets with a creamy dip option to balance the flavors.",
        icon: "🥬",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-green-400 to-green-600"
      },
      {
        name: "Jalapeño Cheese Poppers",
        original: "Jalapeño Cheese Pops",
        originalPrice: 200,
        price: 140,
        description: "Cheesy jalapeños that burst with fiery creaminess on every bite.",
        icon: "🌶️",
        image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-green-500 to-yellow-500"
      },
      {
        name: "Popcorn Chicken",
        original: "Chicken Bites (Popcorn)",
        originalPrice: 220,
        price: 160,
        description: "Tiny golden chicken pops full of flavor – light, crunchy, and absolutely addictive.",
        icon: "🍿",
        image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-orange-400 to-red-500"
      },
      {
        name: "Golden Chicken Nuggets",
        original: "Chicken Nuggets",
        originalPrice: 200,
        price: 140,
        description: "Classic nuggets – soft inside, crispy outside, dipped in your favorite sauce.",
        icon: "🍗",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-yellow-500 to-orange-600"
      }
    ],
    momosRolls: [
      {
        name: "Veggie Momos",
        original: "Veg Momos (Fried)",
        originalPrice: 160,
        price: 110,
        quantity: "5 pcs",
        description: "Crunchy vegetable momos with a spicy Schezwan swirl.",
        icon: "🥟",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-green-400 to-green-600"
      },
      {
        name: "Paneer Twist Momos",
        original: "Paneer Momos",
        originalPrice: 180,
        price: 130,
        quantity: "5 pcs",
        description: "Soft paneer-filled bites with a punch of spice – an Indian twist to the momo fun.",
        icon: "🧀",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-yellow-400 to-orange-500"
      },
      {
        name: "Cheese Burst Momos",
        original: "Cheese Corn Momos",
        originalPrice: 170,
        price: 120,
        quantity: "5 pcs",
        description: "Cheesy corn explosions wrapped in crispy momo shells.",
        icon: "🌽",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-yellow-300 to-yellow-600"
      },
      {
        name: "Classic Chicken Momos",
        original: "Chicken Momos",
        originalPrice: 180,
        price: 130,
        quantity: "5 pcs",
        description: "Juicy chicken momos served hot with your choice of dip for the perfect desi street feel.",
        icon: "🍖",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-red-400 to-red-600"
      },
      {
        name: "Fiery Schezwan Momos",
        original: "Chicken Schezwan Momos",
        originalPrice: 200,
        price: 140,
        quantity: "5 pcs",
        description: "Spicy Schezwan-infused momos for those who can handle the heat.",
        icon: "🔥",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-red-500 to-red-700"
      },
      {
        name: "Veggie Roll-Up",
        original: "Veg Roll (Patty)",
        originalPrice: 130,
        price: 90,
        quantity: "1 roll",
        description: "Wholesome veggie roll with creamy mayo – great on-the-go snack.",
        icon: "🌯",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-green-500 to-lime-500"
      }
    ],
    beverages: [
      {
        name: "Blue Lagoon Lemonade",
        syrup: "Blue Curacao",
        originalPrice: 180,
        price: 129,
        description: "A dazzling blue swirl packed with citrusy fizz – the ocean in a glass.",
        icon: "🌊",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-blue-400 to-cyan-500"
      },
      {
        name: "Classic Virgin Mojito",
        syrup: "Mojito",
        originalPrice: 170,
        price: 119,
        description: "The chill of mint, pop of lime, and soda sparkle – pure refreshment.",
        icon: "🌿",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-green-400 to-lime-500"
      },
      {
        name: "Mango Mint Mojito",
        syrup: "Mango",
        originalPrice: 190,
        price: 139,
        description: "Sweet mango delight with breezy mint – summer vibes all year.",
        icon: "🥭",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-yellow-400 to-orange-500"
      },
      {
        name: "Electric Blue Spritz",
        syrup: "Blue Curacao",
        originalPrice: 190,
        price: 139,
        description: "Shocking blue with a lemonade float – tangy and electrifying.",
        icon: "⚡",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-blue-500 to-purple-500"
      },
      {
        name: "Mango Mule",
        syrup: "Mango",
        originalPrice: 200,
        price: 149,
        description: "Tropical mango twist paired with ginger ale sparkle.",
        icon: "🍹",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-orange-400 to-red-500"
      },
      {
        name: "Sunrise Orange Cooler",
        syrup: "Orange",
        originalPrice: 180,
        price: 129,
        description: "A cool orange sunrise in your glass – refreshing and zesty.",
        icon: "🌅",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-orange-300 to-red-400"
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
        icon: "👥",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-purple-400 to-pink-500"
      },
      {
        name: "Momo Mania Lite",
        includes: "Schezwan Veg Momos + Blue Lagoon Lemonade",
        suitableFor: "2 people",
        originalPrice: 299,
        discountedPrice: 239,
        hasMocktail: true,
        icon: "🥟",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-blue-400 to-green-500"
      },
      {
        name: "Quad Feast Value",
        includes: "Peri Peri Potato Blast + Jalapeño Cheese Poppers + Mango Mint Mojito (4)",
        suitableFor: "4 people",
        originalPrice: 599,
        discountedPrice: 479,
        hasMocktail: true,
        icon: "👨‍👩‍👧‍👦",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-green-400 to-blue-500"
      },
      {
        name: "Game On Combo",
        includes: "Chicken Nuggets + Schezwan Momos + Orange Cooler (4)",
        suitableFor: "4 people",
        originalPrice: 609,
        discountedPrice: 489,
        hasMocktail: true,
        icon: "🎮",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        gradient: "from-red-400 to-purple-500"
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

  // TV Mode Auto-play
  useEffect(() => {
    if (tvMode && isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % allSlides.length);
      }, 5000); // 5 seconds per slide
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

  // Enhanced menu item card with images and opening offer pricing
  const MenuItemCard = ({ item, type = 'default' }) => (
    <div className="group relative bg-gaming-darker/80 backdrop-blur-md border border-neon-blue/30 rounded-xl overflow-hidden hover:border-neon-pink/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,45,239,0.4)] hover:scale-105 animate-fadeInUp">
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
      
      {/* Food Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/80 via-transparent to-transparent" />
        
        {/* Opening Offer Badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
          <Gift className="h-3 w-3 inline mr-1" />
          OPENING OFFER
        </div>
        
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-neon-pink/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-center shadow-lg">
          {type === 'combo' ? (
            <>
              <div className="text-xs line-through text-gray-300">₹{item.originalPrice}</div>
              <div className="text-lg font-bold">₹{item.discountedPrice}</div>
            </>
          ) : (
            <>
              <div className="text-xs line-through text-gray-300">₹{item.originalPrice}</div>
              <div className="text-lg font-bold">₹{item.price}</div>
            </>
          )}
        </div>
      </div>
      
      <div className="relative z-10 p-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl animate-bounce">{item.icon}</span>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-white group-hover:text-neon-pink transition-colors duration-300">
              {item.name}
            </h4>
            {item.original && (
              <p className="text-xs text-gray-400">{item.original}</p>
            )}
            {item.quantity && (
              <p className="text-xs text-neon-blue">{item.quantity}</p>
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
          {item.description}
        </p>
        
        {/* Pricing Details */}
        <div className="mb-4">
          {type === 'combo' ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400 line-through">Original: ₹{item.originalPrice}</span>
                <span className="text-lg font-bold text-neon-blue">₹{item.discountedPrice}</span>
              </div>
              <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-semibold text-center">
                💰 Save ₹{item.originalPrice - item.discountedPrice}!
              </div>
              <div className="space-y-1">
                <p className="text-sm text-neon-blue">📦 {item.includes}</p>
                <p className="text-xs text-gray-400">👥 {item.suitableFor}</p>
                {item.hasMocktail && (
                  <span className="inline-block text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-full">
                    🍹 Includes Mocktail
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400 line-through">Regular: ₹{item.originalPrice}</span>
                <span className="text-xl font-bold text-neon-blue">₹{item.price}</span>
              </div>
              <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-semibold text-center">
                💰 Save ₹{item.originalPrice - item.price}!
              </div>
              
              {/* Extra variants */}
              {item.periPeriPrice && (
                <div className="flex items-center justify-between bg-red-500/10 p-2 rounded">
                  <span className="text-sm text-red-400">🌶️ Peri Peri</span>
                  <div className="text-right">
                    <div className="text-xs line-through text-gray-400">₹{item.periPeriOriginalPrice}</div>
                    <div className="text-lg font-bold text-red-400">₹{item.periPeriPrice}</div>
                  </div>
                </div>
              )}
              
              {item.schezwanPrice && (
                <div className="flex items-center justify-between bg-orange-500/10 p-2 rounded">
                  <span className="text-sm text-orange-400">🔥 Schezwan</span>
                  <div className="text-right">
                    <div className="text-xs line-through text-gray-400">₹{item.schezwanOriginalPrice}</div>
                    <div className="text-lg font-bold text-orange-400">₹{item.schezwanPrice}</div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 bg-gradient-to-r from-neon-pink to-neon-blue hover:from-neon-blue hover:to-neon-pink text-white rounded-lg transition-all duration-500 flex items-center gap-2 group-hover:shadow-lg transform hover:scale-105">
            <span>Order Now</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          
          {(item.periPeriPrice || item.schezwanPrice) && (
            <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full animate-pulse flex items-center gap-1">
              <Flame className="h-3 w-3" />
              Spicy Options
            </span>
          )}
        </div>
      </div>
    </div>
  );

  // TV Mode Carousel Slide
  const CarouselSlide = ({ slide }) => (
    <div className="min-h-screen bg-gaming-darker p-8 flex flex-col">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-bold neon-text-blue mb-4 animate-pulse-neon">
          {slide.title}
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto rounded-full animate-pulse" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-1">
        {slide.items.map((item, index) => (
          <MenuItemCard 
            key={index} 
            item={item} 
            type={slide.title.includes('Combos') ? 'combo' : 'default'} 
          />
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

        {/* Carousel */}
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
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gaming-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.15)_0,rgba(15,25,40,0.8)_100%)]" />
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              >
                <Sparkles className="h-3 w-3 text-neon-blue/30" />
              </div>
            ))}
          </div>
          
          {/* Animated grid overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Enhanced Header with Opening Offer */}
          <div className="text-center mb-20">
            {/* Opening Offer Banner */}
            <div className="relative mb-8">
              <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white px-8 py-4 rounded-xl shadow-2xl animate-pulse-glow mx-auto max-w-2xl">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Gift className="h-8 w-8 animate-bounce" />
                  <h2 className="text-2xl md:text-4xl font-bold">🎉 OPENING OFFER 🎉</h2>
                  <Gift className="h-8 w-8 animate-bounce" />
                </div>
                <p className="text-lg md:text-xl font-semibold">
                  Special Launch Prices - Limited Time Only!
                </p>
                <div className="text-sm md:text-base text-red-100 mt-2">
                  Save up to ₹80 on every item! 🔥
                </div>
              </div>
              
              {/* Floating offer badges */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                UP TO ₹80 OFF!
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg" style={{animationDelay: '0.5s'}}>
                LIMITED TIME!
              </div>
            </div>
            
            <div className="inline-block animate-pulse-neon mb-6">
              <img
                src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png"
                alt="Cuephoria Logo"
                className="h-16 md:h-24 mx-auto"
                loading="eager"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-gradient-text">
              <span className="neon-text-blue">CUEPHORIA</span>
              <br />
              <span className="text-2xl md:text-4xl text-neon-pink">Gaming Cafe Menu</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              🚀 **Grand Opening Special!** Fuel your gaming sessions with our delicious snacks, 
              refreshing beverages, and combo deals at **unbeatable opening prices**. 
              Perfect munchies for your next victory! ⚡
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={() => navigate('/book')}
                className="px-8 py-4 bg-gradient-to-r from-neon-pink to-red-500 text-white rounded-lg hover:from-red-500 hover:to-neon-pink transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg transform hover:scale-105"
              >
                <Gamepad2 className="h-5 w-5" />
                Book Gaming Session
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-purple-500 text-white rounded-lg hover:from-purple-500 hover:to-neon-blue transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg transform hover:scale-105"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
                Back to Home
              </button>
            </div>

            {/* Device Mode Indicator */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Smartphone className="h-4 w-4" />
              <span>Optimized for all devices • Fresh food • Fast service</span>
            </div>
          </div>

          {/* Savory Snacks Section */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4 animate-slideInUp">
                <span className="text-neon-blue">🍽️ Savory Snacks</span>
                <Zap className="h-8 w-8 text-neon-pink animate-pulse" />
              </h2>
              <p className="text-gray-300 text-lg">Crispy, crunchy, and absolutely irresistible gaming fuel!</p>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto mt-4 rounded-full animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {menuData.savorySnacks.map((item, index) => (
                <div key={index} style={{animationDelay: `${index * 0.1}s`}}>
                  <MenuItemCard item={item} />
                </div>
              ))}
            </div>
          </section>

          {/* Momos & Rolls Section */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4 animate-slideInUp">
                <span className="text-neon-blue">🥟 Momos & Rolls</span>
                <Coffee className="h-8 w-8 text-neon-pink animate-pulse" />
              </h2>
              <p className="text-gray-300 text-lg">Steaming hot bites perfect for sharing with your gaming squad!</p>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto mt-4 rounded-full animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {menuData.momosRolls.map((item, index) => (
                <div key={index} style={{animationDelay: `${index * 0.1}s`}}>
                  <MenuItemCard item={item} />
                </div>
              ))}
            </div>
          </section>

          {/* Beverages Section */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4 animate-slideInUp">
                <span className="text-neon-blue">🍹 Refreshing Beverages</span>
                <Sparkles className="h-8 w-8 text-neon-pink animate-pulse" />
              </h2>
              <p className="text-gray-300 text-lg">Cool down and energize with our signature mocktails and refreshers!</p>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto mt-4 rounded-full animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData.beverages.map((item, index) => (
                <div key={index} style={{animationDelay: `${index * 0.1}s`}}>
                  <MenuItemCard item={item} />
                </div>
              ))}
            </div>
          </section>

          {/* Combos Section */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4 animate-slideInUp">
                <span className="text-neon-blue">🎉 Combo Deals</span>
                <span className="text-lg bg-gradient-to-r from-red-500 to-neon-pink text-white px-4 py-2 rounded-full animate-bounce shadow-lg">
                  EXTRA 10% OFF
                </span>
              </h2>
              <p className="text-gray-300 text-lg">Save more when you share more! Perfect for group gaming sessions.</p>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto mt-4 rounded-full animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData.combos.map((item, index) => (
                <div key={index} style={{animationDelay: `${index * 0.1}s`}}>
                  <MenuItemCard item={item} type="combo" />
                </div>
              ))}
            </div>
          </section>

          {/* Enhanced Call to Action */}
          <div className="text-center bg-gradient-to-r from-gaming-darker/90 to-gaming-accent/90 backdrop-blur-md border border-neon-blue/30 rounded-2xl p-8 max-w-5xl mx-auto shadow-2xl">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-neon-blue animate-gradient-text">
                Ready to Order? 🎮✨
              </h3>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                🚀 **Opening Offer Alert!** Visit us at Cuephoria or call ahead to place your order. 
                Fresh food, fast service, **special launch prices**, and endless gaming fun!
              </p>
              <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 inline-block animate-pulse">
                ⏰ Limited time opening offer - Don't miss out!
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+918637625155"
                className="px-8 py-4 bg-gradient-to-r from-neon-pink to-red-500 text-white rounded-lg hover:from-red-500 hover:to-neon-pink transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg transform hover:scale-105"
              >
                📞 Call to Order: +91 86376 25155
              </a>
              <a
                href="https://wa.me/918637625155?text=Hi! I'd like to order from the opening offer cafe menu."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-500 transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg transform hover:scale-105"
              >
                💬 WhatsApp Order Now
              </a>
            </div>
            
            <div className="mt-6 text-sm text-gray-400">
              🏪 Location: Thiruverumbur, Trichy | ⏰ Open: 11:00 AM - 11:00 PM
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Additional CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.5); }
          50% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.8); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-gradient-text {
          background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-text 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default CafeMenu;
