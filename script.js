let box = document.querySelectorAll('.box')
let rBtn = document.querySelector('.reset-btn') 
let contain = document.querySelector('.msg-Container ')
let winMsg = document.querySelector('.win')
let nGame = document.querySelector('#ngame')
let rGame = document.querySelector('.reset-btn')
let turn0 = true

const winningPat = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

box.forEach( (e) => {
    e.addEventListener('click', () => {
        console.log("Box is click")
        if(turn0)
        {
            e.innerText = 'X';
            turn0 = false;
        }
        else
        {
            e.innerText = 'O';
            turn0 = true;
        }
        e.disabled = true; // It make button stop

        checkBox();
    })
})

const checkBox = () => {
    for( let pattern of winningPat )
    {
        
           let val1 =  box[pattern[0]].innerText
           let val2 =  box[pattern[1]].innerText
           let val3 =  box[pattern[2]].innerText
           if(val1!="" && val2!="" && val3!="")
           {
                if(val1 == val2 && val2 == val3 )
                {
                    showWinner(val1)
                }
           }
    }
}


const showWinner = (val1) => {
    winMsg.innerHTML = `<b>Congraualations Winner is ${val1}</b>`
    contain.classList.remove('hide')
    disabledButt()
    rGame.style.display = 'none';
}

const disabledButt = () => {
    for(let butt of box)
    {
        butt.disabled = true;
    }
}

const resetFunc = () => {
     turn0 = true 
     enabledButt()
     contain.classList.add('hide')
     rGame.style.display = 'block'
     rGame.style.display = ''
}
const enabledButt = () => {
    for(let butt of box)
    {
        butt.disabled = false
        butt.innerText = ''
    }
}


nGame.addEventListener('click',resetFunc)
rGame.addEventListener('click',resetFunc)


