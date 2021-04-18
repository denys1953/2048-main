let field = document.getElementById('field-type')
let score = document.getElementById('score')
let best = document.getElementById('best')
let container = document.getElementsByClassName('container')
let btn = document.getElementsByClassName('btn')
btn[0].addEventListener('click', buttonLeft)
btn[1].addEventListener('click', buttonDown)
btn[2].addEventListener('click', buttonUp)
btn[3].addEventListener('click', buttonRight)
let elemCount, count2, count = 0
let array = []
let array2 = []
let subarray = []
let subarray2 = []
let filter = []
let size = 4
let sum = 0
const windowInnerWidth = window.innerWidth

if (windowInnerWidth <= 460) {
   container[0].style.width = 340 + 'px'
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
   console.log('mobile')
} else {
   for (let i = 0; i < btn.length; i++) {
      btn[i].hidden = true
   }
}

for (let i = 0; i < 16; i++) {
   let elem = document.createElement('div')
   field.append(elem);
   elem.className = 'elem'
   elem.innerHTML = " ";
}

let elems = document.getElementsByClassName('elem')

function generateNums(a) {
   setTimeout(() => {
      count = 0
      count2 = 0
      for (let i = 0; i < elems.length; i++) {
         if (elems[i].innerHTML == '&nbsp;') {
            count2++
         }
      }
      if (count2 > 0) {
         while (count < a) {
            let randNum = randomInteger(0, 15)
            if (elems[randNum].innerHTML !== '&nbsp;') {
               continue
            } else {
               elems[randNum].innerHTML = 2
               scoreCount()
            }
            count++
         }
      }
   }, 200)
   setColor()
}

generateNums(2)

function mainLeft() {
   let sss
   for (let i = 0; i < subarray.length; i++) {
      sss = subarray[i].filter(num => num.length < 5)
      while (sss.length < 4) sss.push('&nbsp;')
      filter.push(sss)  
      if (filter[i][0] === filter[i][1] && filter[i][0] !== '&nbsp;') {
         filter[i][0] *= 2; filter[i][1] = '&nbsp;'
      } else if (filter[i][1] === filter[i][2] && filter[i][1] !== '&nbsp;') {
         filter[i][1] *= 2; filter[i][2] = '&nbsp;'
      } else if (filter[i][2] === filter[i][3] && filter[i][2] !== '&nbsp;') {
         filter[i][2] *= 2; filter[i][3] = '&nbsp;'
      }
   }
}
function mainRight() {
   let sss
   for (let i = 0; i < subarray.length; i++) {
      sss = subarray[i].filter(num => num.length < 5)
      while (sss.length < 4) sss.unshift('&nbsp;')
      filter.push(sss)  
      if (filter[i][3] === filter[i][2] && filter[i][3] !== '&nbsp;') {
         filter[i][3] *= 2; filter[i][2] = '&nbsp;'
      } else if (filter[i][2] === filter[i][1] && filter[i][2] !== '&nbsp;') {
         filter[i][2] *= 2; filter[i][1] = '&nbsp;'
      } else if (filter[i][1] === filter[i][0] && filter[i][1] !== '&nbsp;') {
         filter[i][1] *= 2; filter[i][0] = '&nbsp;'
      }
   }
}
function mainUp() {
   let sss
   for (let i = 0; i < subarray2.length; i++) {
      sss = subarray2[i].filter(num => num.length < 5)
      while (sss.length < 4) sss.push('&nbsp;')
      filter.push(sss)
      if (sss[0] === sss[1] && sss[0] !== '&nbsp;') {
         sss[0] *= 2; sss[1] = '&nbsp;'
      } else if (sss[1] === sss[2] && sss[1] !== '&nbsp;') {
         sss[1] *= 2; sss[2] = '&nbsp;'
      } else if (sss[2] === sss[3] && sss[2] !== '&nbsp;') {
         sss[2] *= 2; sss[3] = '&nbsp;'
      }
   }
}
function mainDown() {
   let sss
   for (let i = 0; i < subarray2.length; i++) {
      sss = subarray2[i].filter(num => num.length < 5)
      while (sss.length < 4) sss.unshift('&nbsp;')
      filter.push(sss)
      if (sss[3] === sss[2] && sss[3] !== '&nbsp;') {
         sss[3] *= 2; sss[2] = '&nbsp;'
      } else if (sss[2] === sss[1] && sss[2] !== '&nbsp;') {
         sss[2] *= 2; sss[1] = '&nbsp;'
      } else if (sss[1] === sss[0] && sss[1] !== '&nbsp;') {
         sss[1] *= 2; sss[0] = '&nbsp;'
      }
   }
}

