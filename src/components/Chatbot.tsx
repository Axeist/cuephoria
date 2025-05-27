
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [showNotification, setShowNotification] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
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
  const [autoRotateEnabled, setAutoRotateEnabled] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const autoOpenTimeoutRef = useRef<NodeJS.Timeout>();
  const notificationTimeoutRef = useRef<NodeJS.Timeout>();

  // Show notification after 10 seconds, auto-open after 50 seconds total
  useEffect(() => {
    if (!hasInteracted) {
      notificationTimeoutRef.current = setTimeout(() => {
        setShowNotification(true);
        setNotificationCount(1);
        
        // Auto-open after additional 40 seconds (50 total)
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

  // Auto-rotate quick replies with smooth gliding
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

  const handleSendMessage = () => {
    if (!inputText.trim() || isChatDisabled) return;

    setHasInteracted(true);

    if (checkProfanity(inputText)) {
      const newCount = profanityCount + 1;
      setProfanityCount(newCount);
      
      addWarning(`Warning ${newCount}/3: Let's keep it gaming-friendly! 🎮`);
      
      if (newCount >= 3) {
        setIsChatDisabled(true);
        simulateTyping(() => {
          addMessage("Whoa there, keyboard warrior! 😤 Looks like someone needs a timeout. Maybe try some meditation... or better yet, channel that energy into some epic gaming! 🎮💀", false);
        });
      }
      
      setInputText('');
      return;
    }

    addMessage(inputText, true);
    
    simulateTyping(() => {
      const response = generateResponse(inputText.toLowerCase());
      addMessage(response, false);
    });
    
    setInputText('');
  };

  const handleQuickReply = (reply: string) => {
    if (isChatDisabled) return;
    
    setHasInteracted(true);
    addMessage(reply, true);
    
    simulateTyping(() => {
      const response = generateResponse(reply.toLowerCase());
      addMessage(response, false);
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

  const generateResponse = (input: string) => {
    // Enhanced responses that guide towards booking
    if (input.includes('pool') || input.includes('8-ball') || input.includes('snooker') || input.includes('billiards')) {
      return "🎱 Pool Games are absolutely epic! We've got professional tables waiting for you:\n\n💰 Regular Price: ₹300/day\n🔥 Opening Offer: 50% OFF - Now just ₹150!\n\nThat's a whole day of pool mastery! Want me to help you book a session right now? Just say 'book now' and I'll get you sorted! 😎";
    }
    
    if (input.includes('ps5') || input.includes('playstation') || input.includes('console') || input.includes('controller')) {
      return "🎮 PS5 Gaming is where the magic happens! We've got the latest titles and premium controllers:\n\n💰 Regular Price: ₹150 per controller\n🔥 Opening Offer: 50% OFF - Now just ₹75!\n\nReady to secure your gaming throne? I can help you book a slot instantly! Just let me know when you'd like to play! 🚀";
    }
    
    if (input.includes('board') || input.includes('uno') || input.includes('ludo') || input.includes('monopoly') || input.includes('free')) {
      return "🎲 Board Games are totally FREE and absolutely fun! We've got UNO, LUDO, Monopoly and more!\n\nPerfect for hanging out with friends! Want to combine this with some PS5 or pool action? I can book you a mixed session for the ultimate gaming experience! 🍕🥤";
    }
    
    if (input.includes('book') || input.includes('reserve') || input.includes('slot') || input.includes('book now')) {
      return "🎯 Awesome! Let's get you booked! Here's the fastest way:\n\n🔗 Instant Booking: cuephoria.in/book\n\nOr if you prefer, I can guide you through our booking process right here! What type of gaming session interests you most?\n\n🎮 PS5 Gaming (₹75 per controller)\n🎱 Pool Games (₹150 per day)\n🎲 Board Games (FREE with snacks)\n\nJust pick one and I'll help you secure the perfect time slot! ⚡";
    }
    
    if (input.includes('available') || input.includes('busy') || input.includes('occupancy') || input.includes('tables') || input.includes('live')) {
      return "👀 Smart move checking availability first! Here's the live scoop:\n\n🔗 Real-time Status: admin.cuephoria.in/public/sessions\n\nYou can see exactly which tables and controllers are free right now! Spotted something you like? I can help you book it immediately before someone else grabs it! 📊⚡";
    }
    
    if (input.includes('weekly') || input.includes('pass') || input.includes('membership')) {
      return "💎 Weekly Passes are INCREDIBLE value! Check this out:\n\n🎮 PS5 Solo Weekly Pass - ₹399 (was ₹799!)\n🎱 Table Gaming Weekly Pass - ₹799 (was ₹1,599!)\n\nBoth include ₹100 worth of snacks and 50% off extra time!\n\nWant me to help you get started with a weekly pass? It's literally the best deal in town! 💪";
    }
    
    if (input.includes('contact') || input.includes('phone') || input.includes('call') || input.includes('number')) {
      return "📞 Need to chat with our team? Here's how:\n\n📱 Phone: +91 86376 25155\n📧 Email: contact@cuephoria.in\n⏰ Hours: 11:00 AM – 11:00 PM\n\nBut hey, I'm here to help you book right now! What would you like to reserve? I can get you sorted in seconds! 🚀";
    }
    
    if (input.includes('location') || input.includes('address') || input.includes('where') || input.includes('directions') || input.includes('map')) {
      return "📍 Easy to find, easier to love!\n\n🗺️ Get Directions: https://maps.app.goo.gl/ghXWYG9eLWpEwrK98\n\nOnce you know where we are, want me to book you a session? I can reserve your spot so it's ready when you arrive! What gaming adventure calls to you? 🎮";
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('how much') || input.includes('rates')) {
      return "💰 Here's our epic pricing breakdown:\n\n🎱 Pool Games: ₹150 (50% off!)\n🎮 PS5 Gaming: ₹75 per controller (50% off!)\n🎲 Board Games: FREE!\n\nThese prices are INSANE for what you get! Ready to lock in these amazing rates? I can book your session right now! Which game mode speaks to your soul? 🤔";
    }
    
    if (input.includes('time') || input.includes('hours') || input.includes('open') || input.includes('close') || input.includes('when')) {
      return "⏰ We're open for epic adventures:\n\n🕚 Daily: 11:00 AM – 11:00 PM\n\nThat's 12 hours of pure gaming bliss! What time works best for you? I can check availability and book you the perfect slot! Early bird or night owl? 🦉";
    }
    
    // Default response that guides to booking
    return getRandomQuirkyResponse() + "\n\nBut hey, while I have your attention - want to book an amazing gaming session? I can get you sorted in under 30 seconds! 🎮⚡";
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
                  {isTyping ? "Typing..." : "Your Gaming Guide 🎮"}
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
                  <span className="text-xs ml-2">Shakila is typing...</span>
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
              className="p-1 text-neon-blue hover:text-neon-pink transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>
            
            <div className="flex-1 grid grid-cols-2 gap-2">
              {currentQuickReplies.map((reply, index) => (
                <button
                  key={`${reply}-${quickReplyIndex}-${index}`}
                  onClick={() => handleQuickReply(reply)}
                  disabled={isChatDisabled}
                  className="text-xs bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue border border-neon-blue/30 px-2 py-1 rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {reply}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => navigateQuickReplies('right')}
              disabled={quickReplyIndex >= quickReplies.length - 4}
              className="p-1 text-neon-blue hover:text-neon-pink transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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
