
const typeWriter = (sentence) => {
let timer = 0
for (let char in sentence){
  timer += 50
  setTimeout(() => {
    process.stdout.write(sentence[char])
    },timer)
  }
}


const sentence = "hello there from lighthouse labs";

typeWriter(sentence)