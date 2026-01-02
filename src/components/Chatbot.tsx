import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronLeft, ChevronRight, MapPin, Calendar, BarChart3, Phone, Mail, Clock, Upload } from 'lucide-react';
import { checkProfanity } from '../utils/profanityFilter';
import { quickReplies, getRandomQuirkyResponse, getRandomTamildResponse, getContextualResponse } from '../utils/chatbotData';
import { Button } from './ui/button';
import { useTestimonials, Testimonial } from '../hooks/useTestimonials';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  buttons?: Array<{
    text: string;
    action: 'link' | 'phone' | 'email' | 'upload';
    value: string;
    icon?: React.ReactNode;
  }>;
}

interface Warning {
  id: string;
  text: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Vanakkam! 🙏 I'm Shakila, your friendly Cuephoria guide here in Trichy! Ready to dive into some epic gaming action at the heart of Tamil Nadu? What can I help you with today, da? 🎮✨",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [warnings, setWarnings] = useState<Warning[]>([]);
  const [profanityCount, setProfanityCount] = useState(0);
  const [isChatDisabled, setIsChatDisabled] = useState(false);
  const [currentQuickReplies, setCurrentQuickReplies] = useState(quickReplies.slice(0, 4));
  const [quickReplyIndex, setQuickReplyIndex] = useState(0);
  const [autoRotateEnabled, setAutoRotateEnabled] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const autoOpenTimeoutRef = useRef<NodeJS.Timeout>();
  const notificationTimeoutRef = useRef<NodeJS.Timeout>();

  const { updateTestimonials } = useTestimonials();

  useEffect(() => {
    if (!hasInteracted) {
      notificationTimeoutRef.current = setTimeout(() => {
        setShowNotification(true);
        setNotificationCount(1);
        
        autoOpenTimeoutRef.current = setTimeout(() => {
          if (!isOpen) {
            setIsOpen(true);
            setShowNotification(false);
            setNotificationCount(0);
          }
        }, 40000);
      }, 10000);
    }

    return () => {
      if (notificationTimeoutRef.current) clearTimeout(notificationTimeoutRef.current);
      if (autoOpenTimeoutRef.current) clearTimeout(autoOpenTimeoutRef.current);
    };
  }, [hasInteracted, isOpen]);

