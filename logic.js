let form = document.querySelector("#foram");
let percentage = document.querySelector(".percen")
let correctAnswer = ["a", "c", "a","c"]
let title = document.querySelector(".title")
form.addEventListener("submit", (e) =>{
e.preventDefault();
useranswer =[
    form.q1.value ,
    form.q2.value,
    form.q3.value,
    form.q4.value
]
let score = 0;
for(let i=0; i < correctAnswer.length; i++){

if(correctAnswer[i] === useranswer[i]){
        score += 25
}
}
let output = 0
const timer = setInterval(()=>{
percentage.textContent = `${output}%`
if( score === output){
    clearInterval(timer)
}else{
    output++;
}

},10)





title.classList.remove("d-none")
// percentage.innerHTML = `${score}%`

scrollTo(0,0)



})


