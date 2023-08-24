'use strict'

let userInput = document.getElementById('user-input')
let translatedPara = document.getElementById('pig-latin')

let translateBtn = document.getElementById('translate')

let text = ''
const vowels = ['a', 'e', 'i', 'o', 'u']

translateBtn.addEventListener('click', () => {
  text = userInput.value
  let translated = ''

  // Rule 2: Words that begin with a vowel sound
  if(vowels.includes(text.charAt(0))) {
    return translatedPara.innerHTML = `${text}way`
  }

  // Rule 1: Words that start with a consonant cluster
  // loop through the word until vowel is encountered slice from the vowel till the end and slice from start until the vowel
  //then add 'ay' to the end
  for(let i = 0; i < text.length; i++) {
    if(vowels.includes(text.charAt(i))) {
      translated = `${text.slice(i)}${text.slice(0, i)}ay`
      i = text.length
    }
  }

  // Rule 3: Maintain the capitalization after it has been converted to pig-latin
  if(text.charAt(0) == text.charAt(0).toUpperCase()) {
    translated = `${translated.charAt(0).toUpperCase()}${translated.slice(1).toLowerCase()}`
  }

  translatedPara.innerHTML = translated
})
