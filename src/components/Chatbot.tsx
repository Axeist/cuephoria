
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ExternalLink, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { checkProfanity } from '../utils/profanityFilter';
import { quickReplies, getRandomQuirkyResponse } from '../utils/chatbotData';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface Warning {
  id: string;
  text: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey there, gamer! 👋 I'm Shakila, your friendly Cuephoria guide! Ready to dive into some epic gaming action? What can I help you with today? 🎮✨",
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
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-rotate quick replies every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (quickReplyIndex + 4) % quickReplies.length;
      setCurrentQuickReplies(quickReplies.slice(nextIndex, nextIndex + 4));
      setQuickReplyIndex(nextIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [quickReplyIndex]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addWarning = (text: string) => {
    const newWarning: Warning = {
      id: Date.now().toString(),
      text
    };
    setWarnings(prev => [...prev, newWarning]);
    
    // Remove warning after 5 seconds
    setTimeout(() => {
      setWarnings(prev => prev.filter(w => w.id !== newWarning.id));
    }, 5000);
  };

  const handleSendMessage = () => {
    if (!inputText.trim() || isChatDisabled) return;

    // Check for profanity
    if (checkProfanity(inputText)) {
      const newCount = profanityCount + 1;
      setProfanityCount(newCount);
      
      addWarning(`Warning ${newCount}/3: Let's keep it gaming-friendly! 🎮`);
      
      if (newCount >= 3) {
        setIsChatDisabled(true);
        addMessage("Whoa there, keyboard warrior! 😤 Looks like someone needs a timeout. Maybe try some meditation... or better yet, channel that energy into some epic gaming! 🎮💀", false);
      }
      
      setInputText('');
      return;
    }

    addMessage(inputText, true);
    
    // Generate response based on input
    const response = generateResponse(inputText.toLowerCase());
    setTimeout(() => addMessage(response, false), 1000);
    
    setInputText('');
  };

  const handleQuickReply = (reply: string) => {
    if (isChatDisabled) return;
    addMessage(reply, true);
    
    const response = generateResponse(reply.toLowerCase());
    setTimeout(() => addMessage(response, false), 1000);
  };

  const generateResponse = (input: string) => {
    // Pool games pricing
    if (input.includes('pool') || input.includes('8-ball') || input.includes('snooker') || input.includes('billiards')) {
      return "🎱 Pool Games are absolutely epic! We've got professional tables waiting for you:\n\n💰 Regular Price: ₹300/day\n🔥 Opening Offer: 50% OFF - Now just ₹150!\n\nThat's a whole day of pool mastery! Ready to break some balls? 😎";
    }
    
    // PS5 gaming
    if (input.includes('ps5') || input.includes('playstation') || input.includes('console') || input.includes('controller')) {
      return "🎮 PS5 Gaming is where the magic happens! We've got the latest titles and premium controllers:\n\n💰 Regular Price: ₹150 per controller\n🔥 Opening Offer: 50% OFF - Now just ₹75!\n\nTime to level up your gaming experience! 🚀";
    }
    
    // Board games
    if (input.includes('board') || input.includes('uno') || input.includes('ludo') || input.includes('monopoly') || input.includes('free')) {
      return "🎲 Board Games are totally FREE and absolutely fun! We've got:\n\n🃏 UNO - Classic card chaos!\n🎯 LUDO - Roll the dice and race!\n🏠 Monopoly - Build your empire!\n\nPlus amazing snacks and drinks to fuel your gaming sessions! 🍕🥤";
    }
    
    // Booking
    if (input.includes('book') || input.includes('reserve') || input.includes('slot')) {
      return "📅 Ready to secure your gaming throne? Head over to our booking page!\n\n🔗 Book now: cuephoria.in/book\n\nDon't wait - the best gaming spots fill up fast! ⚡";
    }
    
    // Live occupancy
    if (input.includes('available') || input.includes('busy') || input.includes('occupancy') || input.includes('tables') || input.includes('live')) {
      return "👀 Want to see what's happening live? Check our real-time availability!\n\n🔗 Live Status: admin.cuephoria.in/public/sessions\n\nSee which tables and controllers are free right now! 📊";
    }
    
    // Weekly passes
    if (input.includes('weekly') || input.includes('pass') || input.includes('membership')) {
      return "💎 Weekly Passes - The ultimate gaming deal!\n\n🎮 PS5 Solo Weekly Pass - ₹399 (was ₹799!)\n• 7 hours of gaming/week (1 hour/day)\n• ₹100 worth of snacks included\n• Buy 3 passes, get 1 FREE!\n\n🎱 Table Gaming Weekly Pass - ₹799 (was ₹1,599!)\n• 7 hours of table time/week\n• ₹100 worth of snacks included\n\n🎯 All Pass Holders Get:\n• Flat 50% off extra game time\n• ₹5 loyalty points for every ₹100 spent\n\nNow that's what I call a power-up! 💪";
    }
    
    // Contact info
    if (input.includes('contact') || input.includes('phone') || input.includes('call') || input.includes('number')) {
      return "📞 Need to reach us? Here's how to connect with the Cuephoria crew:\n\n📱 Phone: +91 86376 25155\n📧 Email: contact@cuephoria.in\n⏰ Hours: 11:00 AM – 11:00 PM\n\nWe're always here to help level up your gaming experience! 🎮";
    }
    
    // Location
    if (input.includes('location') || input.includes('address') || input.includes('where') || input.includes('directions') || input.includes('map')) {
      return "📍 Find us and join the gaming revolution!\n\n🗺️ Get Directions: https://maps.app.goo.gl/ghXWYG9eLWpEwrK98\n\nWe're easy to find and even easier to love! See you soon! 🚀";
    }
    
    // Pricing general
    if (input.includes('price') || input.includes('cost') || input.includes('how much') || input.includes('rates')) {
      return "💰 Here's our epic pricing breakdown:\n\n🎱 Pool Games: ₹150 (50% off from ₹300!)\n🎮 PS5 Gaming: ₹75 per controller (50% off from ₹150!)\n🎲 Board Games: FREE with snacks & drinks!\n\n💎 Weekly Passes available for even more savings! Want details? 🤔";
    }
    
    // Hours/timing
    if (input.includes('time') || input.includes('hours') || input.includes('open') || input.includes('close') || input.includes('when')) {
      return "⏰ We're open for epic gaming sessions:\n\n🕚 Daily: 11:00 AM – 11:00 PM\n\nThat's 12 hours of pure gaming bliss every single day! When are you planning to visit? 🎮";
    }
    
    // Random/ambiguous responses
    return getRandomQuirkyResponse();
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-neon-pink hover:bg-neon-pink/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 animate-pulse"
          aria-label="Open chat with Shakila"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-2rem)] md:w-96">
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
                <p className="text-xs text-gray-300">Your Gaming Guide 🎮</p>
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
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.isUser
                    ? 'bg-neon-blue/20 text-white ml-auto'
                    : 'bg-gray-700/50 text-gray-100'
                } whitespace-pre-line`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className="p-3 border-t border-neon-blue/30 bg-gaming-darker">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {currentQuickReplies.map((reply, index) => (
              <button
                key={`${reply}-${index}`}
                onClick={() => handleQuickReply(reply)}
                disabled={isChatDisabled}
                className="text-xs bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue border border-neon-blue/30 px-2 py-1 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {reply}
              </button>
            ))}
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
              placeholder={isChatDisabled ? "Chat disabled due to warnings" : "Type your message..."}
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
