
let time = 60
let score = 0
let start = false
document.querySelector(".click").onclick = function(){
    score++
    document.querySelector(".skore").innerHTML=score
}
function reset(){
    score = 0
    document.querySelector(".skore").innerHTML=score

}
document.querySelector(".refresh").onclick=function(){
    reset()
}

document.querySelector(".new-game").onclick=function(){ 
    time = 60
    if (!start){
        start = true
        let interval = setInterval(function(){
            document.querySelector(".time").innerHTML=time
            time--
            if (time<0){
                clearInterval(interval)
                alert("Вы накликали:"+score)
                start = false
            }
        },1000)
    }
   
    reset()
   
}