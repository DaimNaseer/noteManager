var ul=document.querySelector('ul');

//****************ADD ITEMS***************** *//

var checker=document.getElementById('add-input');
var btn=document.getElementById('add-btn');
btn.addEventListener('click',a);
function a(e){  
if(checker.value != ""){
var li=document.createElement('li');
var par1=document.createElement('p');
var text=document.createTextNode(checker.value);
par1.appendChild(text);
li.appendChild(par1);
var par=document.createElement('p');
var i=document.createElement('i');
i.className='fa fa-pencil-square-o';
var i2=document.createElement('i');
i2.className='fa fa-times'
par.appendChild(i);
par.appendChild(i2);
li.appendChild(par);
var input=document.createElement('input');
input.className='edit-note';
input.type='text';
li.appendChild(input);
ul.appendChild(li);
checker.value="";
e.preventDefault();
}}
//****************EDIT & DELETE ITEMS*********************** *//
ul.addEventListener('click',function(e){
         var i=e.target;
         var p=i.parentNode;
         var p0=p.previousElementSibling;
         var input=p.nextElementSibling;
     if(i.classList[1] === 'fa-pencil-square-o'){
         input.setAttribute('value',p0.textContent);
         p.setAttribute('style','display:none');
         input.setAttribute('style','display:block;');
         input.addEventListener('keyup',function(e){
             if(e.keyCode === 13){
                 if(input.value !== ''){
                 p0.textContent=input.value;
                 input.setAttribute('style','display:none;');
                 p.setAttribute('style','display:block;');
                }else{
                    p.parentNode.parentNode.removeChild(p.parentNode);
                }
            }
         });
     }
     else if(i.classList[1] === 'fa-times'){
         p.parentNode.parentNode.removeChild(p.parentNode);
     }
});
//****************HIDE $ UNHIDE LIST*********************** *//
var hide=document.getElementById('hide');
hide.addEventListener('click',function(){
    if(hide.previousElementSibling.textContent ==='Hide notes'){
    ul.style.display='none';
    hide.previousElementSibling.textContent='Unhide notes';
    }else{
        ul.style.display='block';
        hide.previousElementSibling.textContent='Hide notes';
    }
});
//****************SEARCH FILTER*********************** *//
var input=document.querySelector('#search-note input');
var list=ul.getElementsByTagName('li');
input.addEventListener('keyup',function(e){
    var k=e.target.value.toUpperCase();
    for(var i=0;i<list.length;i++){
        var content=list[i].firstElementChild.textContent.toUpperCase();
        for(var j=0;j<k.length;j++){
            if((content[j] !== k[j])){
                        list[i].style.display='none';
            }
        }
    }
});

