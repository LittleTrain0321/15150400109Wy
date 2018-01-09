 //        添加图书功能
        var footer = document.getElementsByClassName('footer');
        var build = document.getElementById('build');
        var add = document.getElementById('add');

        add.onclick = function() {

            footer[0].style.display = 'block';

        }

        function build1() {
            var table1 = document.getElementById('table1'); //获取书库列表
            var value4 = document.getElementById('value4'); //获取添加书名
            var value5 = document.getElementById('value5'); //获取添加的作者名字
            var value6 = document.getElementById('value6'); //获取添加的出版社名字
            var value7 = document.getElementById('value7'); //获取添加的数量
            var value8 = document.getElementById('value8'); //获取添加的价格

            var Oarr = [value4, value5, value6, value7, value8];
            var Oclass = ['book', 'author', 'Onumber', 'press', 'price'];
            var Otr = document.createElement('tr');
            for (var i = 0; i < 5; i++) {

                if (Oarr[i].value == '') {
                    alert('请填写完整。');
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

        //        删除功能

        function Oremove() {
            var Odelete = document.getElementsByClassName('Odelete');

            for (var j = 0; j < Odelete.length; j++) {
                Odelete[j].onclick = (function() {
                    return function() {
                        this.parentNode.parentNode.innerHTML = '';
                    }
                })(j);

            }

        }
        Oremove();
        //        搜索功能
        var find = document.getElementById('find');
        //        搜索点击事件
        function search() {
            //        获取搜索内容
            var value1 = document.getElementById('value1'); //获取输入的书名
            var value2 = document.getElementById('value2'); //获取输入的作者名
            var value3 = document.getElementById('value3'); //获取输入的出版社名
            var book = document.getElementsByClassName('book'); //获取书库书名       
            var author = document.getElementsByClassName('author'); //获取书库作者名
            var chubanshe = document.getElementsByClassName('press'); //获取书库出版社名
            //                     alert(book.length);
            //遍历书库
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