  useEffect(() => {
    if (!autoRotateEnabled) return;

    const interval = setInterval(() => {
      setQuickReplyIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % (quickReplies.length - 3);
        setCurrentQuickReplies(quickReplies.slice(nextIndex, nextIndex + 4));
        return nextIndex;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [autoRotateEnabled]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (text: string, isUser: boolean, buttons?: Message['buttons']) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date(),
      buttons
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addWarning = (text: string) => {
    const newWarning: Warning = {
      id: Date.now().toString(),
      text
    };
    setWarnings(prev => [...prev, newWarning]);
    
    setTimeout(() => {
      setWarnings(prev => prev.filter(w => w.id !== newWarning.id));
    }, 5000);
  };

  const simulateTyping = (callback: () => void, delay: number = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/json') {
      addWarning('Please upload a JSON file only!');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target?.result as string);
        
        // Validate if it's an array of testimonials
        if (Array.isArray(jsonData) && jsonData.length > 0) {
          const validTestimonials: Testimonial[] = jsonData.filter(item => 
            item.name && typeof item.stars === 'number' && item.stars >= 1 && item.stars <= 5
          );
          
          if (validTestimonials.length > 0) {
            updateTestimonials(validTestimonials);
            simulateTyping(() => {
              addMessage(`Perfect! I've successfully updated the testimonials with ${validTestimonials.length} reviews. The website will now show these fresh customer reviews! 🎉✨`, false);
            });
          } else {
            addWarning('Invalid testimonial format in JSON file!');
          }
        } else {
          addWarning('JSON file should contain an array of testimonials!');
        }
      } catch (error) {
        addWarning('Invalid JSON file format!');
        console.error('JSON parsing error:', error);
      }
    };
    
    reader.readAsText(file);
    event.target.value = ''; // Reset file input
  };

  const handleButtonClick = (action: string, value: string) => {
    if (action === 'link') {
      window.open(value, '_blank');
    } else if (action === 'phone') {
      window.open(`tel:${value}`);
    } else if (action === 'email') {
      window.open(`mailto:${value}`);
    } else if (action === 'upload') {
      fileInputRef.current?.click();
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim() || isChatDisabled) return;

    setHasInteracted(true);

    if (checkProfanity(inputText)) {
      const newCount = profanityCount + 1;
      setProfanityCount(newCount);
      
      addWarning(`Warning ${newCount}/3: Enna da, let's keep it gaming-friendly! 🎮`);
      
      if (newCount >= 3) {
        setIsChatDisabled(true);
        simulateTyping(() => {
          addMessage("Aiyo! Looks like someone needs a timeout, da! 😤 Maybe try some meditation... or better yet, channel that energy into some epic gaming at Cuephoria! Come visit us in Trichy! 🎮💀", false);
        });
      }
      
      setInputText('');
      return;
    }

    addMessage(inputText, true);
    
    simulateTyping(() => {
      const { response, buttons } = generateResponse(inputText.toLowerCase());
      addMessage(response, false, buttons);
    });
    
    setInputText('');
  };

  const generateResponse = (input: string): { response: string; buttons?: Message['buttons'] } => {
    const lowerInput = input.toLowerCase();
    
    // Secret admin command for testimonial upload
    if (lowerInput.includes('upload reviews') || lowerInput.includes('update testimonials') || lowerInput.includes('admin upload')) {
      return {
        response: "🔐 Admin mode detected! You can upload new testimonials using the button below. Make sure it's a valid JSON file with review data, da! 🎯",
        buttons: [
          { text: "Upload Reviews", action: "upload", value: "", icon: <Upload size={16} /> }
        ]
      };
    }

    if (lowerInput.includes('pool') || lowerInput.includes('8-ball') || lowerInput.includes('snooker') || lowerInput.includes('billiards')) {
      return {
        response: "🎱 Vanakkam! Pool Games are absolutely mass, da! We've got professional tables waiting for you here in Trichy:\n\n💰 Regular Price: ₹300/hour\n\nUse coupon codes for discounts:\n🎟️ CUEPHORIA20 - 20% OFF: ₹300 → ₹240/hour (saving ₹60)\n🎟️ CUEPHORIA35 - 35% OFF with student ID: ₹300 → ₹195/hour (saving ₹105)\n🎟️ HH99 - Fixed ₹99/hour (Mon-Fri, 11 AM-4 PM): ₹300 → ₹99/hour (saving ₹201)\n🎟️ NIT35 - 35% OFF: ₹300 → ₹195/hour (saving ₹105)\n\nThat's a whole day of pool mastery! Perfect for hanging out with friends or some serious practice. Ready to book your session right now?",
        buttons: [
          { text: "Book Now", action: "link", value: "https://cuephoria.in/book", icon: <Calendar size={16} /> },
          { text: "Check Live Tables", action: "link", value: "https://admin.cuephoria.in/public/stations", icon: <BarChart3 size={16} /> }
        ]
      };
    }
    
    if (lowerInput.includes('ps5') || lowerInput.includes('playstation') || lowerInput.includes('console') || lowerInput.includes('controller')) {
      return {
        response: "🎮 Aiyo! PS5 Gaming is where the real magic happens, da! We've got the latest titles and premium controllers here in Trichy:\n\n💰 Regular Price: ₹150 per controller/hour\n\nUse coupon codes for discounts:\n🎟️ CUEPHORIA20 - 20% OFF: ₹150 → ₹120/hour (saving ₹30)\n🎟️ CUEPHORIA35 - 35% OFF with student ID: ₹150 → ₹97.50/hour (saving ₹52.50)\n🎟️ HH99 - Fixed ₹99/hour (Mon-Fri, 11 AM-4 PM): ₹150 → ₹99/hour (saving ₹51)\n🎟️ NIT35 - 35% OFF: ₹150 → ₹97.50/hour (saving ₹52.50)\n\nWhether you're into FIFA, God of War, or Spider-Man, we've got you covered! Ready to secure your gaming throne? Book immediately!",
        buttons: [
          { text: "Book PS5 Session", action: "link", value: "https://cuephoria.in/book", icon: <Calendar size={16} /> },
          { text: "Live Availability", action: "link", value: "https://admin.cuephoria.in/public/stations", icon: <BarChart3 size={16} /> }
        ]
      };
    }
    
    if (lowerInput.includes('vr') || lowerInput.includes('virtual reality') || lowerInput.includes('quest') || lowerInput.includes('meta quest')) {
      return {
        response: "🥽 Aiyo! VR Gaming with Meta Quest 3S is absolutely mind-blowing, da! Experience the future of gaming right here in Trichy:\n\n✨ Latest Generation Meta Quest 3S VR Headsets\n🌐 Mixed Reality Technology - Blend virtual worlds with your real environment!\n🎮 Extensive library of cutting-edge VR games\n🎯 Dedicated play areas with expert guidance\n\n💰 Regular Price: ₹150 per session\n\nUse coupon codes for discounts:\n🎟️ CUEPHORIA20 - 20% OFF: ₹150 → ₹120/session (saving ₹30)\n🎟️ CUEPHORIA35 - 35% OFF with student ID: ₹150 → ₹97.50/session (saving ₹52.50)\n🎟️ NIT35 - 35% OFF: ₹150 → ₹97.50/session (saving ₹52.50)\n\nFrom action-packed adventures to immersive simulations - step into another dimension! Ready to experience the future? Book your VR session now!",
        buttons: [
          { text: "Book VR Session", action: "link", value: "https://cuephoria.in/book", icon: <Calendar size={16} /> },
          { text: "Live Availability", action: "link", value: "https://admin.cuephoria.in/public/stations", icon: <BarChart3 size={16} /> }
        ]
      };
    }
    
    if (lowerInput.includes('board') || lowerInput.includes('uno') || lowerInput.includes('ludo') || lowerInput.includes('monopoly') || lowerInput.includes('free')) {
      return {
        response: "🎲 Vanakkam! Board Games are totally FREE and super fun, da! We've got UNO, LUDO, Monopoly and more at our Trichy location!\n\nPerfect for hanging out with friends and family! No time limits on board games when you order snacks. Want to combine this with some PS5 or pool action for the ultimate gaming experience?",
        buttons: [
          { text: "Book Mixed Session", action: "link", value: "https://cuephoria.in/book", icon: <Calendar size={16} /> }
        ]
      };
    }
    
    if (lowerInput.includes('book') || lowerInput.includes('reserve') || lowerInput.includes('slot') || lowerInput.includes('book now')) {
      return {
        response: "🎯 Superb! Let's get you booked at Cuephoria Trichy! Here's what's available:\n\n🎮 PS5 Gaming: ₹150/hour\n🥽 VR Gaming (Meta Quest 3S): ₹150/session\n🎱 Pool Table: ₹300/hour\n🎲 Board Games: FREE with snacks\n\nUse coupon codes for discounts:\n🎟️ CUEPHORIA20 - 20% OFF\n   PS5/VR: ₹150 → ₹120/hour | Pool: ₹300 → ₹240/hour\n🎟️ CUEPHORIA35 - 35% OFF (student ID required)\n   PS5/VR: ₹150 → ₹97.50/hour | Pool: ₹300 → ₹195/hour\n🎟️ HH99 - Fixed ₹99/hour (PS5 & Pool only, Mon-Fri 11 AM-4 PM)\n   PS5: ₹150 → ₹99/hour | Pool: ₹300 → ₹99/hour\n🎟️ NIT35 - 35% OFF\n   PS5/VR: ₹150 → ₹97.50/hour | Pool: ₹300 → ₹195/hour\n\nExperience cutting-edge VR gaming with our Meta Quest 3S headsets featuring mixed reality! I can help you book the perfect gaming session right now! What's calling to you today?",
        buttons: [
          { text: "Instant Booking", action: "link", value: "https://cuephoria.in/book", icon: <Calendar size={16} /> }
        ]
      };
    }
    
    if (lowerInput.includes('available') || lowerInput.includes('busy') || lowerInput.includes('occupancy') || lowerInput.includes('tables') || lowerInput.includes('live')) {
      return {
        response: "👀 Smart move checking availability first, da! Here's the live scoop from our Trichy location:\n\nYou can see exactly which tables and controllers are free right now! Our live system updates every few minutes so you get real-time info. Spotted something you like? Book it immediately before someone else grabs it!",
        buttons: [
          { text: "Live Occupancy", action: "link", value: "https://admin.cuephoria.in/public/stations", icon: <BarChart3 size={16} /> },
          { text: "Quick Book", action: "link", value: "https://cuephoria.in/book", icon: <Calendar size={16} /> }
        ]
      };
    }
    
    if (lowerInput.includes('weekly') || lowerInput.includes('pass') || lowerInput.includes('membership') || lowerInput.includes('monthly')) {
      return {
        response: "💎 Aiyayo! Our Monthly Memberships are INCREDIBLE value, da! Check this out:\n\n🥈 Silver Membership - ₹299/month (Up to 2 players)\n🥇 Gold Membership - ₹499/month (Up to 4 players)\n\nBoth include:\n✨ 50% OFF all gaming sessions\n🍿 ₹100 worth of FREE snacks\n🎯 Priority bookings & VIP treatment\n📱 Premium membership card\n\nAbsolutely the best deal in all of Trichy! Perfect for regular gamers who want VIP treatment!",
        buttons: [
          { text: "Get Membership", action: "link", value: "https://cuephoria.in/book", icon: <Calendar size={16} /> }
        ]
      };
    }
    
    if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('call') || lowerInput.includes('number')) {
      return {
        response: "📞 Want to chat with our friendly Trichy team? Here's how to reach us:\n\n⏰ Hours: 11:00 AM – 11:00 PM daily\n\nOur team loves talking about gaming! But hey, I'm here to help you book right now and save you a call. What would you like to reserve, da?",
        buttons: [
          { text: "Call Us", action: "phone", value: "+918637625155", icon: <Phone size={16} /> },
          { text: "Email Us", action: "email", value: "contact@cuephoria.in", icon: <Mail size={16} /> }
        ]
      };
    }
    
    if (lowerInput.includes('location') || lowerInput.includes('address') || lowerInput.includes('where') || lowerInput.includes('directions') || lowerInput.includes('map')) {
      return {
        response: "📍 Easy to find in the heart of Trichy, da! We're perfectly located for easy access from anywhere in the city.\n\nOnce you know where we are, want me to book you a session? I can reserve your spot so it's ready when you arrive! What gaming adventure calls to you today?",
        buttons: [
          { text: "Get Directions", action: "link", value: "https://maps.app.goo.gl/ghXWYG9eLWpEwrK98", icon: <MapPin size={16} /> },
          { text: "Book Session", action: "link", value: "https://cuephoria.in/book", icon: <Calendar size={16} /> }
        ]
      };
    }
    
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much') || lowerInput.includes('rates') || lowerInput.includes('cheap') || lowerInput.includes('expensive')) {
      return {
        response: "💰 Vanakkam! Here's our transparent pricing for Trichy:\n\n🎱 Pool Table: ₹300/hour\n🎮 PS5 Gaming: ₹150/hour per controller\n🥽 VR Gaming (Meta Quest 3S): ₹150/session\n🎲 Board Games: FREE with any snack order!\n\n🎟️ Available Coupon Codes:\n• CUEPHORIA20 - 20% OFF all stations\n   PS5/VR: ₹150 → ₹120/hour (save ₹30) | Pool: ₹300 → ₹240/hour (save ₹60)\n• CUEPHORIA35 - 35% OFF all stations (student ID required)\n   PS5/VR: ₹150 → ₹97.50/hour (save ₹52.50) | Pool: ₹300 → ₹195/hour (save ₹105)\n• HH99 - Fixed ₹99/hour for PS5 & Pool (Mon-Fri, 11 AM-4 PM)\n   PS5: ₹150 → ₹99/hour (save ₹51) | Pool: ₹300 → ₹99/hour (save ₹201)\n• NIT35 - 35% OFF all stations\n   PS5/VR: ₹150 → ₹97.50/hour (save ₹52.50) | Pool: ₹300 → ₹195/hour (save ₹105)\n\n💎 Monthly Memberships:\n🥈 Silver: ₹299 (2 players) - 50% off everything including VR!\n🥇 Gold: ₹499 (4 players) - 50% off everything including VR!\n\nExperience cutting-edge VR gaming with Meta Quest 3S mixed reality technology! Honestly, these are the best gaming rates in all of Tamil Nadu, da! No hidden charges, no surprises.",
        buttons: [
          { text: "Book at These Rates", action: "link", value: "https://cuephoria.in/book", icon: <Calendar size={16} /> }
        ]
      };
    }
    
