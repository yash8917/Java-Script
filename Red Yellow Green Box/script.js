console.log('Hello JavaScript')
let tittlediv=document.getElementById("tittle")

console.log('before ' ,tittlediv.innerText)
let messege ='GoodBye my reple'
tittlediv.innerText=messege;
console.log('After ' ,tittlediv.innerText)
tittlediv.innerHTML= `<p>${messege}</p>`


tittlediv.style.color='red'
tittlediv.style.backgroundColor='black'


// ---------------------------


let reddiv=document.getElementById("red")
let yellowdiv=document.getElementById("yellow")
let greendiv=document.getElementById("green")
  click=()=> console.log('User choose ')

const box=document.querySelectorAll('.colourBox')
console.log(box)

// console.log(box[0].value)
// console.log(box[1].value)
// console.log(box[2].value)

//forEach
const time={'red': 0, 'yellow' :0, 'green' : 0}
box.forEach(box =>{
  box.onclick=()=> {
    time[box.value] +=1
    box.innerText=time[box.value]
    // console.log(box.value)
  }
})
const clearbtn =document.getElementById('clear-btn')
function clearGmae (){
  time.red=0
  time.yellow=0
  time.green=0
  box.forEach(box => box.innerText='')
  
}
clearbtn.onclick = () => clearGmae()

