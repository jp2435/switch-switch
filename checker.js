document
 .querySelectorAll("input[type='radio']")
 .forEach(function(input){
    input.onclick = function(){
        document.documentElement.removeAttribute('class')
        document.documentElement.classList.add(input.id)
    }
 })