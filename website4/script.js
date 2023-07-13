const height=document.querySelector('#height');
const weight =document.querySelector('#weight')
const age=document.querySelector('#age')
const button=document.querySelector('.button')
const results=document.querySelector('.results')
const error=document.querySelector('.error')

const resultsShow=()=>
{
    let rslt=weight.value/(height.value**height.value)
    error.textContent="wynik to "+rslt
    if (rslt<18.5)
    {
        results.textContent="masz niedowage"
         
    }else if( rslt>24.9)
    {
        results.textContent="masz nadwage"
    }else if(rslt>18.5 && rslt<24.9)
    {
        results.textContent="twoje bmi jest prawidłowe"
    }
}

const errorFunction=()=>
{
    if(height.value==''|| weight.value==''|| age.value=='')
    {
        error.textContent='wpisz dane'
        results.textContent="-------"
    }else{
        resultsShow();
    }
}

button.addEventListener('click',errorFunction)
