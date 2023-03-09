const emojiEl = document.getElementById("emoji-container")
const inputEL = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const buttonEl = document.getElementsByTagName("button")
const emoji = ["🚬", "💨", "🌿"]


pushBtn.addEventListener("click", function () {
  const trimmed = inputEL.value.trim();
  if (trimmed){
    emoji.push(trimmed)
    inputEL.value = ""
    render()
  }else{
    inputEL.value = ""
  }
})

unshiftBtn.addEventListener("click", function () {
  const trimmed = inputEL.value.trim();
  if (trimmed){
    emoji.unshift(trimmed)
    inputEL.value = ""
    render()
  }else{
    inputEL.value = ""
  }
})

shiftBtn.addEventListener("click", function () {
    emoji.shift()
    inputEL.value = ""
    render()
  }
)

popBtn.addEventListener("click", function () {
    emoji.pop()
    inputEL.value = ""
    render()
})

function render() {
  let emojiList = ""
  for (let i = 0; i < emoji.length; i++) {
    emojiList += `
              <span> ${emoji[i]} </span>
          `
  }
  emojiEl.innerHTML = emojiList

}
render()




