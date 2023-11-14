const minNum = document.getElementById("minNum")
const maxNum = document.getElementById("maxNum")
const guessNum = document.getElementById("guessNum")
const btn = document.getElementById("btn")

let smallNum = 1
let bigNum = 100
let finalNum = Math.floor(Math.random()*98+2)
let count = 5

btn.addEventListener("click", ()=>{
    let answerNum = parseInt(guessNum.value)

    if(count==0){
        alert("已達輸入次數上限")
        guessNum.disabled=true
    }

    if(answerNum==finalNum){
        alert("恭喜答對")
    }else if(answerNum<smallNum || answerNum>bigNum){
        guessNum.value=" "
        alert("超出範圍，請再猜一次")
        alert("還剩下"+count+"次")
    }else if(answerNum>finalNum){
        bigNum = answerNum
        maxNum.innerText=answerNum
        guessNum.value=" "
        alert("再來一次")
        alert("還剩下"+count+"次")
    }else if(answerNum<finalNum){
        smallNum = answerNum
        minNum.innerText=answerNum
        guessNum.value=" "
        alert("再來一次")
        alert("還剩下"+count+"次")
    }
    count-=1
})