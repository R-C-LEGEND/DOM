var plus = document.querySelectorAll('.plus' )
console.log(plus)
var minus = document.querySelectorAll('.minus')
var number = document.querySelectorAll('.number')

for (let i = 0; i< plus.length; i++) {
   
    plus[i].addEventListener('click', function(){

      var parent = plus[i].parentNode
      var paragraph = parent.querySelector('.number')
      var count = parseInt(paragraph.textContent)
      if(count < 10){
      count = count + 1 
      paragraph.textContent = count
      var gparent = parent.parentNode
      var price = gparent.querySelector('.cost')
      var total = document.querySelector('.total')
      var total2 = parseInt(price.textContent) + parseInt(total.textContent)
      total.textContent = total2

    }
    })
      }

for (let i = 0; i< minus.length; i++) {
   
    minus[i].addEventListener('click', function(){

      var parent = minus[i].parentNode
      var paragraph = parent.querySelector('.number')
      var count = parseInt(paragraph.textContent)
      if(count > 0 ){
        count = count - 1 
        paragraph.textContent = count
        var gparent = parent.parentNode
      var price = gparent.querySelector('.cost')
      var total = document.querySelector('.total')
      var total2 = parseInt(total.textContent) - parseInt(price.textContent)
      total.textContent = total2
      }
     
    })
    
}


























































/*plus.addEventListener('click', function(){
    var count = parseInt(number.textContent)
count = count + 1 
number.textContent = count
})
minus.addEventListener('click', function(){
   var count = parseInt(number.textContent)
   count = count - 1
   number.textContent = count
})   */