    if (lowerInput.includes('time') || lowerInput.includes('hours') || lowerInput.includes('open') || lowerInput.includes('close') || lowerInput.includes('when')) {
      return {
        response: "⏰ Vanakkam! We're open every single day for epic adventures in Trichy:\n\n🕚 Daily: 11:00 AM – 11:00 PM\n\nThat's 12 solid hours of pure gaming bliss! Morning gaming sessions are usually quieter if you prefer that, while evenings get more energetic. What time works best for your gaming style, da?",
        buttons: [
          { text: "Book Time Slot", action: "link", value: "https://cuephoria.in/book", icon: <Calendar size={16} /> },
          { text: "Live Availability", action: "link", value: "https://admin.cuephoria.in/public/stations", icon: <BarChart3 size={16} /> }
        ]
      };
    }
    
    if (lowerInput.includes('student') || lowerInput.includes('discount') || lowerInput.includes('offer') || lowerInput.includes('deal') || lowerInput.includes('coupon')) {
      return {
        response: "🎓 Student life and gaming go hand in hand, da! We've got special student offers:\n\n🎟️ CUEPHORIA35 - 35% OFF all stations (valid student ID required)\n   PS5: ₹150 → ₹97.50/hour (saving ₹52.50)\n   8-Ball: ₹300 → ₹195/hour (saving ₹105)\n   VR (Meta Quest 3S): ₹150 → ₹97.50/session (saving ₹52.50)\n\n🎟️ HH99 - Fixed ₹99/hour for PS5 & Pool (Mon-Fri, 11 AM-4 PM)\n   PS5: ₹150 → ₹99/hour (saving ₹51)\n   Pool: ₹300 → ₹99/hour (saving ₹201)\n   Perfect for afternoon breaks between classes!\n\n🎟️ NIT35 - 35% OFF all stations\n   PS5/VR: ₹150 → ₹97.50/hour (saving ₹52.50)\n   Pool: ₹300 → ₹195/hour (saving ₹105)\n\n💎 Monthly Memberships with EXTRA ₹100 OFF with valid student ID:\n🥈 Silver: Just ₹199 (normally ₹299) - 50% off PS5, VR & Pool!\n🥇 Gold: Just ₹399 (normally ₹499) - 50% off PS5, VR & Pool!\n\nExperience the future with Meta Quest 3S VR gaming! Perfect for study breaks and hanging with classmates! Group bookings get even more fun. Ready to book your stress-busting session?",
        buttons: [
          { text: "Book Student Session", action: "link", value: "https://cuephoria.in/book", icon: <Calendar size={16} /> }
        ]
      };
    }
    
