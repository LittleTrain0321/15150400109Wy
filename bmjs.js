var id=0;
new Vue({
    el:'#app',
    methods:{
        addBook:function(){
            this.book.id=this.books.length+1;
            this.books.push(this.book);
            this.book={};
        },
        delBook:function(book){
        var blength=this.books.length;
        this.books.splice(book.id-1,1);
            for(var i=0;i<blength;i++){
                if(book.id<this.books[i].id){
                    this.books[i].id-=1;
                }
            }
    },
        updataBook:function(book){
            $("#add-book").css("display","none");
            $("#update-book").css("display","block");
            id=book.id;
        },
        updatasBook:function(){
            this.book.id=id;
            this.books.splice(id-1,1,this.book);
            $("#add-book").css("display","block");
            $("#update-book").css("display","none");
            this.book = {};
        },
    },
    computed:{
        filterBooks:function(){
            var books=this.books;
            var search=this.search;
//            if(!search){
//                return books;
//            }
//            var arr=[];
//            for(var i=0;i<books.length;i++){
//                var index=books[i].name.indexOf(search);
//                if(index>-1){
//                    arr.push(books[i]);
//                }
//            }
//            return arr;
            
            return books.filter(function(book){
                return book.name.toLowerCase().indexOf(search.toLowerCase())!=-1;
            })
        }
    },
        data:{
        book:{
            name:"",
            author:"",
            press:"",
            num:"",
            price:"",
            isbn:""
        },
        books:[{
            name:"白夜追凶",
            author:"指纹",
            press:"长江出版社",
            num:"5",
            price:"45",
            isbn:"9787549253043"
        },
        {
            name:"心理罪",
            author:"雷米",
            press:"重庆出版社",
            num:"10",
            price:"24",
            isbn:"9787536691292"
        },
       
        ],
        search:""
    }
        
})