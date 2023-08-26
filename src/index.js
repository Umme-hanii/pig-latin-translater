"use strict"

let userInput = document.getElementById("user-input")
let translatedPara = document.getElementById("pig-latin")

let translateBtn = document.getElementById("translate")

translateBtn.addEventListener("click", () => {
  let text = userInput.value
  translatedPara.innerHTML = pigLatin(text)
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

  return translatedWord
}
