const quotes = [
    "Never get distressed or elsed you get depressed.",
    "Get busy living or get busy dying.",
    "The purpose living is to be happy.",
    "Earth is for living not for wishing to die.",
    "God has a reason for your life.",
    "God has blessed you with so many things left for you to use them.",
    "life is what happens when you are busy making othe plans."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
    while (true) {
        const randomIdx=Math.floor(Math.random() * quotes.length)
        if (usedIndexes.has(randomIdx)) continue 
            
        const quote= quotes[randomIdx]
        quoteElement.innerHTML= quote;
        usedIndexes.add(randomIdx)
        break
    }
}
