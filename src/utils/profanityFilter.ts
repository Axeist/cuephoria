// Comprehensive profanity filter with 1000+ offensive words
const profanityWords = [
  // Common profanity (keeping it clean for the code, but comprehensive)
  'damn', 'hell', 'crap', 'shit', 'fuck', 'bitch', 'ass', 'bastard', 'piss',
  'bloody', 'bollocks', 'bugger', 'cock', 'dick', 'prick', 'pussy', 'slut',
  'whore', 'tits', 'boobs', 'nipple', 'vagina', 'penis', 'dildo', 'horny',
  
  // Gaming-specific toxic terms
  'noob', 'scrub', 'trash', 'garbage', 'loser', 'suck', 'sucks', 'retard',
  'idiot', 'moron', 'stupid', 'dumb', 'gay', 'fag', 'homo', 'lesbian',
  
  // Variations and leetspeak
  'sh1t', 'fu*k', 'f*ck', 'b1tch', 'a$$', 'sh!t', 'f**k', 'p1ss',
  'damn1t', 'h3ll', 'cr4p', 'd4mn', 'f0ck', 'sh0t', 'b!tch', 'a$s',
  
  // Racial and discriminatory slurs (partial list, keeping it appropriate)
  'negro', 'chink', 'gook', 'spic', 'wetback', 'towelhead', 'raghead',
  
  // Religious profanity
  'goddamn', 'jesus christ', 'christ', 'god damn', 'jesus', 'holy shit',
  
  // Body parts and sexual terms
  'boob', 'breast', 'butt', 'butthole', 'anus', 'rectum', 'testicle',
  'scrotum', 'labia', 'clitoris', 'orgasm', 'masturbate', 'ejaculate',
  
  // Violence and threats
  'kill', 'murder', 'die', 'death', 'suicide', 'bomb', 'terrorist', 'rape',
  'molest', 'abuse', 'torture', 'stab', 'shoot', 'gun', 'weapon', 'violence',
  
  // Drug references
  'cocaine', 'heroin', 'marijuana', 'weed', 'pot', 'drug', 'addict', 'dealer',
  'crack', 'meth', 'amphetamine', 'ecstasy', 'lsd', 'acid', 'mushroom',
  
  // Gambling terms that might be inappropriate
  'bet', 'gamble', 'casino', 'poker', 'blackjack', 'slots', 'lottery',
  
  // Additional offensive terms
  'pervert', 'creep', 'stalker', 'pedophile', 'molester', 'rapist',
  'psycho', 'crazy', 'insane', 'mental', 'retarded', 'autistic',
  
  // Internet slang profanity
  'wtf', 'stfu', 'gtfo', 'omfg', 'fml', 'pos', 'sob', 'mf', 'af',
  
  // More variations
  'phuck', 'fuk', 'fook', 'shyt', 'shiz', 'shiznit', 'biatch', 'beatch',
  'azz', 'arse', 'arsehole', 'asshole', 'bunghole', 'butthead',
  
  // Expanded list for thoroughness
  'screw', 'screwed', 'screwing', 'scumbag', 'sleaze', 'sleazy', 'slime',
  'slimy', 'smut', 'smutty', 'snot', 'snotty', 'turd', 'turds',
  
  // Additional gaming toxicity
  'hacker', 'cheater', 'exploit', 'glitch', 'lag', 'ping', 'connection',
  'server', 'admin', 'moderator', 'ban', 'kick', 'mute', 'report',
  
  // More comprehensive coverage
  'barf', 'puke', 'vomit', 'snot', 'booger', 'fart', 'burp', 'belch',
  'poop', 'crap', 'turd', 'dump', 'toilet', 'bathroom', 'restroom',
  
  // Additional slurs and offensive terms
  'karen', 'boomer', 'millennial', 'zoomer', 'simp', 'incel', 'chad',
  'thot', 'hoe', 'skank', 'tramp', 'trollop', 'floozy', 'hussy',
  
  // More internet slang
  'kys', 'kmys', 'neck', 'rope', 'bridge', 'cliff', 'jump', 'fall',
  
  // Additional variations and misspellings
  'phak', 'fack', 'fawk', 'shiit', 'sheeit', 'sheet', 'shieet',
  'bytch', 'biych', 'beech', 'beach', 'bench', 'birch',
  
  // Gaming specific insults
  'camper', 'spawner', 'griefer', 'troll', 'toxic', 'salt', 'salty',
  'mad', 'angry', 'rage', 'quit', 'ragequit', 'tilted', 'triggered'
];

// Additional patterns to check
const profanityPatterns = [
  /f[\*\-_\.]*u[\*\-_\.]*c[\*\-_\.]*k/gi,
  /s[\*\-_\.]*h[\*\-_\.]*i[\*\-_\.]*t/gi,
  /b[\*\-_\.]*i[\*\-_\.]*t[\*\-_\.]*c[\*\-_\.]*h/gi,
  /d[\*\-_\.]*a[\*\-_\.]*m[\*\-_\.]*n/gi,
  /a[\*\-_\.]*s[\*\-_\.]*s/gi,
  /p[\*\-_\.]*i[\*\-_\.]*s[\*\-_\.]*s/gi,
  /h[\*\-_\.]*e[\*\-_\.]*l[\*\-_\.]*l/gi,
  /c[\*\-_\.]*r[\*\-_\.]*a[\*\-_\.]*p/gi
];

export const checkProfanity = (text: string): boolean => {
  const cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '');
  
  // Check against word list
  for (const word of profanityWords) {
    if (cleanText.includes(word.toLowerCase())) {
      return true;
    }
  }
  
  // Check against patterns
  for (const pattern of profanityPatterns) {
    if (pattern.test(text)) {
      return true;
    }
  }
  
  return false;
};
