
//全选
function query(obj){
      var input=$("table tr td input");
        $.each(input, function(index, value) {
            $(this).prop('checked',!($(this).prop('checked')));
        })
}

//删除一行
function Del(dom) {
    //找到tr
    $(dom).parent().parent().remove();
   
}

function Add(dom){
    //获取数据
    var tr1_count= $(".tr_0 td:eq(3) input").val();
    console.log(tr1_count)
    var tr2_count= $(".tr_1 td:eq(3) input").val();
     //判断次数
        if(tr1_count == tr2_count){
            add1();
        }else{
            if(tr1_count > tr2_count){
                add2();
            }else{
                add1();
            }
        }
}


function add1(){
    //获取tr
    var tr1=$(".tr_0");
    console.log(tr1)

    //获取tr 的名字
    var tr1_name=$(".tr_0 td:eq(1) a").html();


    var tr2_price= $(".tr_1 td:eq(2)").text();

    //获取数量
    var tr1_count= $(".tr_0 td:eq(3) input").val();

    //数据类型转变
    var subCount1=Number.parseInt(tr1_count) +1;
    if(subCount1 ==0){
     //等于0 remove 这个行，数组删除  名字
     tr1.remove();
    }
    tr1.children().eq(3).children().eq(1).val(subCount1);
    //数量 * 单价
    var tprice1 =subCount1 * 32.9;
    var p1="￥"+tprice1+"元";

    $(".tr_0 td:eq(2)").text(p1);
    
}

function add2(){
     //获取tr
     var tr2=$(".tr_1");

     //获取tr 的名字
     var tr2_name=$(".tr_1 td:eq(1) a").html();
     console.log(tr2)
 
 
     //获取数量
     var tr2_count= $(".tr_1 td:eq(3) input").val();
 
     //数据类型转变
     var subCount2=Number.parseInt(tr2_count) +1;
     if(subCount2 ==0){
      //等于0 remove 这个行，数组删除  名字
      tr2.remove();
     }
     tr2.children().eq(3).children().eq(1).val(subCount2);
     
     //数量 * 单价
     var tprice2 =subCount2 * 3339;
     var p2="￥"+tprice2+"元";
     console.log(p2)
 
     $(".tr_1 td:eq(2)").text(p2);
     
}

 //批量删除
 function delBatch(){
    $.each($('table tr td input:checked'), function(index, value) {  
        $(this).parent().parent().remove();
        })

    }

function JiaH(){
    add1();
}
function JiaH1(){
    add2();
}

 function Jian(btn){
    var amount=$(btn).next().val();
    if(amount>=2){
    $(btn).next().val(--amount)
    $(btn).parent().prev().html('￥' + (amount * 32.9) + '元')
    }
}

function JianH(btn){
    var amount=$(btn).next().val();
    if(amount>=2){
    $(btn).next().val(--amount)
    $(btn).parent().prev().html('￥' + (amount * 3339) + '元')
    }
}








