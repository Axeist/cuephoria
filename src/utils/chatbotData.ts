
// Quick reply options that auto-rotate (removed social media links)
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
  "Student Discounts",
  
  // Additional services
  "Snacks & Drinks",
  "Group Bookings",
  "Special Events",
  "Latest PS5 Games",
  
  // Gaming specific
  "Pool Tournament",
  "Gaming Tips",
  "Equipment Info",
  "Trichy Location"
];

// Quirky responses for random/ambiguous questions with Tamil flavor
const quirkyResponses = [
  "Hmm, that's more mysterious than a hidden Easter egg! 🥚 Maybe try asking about our epic games instead, da? 🎮",
  
  "I'm not sure I caught that, fellow gamer! 🤔 But I do know we have amazing PS5 games and pool tables waiting for you here in Trichy! 🎱",
  
  "Error 404: Answer not found! 😅 But hey, want to hear about our jaw-dropping 50% off deals at our Trichy location instead? 💸",
  
  "That's as confusing as a Dark Souls boss fight! 😵 How about we talk about something easier... like our FREE board games in Trichy? 🎲",
  
  "I'm scratching my digital head here! 🤖 But I bet you'd love our PS5 gaming at just ₹75 per controller here in Tamil Nadu! 🎮",
  
  "That question just respawned my confusion meter! 😂 Want to know about our weekly passes instead? They're absolutely OP, da! 💎",
  
  "Hmm, that's more puzzling than a Zelda dungeon! 🧩 But speaking of puzzles, we have board games in Trichy that might interest you! 🎯",
  
  "I'm buffering... still buffering... 🔄 Oh wait! How about I tell you about our amazing Trichy location instead? 📍",
  
  "That's giving me 'connection timeout' vibes! 📡 But our gaming connection is always strong here in Tamil Nadu! Want details? ⚡",
  
  "I'm not quite leveled up enough to understand that! 📈 But I'm maxed out on Trichy gaming knowledge! Ask me anything about Cuephoria! 🏆",
  
  "That's more random than a loot box drop! 🎁 Speaking of surprises, did you know board games are completely FREE here, da? 🎲",
  
  "System.exe has stopped working! 💻 But our gaming systems in Trichy are always running perfectly! Want to book a session? 🎮",
  
  "I'm getting '42' vibes from that question! 🤓 But I've got real answers about our epic gaming deals in Tamil Nadu! 💰",
  
  "That's as clear as mud in a Chennai monsoon! 🌊 How about I guide you through our crystal-clear pricing instead, da? 💎",
  
  "My AI brain just blue-screened! 💙 But speaking of blue, our neon-lit gaming zone in Trichy is absolutely stunning! ✨",
  
  "That question just triggered my 'random encounter' mode! 🎲 Want to encounter some amazing gaming deals in Trichy instead? 🎮",
  
  "I'm more confused than a noob in a pro lobby! 😅 But I can definitely help you become a Cuephoria pro here in Tamil Nadu! 🏅",
  
  "That's giving me 'glitch in the matrix' energy! 🔴💊 But there's no glitch in our awesome gaming experience, da! 🎯",
  
  "My response algorithm just did a barrel roll! 🌀 But seriously, let me tell you about our barrel-loads of fun in Trichy! 🎪",
  
  "I'm as lost as a player without a map! 🗺️ But I can definitely map out the perfect gaming session for you in Tamil Nadu! 📍"
];

// Tamil-localized quirky responses
const tamildQuirkyResponses = [
  "Vanakkam da! That's more confusing than finding parking in T-Junction! 😅 But hey, our gaming parking is always free! 🎮",
  
  "Aiyo! I'm scratching my digital head like it's a tough Tamil riddle! 🤔 But I know everything about gaming in Trichy! 🎱",
  
  "That question is more twisted than the roads near Rock Fort! 🏰 But finding us is easy - want directions, da? 📍",
  
  "Enna da, that's as mysterious as the old Trichy legends! 🌟 But our gaming legends are being written daily! 🎮",
  
  "That's more puzzling than understanding Chennai traffic! 🚗 But our Trichy gaming zone is smooth sailing! ⚡",
  
  "Aiyo! My circuits are more confused than a tourist in Srirangam! 😵 But I'm crystal clear about our gaming deals! 💎",
  
  "That question just made me do a mental 'thala' adjustment! 🤯 But our games don't need any adjustments - they're perfect! 🎯",
  
  "I'm buffering like an old Doordarshan connection! 📺 But our gaming connection in Trichy is lightning fast! ⚡",
  
  "That's more random than Trichy weather, da! 🌦️ But our gaming climate is always perfect! 🎮",
  
  "Enna da, that's harder to decode than ancient Tamil scriptures! 📜 But our game rules are super simple! 🎲",
  
  "That question just put my brain in 'Vadacurry mode' - totally mixed up! 🍛 But I'm clear about our amazing food and games! 🎮",
  
  "I'm more lost than someone looking for authentic biriyani outside Tamil Nadu! 🍚 But finding great games? I'm your guide! 🎯",
  
  "That's as confusing as explaining cricket to a non-Tamil person! 🏏 But gaming? Universal language, da! 🎮",
  
  "Aiyo! That question just made my circuits do a classical Tamil dance! 💃 But our games are pure modern magic! ✨",
  
  "I'm buffering like WhatsApp during Diwali! 🎆 But our real-time gaming never lags in Trichy! ⚡",
  
  "That's more mysterious than why Trichy is called the 'Heart of Tamil Nadu'! ❤️ But I know why we're the heart of gaming! 🎮",
  
  "Enna da, that's as puzzling as finding good filter coffee outside TN! ☕ But finding good games? You're in the right place! 🎯",
  
  "That question just activated my 'Tamil confusion protocol'! 🤖 But clarity about gaming? 100% guarantee, da! 💯",
  
  "I'm more twisted than the Cauvery near Trichy! 🌊 But our gaming flow is perfectly smooth! 🎮",
  
  "That's harder to understand than why auto-drivers don't use meters! 🛺 But our pricing is crystal clear and fair! 💰"
];

export const getRandomQuirkyResponse = (): string => {
  const randomIndex = Math.floor(Math.random() * quirkyResponses.length);
  return quirkyResponses[randomIndex];
};

export const getRandomTamildResponse = (): string => {
  const randomIndex = Math.floor(Math.random() * tamildQuirkyResponses.length);
  return tamildQuirkyResponses[randomIndex];
};

// Social media links - these should match what's already on the website
export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61574215405586&sk=about",
  instagram: "https://www.instagram.com/cuephoriaclub/",
  // Add other social media links as they exist on the website
};
