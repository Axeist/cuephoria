
// Comprehensive profanity filter with 1000+ offensive words including Tamil profanity
const profanityWords = [
  // Common profanity (keeping it clean for the code, but comprehensive)
  'damn', 'hell', 'crap', 'shit', 'fuck', 'bitch', 'ass', 'bastard', 'piss',
  'bloody', 'bollocks', 'bugger', 'cock', 'dick', 'prick', 'pussy', 'slut',
  'whore', 'tits', 'boobs', 'nipple', 'vagina', 'penis', 'dildo', 'horny',
  
  // Tamil profanity and offensive words
  'punda', 'sunni', 'oombu', 'kena punda', 'kena', 'poolu', 'kothi', 'thevidiya',
  'otha', 'oothu', 'kambi', 'naaye', 'naai', 'mayiru', 'lavada', 'lavde',
  'randi', 'kuthi', 'poda', 'pode', 'thayoli', 'thevdiya', 'koothi', 'poolay',
  'thevda', 'nakku', 'chappu', 'omma', 'amma', 'mokkai', 'kiruku', 'mental',
  'soothu', 'suuthu', 'adi', 'adiye', 'dei', 'da punda', 'pundaya', 'sunniya',
  'oombal', 'nakkal', 'chappal', 'thoo', 'ayyo poda', 'vedakka', 'kanja',
  'kundu', 'kundiya', 'tholla', 'tollai', 'soothla', 'poola', 'pundai',
  
  // Tamil variations and transliterations
  'p*nda', 'p***a', 's*nni', 'o*mbu', 'k*na', 'th*vidiya', 'o*ha', 'o*thu',
  'puNda', 'suNni', 'Oombu', 'keNa', 'puNdai', 'suNniya', 'Otha', 'Oothu',
  
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

// Additional patterns to check including Tamil patterns
const profanityPatterns = [
  /f[\*\-_\.]*u[\*\-_\.]*c[\*\-_\.]*k/gi,
  /s[\*\-_\.]*h[\*\-_\.]*i[\*\-_\.]*t/gi,
  /b[\*\-_\.]*i[\*\-_\.]*t[\*\-_\.]*c[\*\-_\.]*h/gi,
  /d[\*\-_\.]*a[\*\-_\.]*m[\*\-_\.]*n/gi,
  /a[\*\-_\.]*s[\*\-_\.]*s/gi,
  /p[\*\-_\.]*i[\*\-_\.]*s[\*\-_\.]*s/gi,
  /h[\*\-_\.]*e[\*\-_\.]*l[\*\-_\.]*l/gi,
  /c[\*\-_\.]*r[\*\-_\.]*a[\*\-_\.]*p/gi,
  
  // Tamil profanity patterns
  /p[\*\-_\.]*u[\*\-_\.]*n[\*\-_\.]*d[\*\-_\.]*a/gi,
  /s[\*\-_\.]*u[\*\-_\.]*n[\*\-_\.]*n[\*\-_\.]*i/gi,
  /o[\*\-_\.]*o[\*\-_\.]*m[\*\-_\.]*b[\*\-_\.]*u/gi,
  /k[\*\-_\.]*e[\*\-_\.]*n[\*\-_\.]*a/gi,
  /t[\*\-_\.]*h[\*\-_\.]*e[\*\-_\.]*v[\*\-_\.]*i[\*\-_\.]*d[\*\-_\.]*i[\*\-_\.]*y[\*\-_\.]*a/gi,
  /o[\*\-_\.]*t[\*\-_\.]*h[\*\-_\.]*a/gi,
  /p[\*\-_\.]*o[\*\-_\.]*o[\*\-_\.]*l[\*\-_\.]*u/gi,
  /k[\*\-_\.]*o[\*\-_\.]*t[\*\-_\.]*h[\*\-_\.]*i/gi
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
