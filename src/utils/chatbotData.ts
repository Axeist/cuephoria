
// Quick reply options that auto-rotate
export const quickReplies = [
  // Pricing and offers
  "Pool Games Pricing",
  "PS5 Gaming Rates", 
  "Board Games Info",
  "Weekly Passes",
  
  // Booking and availability
  "Book a Slot",
  "Check Availability", 
  "Live Occupancy",
  "Monthly Passes",
  
  // Location and contact
  "Contact Details",
  "Location & Directions",
  "Opening Hours",
  "Social Media",
  
  // Additional services
  "Snacks & Drinks",
  "Group Bookings",
  "Student Discounts",
  "Special Events",
  
  // Gaming specific
  "Latest PS5 Games",
  "Pool Tournament",
  "Gaming Tips",
  "Equipment Info"
];

// Quirky responses for random/ambiguous questions
const quirkyResponses = [
  "Hmm, that's more mysterious than a hidden Easter egg! 🥚 Maybe try asking about our epic games instead? 🎮",
  
  "I'm not sure I caught that, fellow gamer! 🤔 But I do know we have amazing PS5 games and pool tables waiting for you! 🎱",
  
  "Error 404: Answer not found! 😅 But hey, want to hear about our jaw-dropping 50% off deals instead? 💸",
  
  "That's as confusing as a Dark Souls boss fight! 😵 How about we talk about something easier... like our FREE board games? 🎲",
  
  "I'm scratching my digital head here! 🤖 But I bet you'd love our PS5 gaming at just ₹75 per controller! 🎮",
  
  "That question just respawned my confusion meter! 😂 Want to know about our weekly passes instead? They're absolutely OP! 💎",
  
  "Hmm, that's more puzzling than a Zelda dungeon! 🧩 But speaking of puzzles, we have board games that might interest you! 🎯",
  
  "I'm buffering... still buffering... 🔄 Oh wait! How about I tell you about our amazing location instead? 📍",
  
  "That's giving me 'connection timeout' vibes! 📡 But our gaming connection is always strong! Want details? ⚡",
  
  "I'm not quite leveled up enough to understand that! 📈 But I'm maxed out on gaming knowledge! Ask me anything about Cuephoria! 🏆",
  
  "That's more random than a loot box drop! 🎁 Speaking of surprises, did you know board games are completely FREE here? 🎲",
  
  "System.exe has stopped working! 💻 But our gaming systems are always running perfectly! Want to book a session? 🎮",
  
  "I'm getting '42' vibes from that question! 🤓 But I've got real answers about our epic gaming deals! 💰",
  
  "That's as clear as mud in a swamp biome! 🌊 How about I guide you through our crystal-clear pricing instead? 💎",
  
  "My AI brain just blue-screened! 💙 But speaking of blue, our neon-lit gaming zone is absolutely stunning! ✨",
  
  "That question just triggered my 'random encounter' mode! 🎲 Want to encounter some amazing gaming deals instead? 🎮",
  
  "I'm more confused than a noob in a pro lobby! 😅 But I can definitely help you become a Cuephoria pro! 🏅",
  
  "That's giving me 'glitch in the matrix' energy! 🔴💊 But there's no glitch in our awesome gaming experience! 🎯",
  
  "My response algorithm just did a barrel roll! 🌀 But seriously, let me tell you about our barrel-loads of fun! 🎪",
  
  "I'm as lost as a player without a map! 🗺️ But I can definitely map out the perfect gaming session for you! 📍"
];

export const getRandomQuirkyResponse = (): string => {
  const randomIndex = Math.floor(Math.random() * quirkyResponses.length);
  return quirkyResponses[randomIndex];
};

// Social media links - these should match what's already on the website
export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61574215405586&sk=about",
  instagram: "https://www.instagram.com/cuephoriaclub/",
  // Add other social media links as they exist on the website
};