function randomInteger(min, max) {
   let rand = min - 0.5 + Math.random() * (max - min + 1);
   return Math.round(rand);
}
function  reClearArr(){
   array.splice(0, array.length)
   filter.splice(0, filter.length)
   for (let i = 0; i < elems.length; i++) {
      array.push(elems[i].innerHTML)
   }
   
   for (let i = 0; i <Math.ceil(array.length/size); i++){
       subarray[i] = array.slice((i*size), (i*size) + size);
   }
   
}
function clearField() {
   for (let i = 0; i < elems.length; i++) {
      elems[i].innerHTML = "&nbsp;"
   }
}

function reDrawField() {
   let reserveArr = filter[0].concat(filter[1], filter[2], filter[3])
   for (let i = 0; i < elems.length; i++) {
      elems[i].innerHTML = reserveArr[i]
   }
}

function hReDrawField() {
   let reserveArr = subarray[0].concat(subarray[1], subarray[2], subarray[3])
   for (let i = 0; i < elems.length; i++) {
      elems[i].innerHTML = reserveArr[i]
   }
}
function verticalReClearArr() {
   array2.splice(0, array2.length)
   reClearArr()
   let j = 0;
   while (j < 4) {
      for (let i = 0; i < subarray.length; i++) {
         array2.push(subarray[i][j])
      }
      j++
   }
   for (let i = 0; i <Math.ceil(array2.length/size); i++){
      subarray2[i] = array2.slice((i*size), (i*size) + size);
   }
}
function horisontalReClearArr() {
   array.splice(0, array.length)
   subarray.splice(0, subarray.length)
   let j = 0;
   while (j < 4) {
      for (let i = 0; i < filter.length; i++) {
         array.push(filter[i][j])
      }
      j++
   }
   for (let i = 0; i <Math.ceil(array.length/size); i++){
      subarray[i] = array.slice((i*size), (i*size) + size);
   }
}
function scoreCount() {
   sum = 0
   for (let i = 0; i < elems.length; i++) {
      if (elems[i].innerHTML !== '&nbsp;') {
         sum+=parseInt(elems[i].innerHTML)
         score.innerHTML = "Score: " + sum
         if (sum > localStorage.getItem('best')) {
            localStorage.setItem('best', sum);
         }
         best.innerHTML = 'Best: ' + localStorage.getItem('best')
      }
   }
   setColor()
}

function getColorMumber(number) {
   let colorList = {
     0: "#cdc1b4",
     2: "#eee4da",
     4: "#eee1c9",
     8: "#f3b27a",
     16: "#f69664",
     32: "#f67c60",
     64: "#f65e3b",
     128: "#edcf73",
     256: "#edcc62",
     512: "#edc850",
     1024: "#edc53f",
     2048: "#edc22d",
   };
 
   if (colorList[number] !== undefined) {
     return colorList[number];
   }
 
   return colorList[0];
}
 
function setColor() {
   for (let i = 0; i < elems.length; i++) {
     elems[i].style.backgroundColor = getColorMumber(elems[i].innerHTML);
   }
   for (let i = 0; i < elems.length; i++) {
     if (elems[i].innerHTML == 2 || elems[i].innerHTML == 4) {
       elems[i].style.color = "#776e65";
     } else {
       elems[i].style.color = "#f9f6f2";
     }
   }
}


scoreCount()
setColor()
reClearArr()

document.addEventListener('keydown', (e) => {
   switch (e.keyCode) {
      case 37:
         buttonLeft()
         break
      case 38:
         buttonUp()
         break
      case 39:
         buttonRight()
         break
      case 40:
         buttonDown()
         break
   }
})

function buttonLeft() {
   reClearArr()
   mainLeft(); mainLeft()
   reDrawField()
   generateNums(1)
}
function buttonRight() {
   reClearArr()
   mainRight(); mainRight()
   reDrawField()
   generateNums(1)
}
function buttonUp() {
   verticalReClearArr()
   mainUp()
   horisontalReClearArr(); 
   hReDrawField()
   generateNums(1)
}
function buttonDown() {
   verticalReClearArr()
   mainDown();
   horisontalReClearArr()
   hReDrawField()
   generateNums(1)
}
