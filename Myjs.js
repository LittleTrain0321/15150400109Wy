
 var footer = document.getElementsByClassName('footer');
 var build = document.getElementById('build');
 var add = document.getElementById('add');

 add.onclick = function () {

     footer[0].style.display = 'block';

 }

 function build1() {
     var table1 = document.getElementById('table1');
     var value4 = document.getElementById('value4');
     var value5 = document.getElementById('value5');
     var value6 = document.getElementById('value6');
     var value7 = document.getElementById('value7');
     var value8 = document.getElementById('value8');

     var Oarr = [value4, value5, value6, value7, value8];
     var Oclass = ['book', 'author', 'Onumber', 'press', 'price'];
     var Otr = document.createElement('tr');
     for (var i = 0; i < 5; i++) {

         if (Oarr[i].value == '') {
             alert('请填写完整!');
             return 1;
         } else {
             var Otd = document.createElement('td');
             var Op = document.createElement('p');
             Op.innerHTML = Oarr[i].value;
             //                alert(Op.innerHTML);
             Op.className = Oclass[i];
             table1.appendChild(Otr);
             Otr.appendChild(Otd);
             Otd.appendChild(Op);
         }

     }

     var Otd = document.createElement('td');
     var Obtn = document.createElement('button');
     Otd.innerHTML = "<button class='Odelete' onclick='Oremove()'>删除</button>"

     Otr.appendChild(Otd);
     footer[0].style.display = 'none';

     Oremove();
 }



 function Oremove() {
     var Odelete = document.getElementsByClassName('Odelete');

     for (var j = 0; j < Odelete.length; j++) {
         Odelete[j].onclick = (function () {
             return function () {
                 this.parentNode.parentNode.innerHTML = '';
             }
         })(j);

     }

 }
 Oremove();

 var find = document.getElementById('find');

 function search() {

     var value1 = document.getElementById('value1');
     var value2 = document.getElementById('value2');
     var value3 = document.getElementById('value3');
     var book = document.getElementsByClassName('book');
     var author = document.getElementsByClassName('author');
     var chubanshe = document.getElementsByClassName('press');
     for (var i = 0; i < book.length; i++) {

         if (value1.value == book[i].innerHTML) {

             book[i].style.border = '1px solid yellow';
         } else if (value2.value == author[i].innerHTML) {

             author[i].style.border = '1px solid yellow';
         } else if (value3.value == chubanshe[i].innerHTML) {

             chubanshe[i].style.border = '1px solid yellow';


         } else {
             book[i].parentNode.parentNode.style.display = 'none';
         }

     }
     value1.value = '';
     value2.value = '';
     value3.value = '';
 }
