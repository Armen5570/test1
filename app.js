const btn = document.querySelector('button')
const div = document.querySelector('div')
const inp = document.querySelector('input')

btn.addEventListener('click' , () => {
    div.style.backgroundColor =  inp.value;
})
