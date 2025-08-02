// Morse code to letter mapping
const morseToLetter = {
  '.-': 'A',    '-...': 'B',  '-.-.': 'C',
  '-..': 'D',   '.': 'E',     '..-.': 'F',
  '--.': 'G',   '....': 'H',  '..': 'I',
  '.---': 'J',  '-.-': 'K',   '.-..': 'L',
  '--': 'M',    '-.': 'N',    '---': 'O',
  '.--.': 'P',  '--.-': 'Q',  '.-.': 'R',
  '...': 'S',   '-': 'T',     '..-': 'U',
  '...-': 'V',  '.--': 'W',   '-..-': 'X',
  '-.--': 'Y',  '--..': 'Z',
  '-----': '0', '.----': '1', '..---': '2',
  '...--': '3', '....-': '4', '.....': '5',
  '-....': '6', '--...': '7', '---..': '8',
  '----.': '9'
};

// Letter to emoji mapping
const letterToEmoji = {
  A: '🍎', B: '🐝', C: '🐱', D: '🐬', E: '🦅',
  F: '🐸', G: '🦒', H: '🏠', I: '🍦', J: '🕹️',
  K: '🔑', L: '🦁', M: '🌝', N: '🎶', O: '🐙',
  P: '🥞', Q: '👑', R: '🌈', S: '🐍', T: '🌴',
  U: '☂️', V: '🎻', W: '🌊', X: '❌', Y: '🛳️',
  Z: '🦓',
  0: '0️⃣', 1: '1️⃣', 2: '2️⃣', 3: '3️⃣', 4: '4️⃣',
  5: '5️⃣', 6: '6️⃣', 7: '7️⃣', 8: '8️⃣', 9: '9️⃣'
};

// Full-word to emoji mapping (word-level)
const wordToEmoji = {
  HELLO: '👋😊',
  LOVE: '❤️😍',
  FIRE: '🔥🔥',
  COOL: '😎🆒',
  TIMEOUT: '⏱️❌',
  SLEEP: '😴🛌',
  CAT: '🐱🐾',
  DOG: '🐶🐾',
  HAPPY: '😁🎉',
  SAD: '😢💧',
  FOOD: '🍕🍔🍟',
  WATER: '💧🚰',
  WORK: '💼🧠',
  STUDY: '📚🧠',
  BORED: '🥱📴',
  FUNNY: '😂🤣',
  MUSIC: '🎵🎧',
  DANCE: '💃🕺',
  COFFEE: '☕🔥',
  MORSE: '📡📻',
  EMOJI: '😜🔤',
  SMILE: '😄😁',
  CRY: '😭💔',
  ANGRY: '😡💢',
  LAUGH: '🤣😆',
  BRAIN: '🧠⚡',
  HUNGRY: '🍽️😋',
  RUN: '🏃💨',
  WALK: '🚶‍♂️👣',
  STOP: '✋🚫',
  GO: '🟢🚀',
  SING: '🎤🎶',
  CODE: '💻🧑‍💻',
  ERROR: '❌💥',
  DEBUG: '🕵️‍♂️🔍',
  TIRED: '🥱😩',
  GAME: '🎮🕹️',
  TRAVEL: '✈️🧳',
  PARTY: '🎉🥳',
  ZOMBIE: '🧟‍♂️🧠',
  ALIEN: '👽🛸',
  CLOWN: '🤡🎪',
  SUGAR: '🍬🍭',
  MEME: '📱😹',
  GHOST: '👻💨',
  SICK: '🤒🧻',
  PANIC: '😱🚨',
  CHAOS: '🌪️🌀',
  WOW: '😲🤯',
  YAWN: '😪😴',
  WASTE: '🗑️🚽',
  USELESS: '🪦📉',
  INTERNET: '🌐📡',
  HACK: '💻🔓',
  PROJECT: '📁🔧',
  CATDOG: '🐱🐶',
  ROBOT: '🤖🔋',
  IDEA: '💡⚙️',
  SPAM: '📩🥫',
  BROKEN: '🔧🧨',
  SMART: '🧠📈',
  DUMB: '🙃📉',
  LAZY: '🛋️🛌',
  FAST: '🚀⚡',
  SLOW: '🐢⏳',
  NOISE: '🔊📢',
  SILENT: '🤫🔇',
  SUSHI: '🍣🥢',
  BURGER: '🍔🧀',
  PIZZA: '🍕🍴',
  DONUT: '🍩🍫',
  ICECREAM: '🍦❄️',
  WINNER: '🏆🥇',
  LOSER: '😵📉',
  FROG: '🐸🎩',
  BANANA: '🍌💛',
  SOS: '🆘🚨'
};

