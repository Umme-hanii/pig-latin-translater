"use strict"

let userInput = document.getElementById("user-input")
let translatedPara = document.getElementById("pig-latin")

let translateBtn = document.getElementById("translate")
let generateBtn = document.getElementById("generate")

translateBtn.addEventListener("click", () => {
  let text = userInput.value.trim()
  translatedPara.innerHTML = pigLatin(text)
})

generateBtn.addEventListener("click", () => {
  userInput.value = generateSentence()

  translatedPara.innerHTML = pigLatin(userInput.value)
})

//split sentence at spaces
//from words array, convert each word  to pig latin

function pigLatin(sentence) {
  let translated = ""
  let wordsArr = sentence.split(" ")

  wordsArr.map((word) => {
    translated += transformEachWord(word) + " "
  })

  return translated
}

function transformEachWord(word) {
  const vowels = ["a", "e", "i", "o", "u"]
  let translatedWord = ""

  // Rule 2: Words that begin with a vowel sound
  if (vowels.includes(word.charAt(0).toLowerCase())) {
    translatedWord = `${word}way`
  }

  // Rule 1: Words that start with a consonant cluster
  // loop through the word until vowel is encountered slice from the vowel till the end and slice from start until the vowel
  //then add 'ay' to the end
  else {
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word.charAt(i))) {
        translatedWord = `${word.slice(i)}${word.slice(0, i)}ay`
        i = word.length
      }
    }
  }

  // Rule 3: Maintain the capitalization after it has been converted to pig-latin
  if (word.charAt(0) == word.charAt(0).toUpperCase()) {
    translatedWord = `${translatedWord.charAt(0).toUpperCase()}${translatedWord
      .slice(1)
      .toLowerCase()}`
  }

  // Rule 4: For words with punctuation
  // Move the punctuation to the end of the Pig Latin word.
  let PunctuationsArr = detectPunctuation(word)
  if (PunctuationsArr) {
    for (let i = 0; i < PunctuationsArr.length; i++) {
      const index = translatedWord.indexOf(PunctuationsArr[i])
      if (index > -1) {
        translatedWord = `${translatedWord.slice(0,index)}${translatedWord.slice(index + 1)}${translatedWord[index]}`
      }
    }
  }

  return translatedWord
}

//Check if there are any punctuation marks present in the input
function detectPunctuation(word) {
  const puctuationRegex = /[!"#$%&'()*+,-./:;=?@[\]^_`{|}~]/g

  const punctuations = word.match(puctuationRegex)
  return punctuations != null ? punctuations : []
}

//Generate random sentence
function generateSentence() {
  const subjects = ["I", "You", "He", "She", "They", "We"]
  const verbs = ["eat", "sleep", "run", "play", "write"]
  const objects = ["an apple", "a book", "the game", "music", "a letter"]

  let subject = generateWord(subjects)
  let verb = generateWord(verbs)
  let object = generateWord(objects)

  return `${subject} ${verb} ${object}`
}

function generateWord(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}
