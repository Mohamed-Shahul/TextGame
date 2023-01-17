let alphasDiv=document.getElementById('alphas')
let randomString=document.getElementById('randomString')
let evalDiv=document.getElementById('eval')
let historyDiv=document.getElementById('history')
let score=document.getElementById('count')

//Create Random String
let createRandomStr=(event)=>{
    let createString=Math.random().toString(26).slice(2,9).split('').map((ele)=>{
        return isNaN(parseInt(ele))? ele : '';
    }).join('')
    randomString.innerText=createString
}

//Enter the Alphabhets value in AlphasDiv
let setButton=(event)=>{
    let buttonText=event.target.innerText
    alphasDiv.innerText+=buttonText
}

//Check RandomString is equal to Your Word
let setCheck=(event)=>{
    let alphasText=alphasDiv.innerText
    let randomStringText=randomString.innerText

    // History
    let li=document.createElement('li')
    li.innerText=alphasText
    li.className='historyLi'
    let li2=document.createElement('li')
    li2.innerText='no Values'
    li2.className='historyLi'
    if(li.innerText==''){
        historyDiv.append(li2)
    }
    else{
        historyDiv.append(li)
    }
    
    // checkBar
    if(alphasText==randomStringText  && randomStringText.length!=0 ){
        alphasDiv.className='tickDiv'
        score.innerText++
        score.style='color:greenyellow'
        randomString.innerText=null
        alphasDiv.innerText=null
    }
    else if(alphasText=='' || randomStringText==''){
        alphasDiv.className='wrongDiv'
    }
    else if(alphasText!=randomStringText && alphasText.length>0){
        alphasDiv.className='wrongDiv'
        score.innerText=0
        score.style='color:red'
    }
}

//Clear your text
let setClear=(event)=>{
    alphasDiv.innerText=null
    alphasDiv.className='removerBorder'
    score.style='color:white'
}

//Clear History
let clearHistory=(event)=>{
    historyDiv.innerText=null
}