    if (lowerInput.includes('vanakkam') || lowerInput.includes('trichy') || lowerInput.includes('tamil') || lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return {
        response: "Vanakkam da! 🙏 So happy to meet you! Cuephoria is the pride of Trichy's gaming scene - we're bringing world-class gaming right here to the heart of Tamil Nadu! \n\nI'm Shakila, and I'm genuinely excited to help you plan the perfect gaming experience. What brings you to our digital doorstep today? Ready for some epic fun?",
        buttons: [
          { text: "Explore Games", action: "link", value: "https://cuephoria.in/book", icon: <Calendar size={16} /> }
        ]
      };
    }
    
    const contextualResponse = getContextualResponse(input);
    return {
      response: contextualResponse + "\n\nBut hey, while I have your attention - want to book an amazing gaming session here in Trichy? I can get you sorted in under 30 seconds, da! 🎮⚡",
      buttons: [
        { text: "Book Now", action: "link", value: "https://cuephoria.in/book", icon: <Calendar size={16} /> }
      ]
    };
  };

  const handleQuickReply = (reply: string) => {
    if (isChatDisabled) return;
    
    setHasInteracted(true);
    addMessage(reply, true);
    
    simulateTyping(() => {
      const { response, buttons } = generateResponse(reply.toLowerCase());
      addMessage(response, false, buttons);
    });
  };

  const navigateQuickReplies = (direction: 'left' | 'right') => {
    setAutoRotateEnabled(false);
    setHasInteracted(true);
    
    const newIndex = direction === 'left' 
      ? Math.max(0, quickReplyIndex - 1)
      : Math.min(quickReplies.length - 4, quickReplyIndex + 1);
    
    setQuickReplyIndex(newIndex);
    setCurrentQuickReplies(quickReplies.slice(newIndex, newIndex + 4));
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowNotification(false);
    setNotificationCount(0);
    setHasInteracted(true);
    
    if (autoOpenTimeoutRef.current) clearTimeout(autoOpenTimeoutRef.current);
    if (notificationTimeoutRef.current) clearTimeout(notificationTimeoutRef.current);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <button
            onClick={handleOpenChat}
            className="bg-neon-pink hover:bg-neon-pink/90 text-white p-4 rounded-full shadow-lg transition-all duration-300"
            aria-label="Open chat with Shakila"
          >
            <MessageCircle size={24} />
          </button>
          
          {showNotification && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
              {notificationCount}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-2rem)] md:w-96">
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="hidden"
      />
      
      <div className="bg-gaming-darker border border-neon-blue/30 rounded-lg shadow-2xl overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-neon-blue/20 to-neon-pink/20 p-4 border-b border-neon-blue/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-neon-pink rounded-full flex items-center justify-center">
                <span className="text-white font-bold font-orbitron">S</span>
              </div>
              <div>
                <h3 className="text-white font-orbitron font-semibold">Shakila</h3>
                <p className="text-xs text-gray-300">
                  {isTyping ? "Typing..." : "Your Trichy Gaming Guide 🎮"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Warnings */}
        {warnings.length > 0 && (
          <div className="p-3 space-y-2">
            {warnings.map((warning) => (
              <div
                key={warning.id}
                className="bg-red-500/20 border border-red-500/50 text-red-200 p-2 rounded text-sm animate-fade-in"
              >
                ⚠️ {warning.text}
              </div>
            ))}
          </div>
        )}

        {/* Messages */}
        <div className="h-64 md:h-80 overflow-y-auto p-4 space-y-3 bg-gaming-dark">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className="max-w-[90%]">
                <div
                  className={`p-3 rounded-lg text-sm ${
                    message.isUser
                      ? 'bg-neon-blue/20 text-white ml-auto'
                      : 'bg-gray-700/50 text-gray-100'
                  } whitespace-pre-line`}
                >
                  {message.text}
                </div>
                
                {/* Action Buttons */}
                {message.buttons && message.buttons.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {message.buttons.map((button, index) => (
                      <Button
                        key={index}
                        onClick={() => handleButtonClick(button.action, button.value)}
                        size="sm"
                        className="bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue border border-neon-blue/50 text-xs h-8"
                      >
                        {button.icon}
                        {button.text}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-700/50 text-gray-100 p-3 rounded-lg text-sm">
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-xs ml-2">Shakila is thinking...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies with Navigation */}
        <div className="p-3 border-t border-neon-blue/30 bg-gaming-darker">
          <div className="flex items-center space-x-2 mb-3">
            <button
              onClick={() => navigateQuickReplies('left')}
              disabled={quickReplyIndex === 0}
              className="p-1 text-neon-blue hover:text-neon-pink transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
            >
              <ChevronLeft size={16} />
            </button>
            
            <div className="flex-1 grid grid-cols-2 gap-1.5">
              {currentQuickReplies.map((reply, index) => (
                <button
                  key={`${reply}-${quickReplyIndex}-${index}`}
                  onClick={() => handleQuickReply(reply)}
                  disabled={isChatDisabled}
                  className="text-xs bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue border border-neon-blue/30 px-2 py-1.5 rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 text-center"
                >
                  {reply}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => navigateQuickReplies('right')}
              disabled={quickReplyIndex >= quickReplies.length - 4}
              className="p-1 text-neon-blue hover:text-neon-pink transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-neon-blue/30 bg-gaming-darker">
          <div className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={isChatDisabled ? "Chat disabled due to warnings" : "Type your message, da..."}
              disabled={isChatDisabled}
              className="flex-1 bg-gaming-dark border border-neon-blue/30 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-neon-blue/50 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isChatDisabled}
              className="bg-neon-pink hover:bg-neon-pink/90 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-2 rounded transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