// Main translation function
function translateMorseToEmoji(morseInput) {
  // Input validation
  if (!morseInput || !morseInput.trim()) {
    return '';
  }

  // Clean input - remove extra whitespace and invalid characters
  const cleanInput = morseInput.trim().replace(/[^.\-\s\/]/g, '');
  
  if (!cleanInput) {
    return '';
  }

  // Handle different word separation formats
  let words;
  if (cleanInput.includes(' / ')) {
    // Traditional format with " / " as word separator
    words = cleanInput.split(' / ');
  } else if (cleanInput.includes('   ')) {
    // Multiple spaces as word separator
    words = cleanInput.split(/\s{3,}/);
  } else {
    // Treat as single word (common for simple examples)
    words = [cleanInput];
  }

  let finalEmoji = '';

  words.forEach(morseWord => {
    if (!morseWord.trim()) return;
    
    const letterCodes = morseWord.trim().split(/\s+/);
    let decodedWord = '';

    // Convert Morse to letters
    for (let code of letterCodes) {
      if (code && morseToLetter[code]) {
        decodedWord += morseToLetter[code];
      }
    }

    if (!decodedWord) return;

    const upperWord = decodedWord.toUpperCase();

    // First check full-word emoji match
    if (wordToEmoji[upperWord]) {
      finalEmoji += wordToEmoji[upperWord] + ' ';
    } else {
      // Fallback to letter-to-emoji
      for (let char of upperWord) {
        finalEmoji += letterToEmoji[char] || '❓';
      }
      finalEmoji += ' ';
    }
  });

  return finalEmoji.trim();
}

// HTML Interface Functions

function handleInput() {
  const input = document.getElementById('morseInput').value;
  const translateBtn = document.getElementById('translateBtn');
  
  // Enable/disable translate button based on input
  if (input.trim()) {
    translateBtn.disabled = false;
    translateBtn.classList.remove('opacity-50', 'cursor-not-allowed');
  } else {
    translateBtn.disabled = true;
    translateBtn.classList.add('opacity-50', 'cursor-not-allowed');
  }
}

function translateMorse() {
  const input = document.getElementById('morseInput').value;
  const output = document.getElementById('emojiOutput');
  
  if (!input.trim()) {
    output.innerHTML = '<div class="placeholder-text text-base text-gray-500 italic">Please enter some Morse code first! 📻</div>';
    return;
  }

  // Show loading state
  output.innerHTML = '<div class="loading text-base text-gray-500 italic">Translating... ⚡</div>';
  
  // Small delay for better UX
  setTimeout(() => {
    const result = translateMorseToEmoji(input);
    
    if (result) {
      output.innerHTML = result;
      output.classList.add('has-content');
      
      // Remove placeholder styling
      const placeholder = output.querySelector('.placeholder-text');
      if (placeholder) {
        placeholder.remove();
      }
    } else {
      output.innerHTML = '<div class="text-base text-red-500 italic">Invalid Morse code or no translation found! 🤔</div>';
    }
  }, 300);
}

function loadExample(exampleMorse) {
  const input = document.getElementById('morseInput');
  input.value = exampleMorse;
  
  // Trigger input handler to update button state
  handleInput();
  
  // Auto-translate the example
  translateMorse();
  
  // Add visual feedback
  input.classList.add('border-green-400');
  setTimeout(() => {
    input.classList.remove('border-green-400');
  }, 1000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Set initial button state
  handleInput();
  
  // Add Enter key support for translation
  document.getElementById('morseInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.ctrlKey) {
      translateMorse();
    }
  });
});