$( document ).ready(function() {

  	$("div.cursor").click( function(){

  		$(this).next("div.hidden").toggle();

  	});
});

function findTotal(){
    var arr=document.getElementsByName('qty');
    var tot=0;
    var r1=3.5;
    var r2=2.5;
    var r3=2;
    var curr=0;
    for(var i=0;i<arr.length;i++){
        if (!/^[0-9]+$/.test(arr[i].value)){
            document.getElementById('total').value = "Ievadi ciparus :(";
            return;
        }
        else if(arr[i].value){
            if (arr[i].value<0 || arr[i].value>100){
                document.getElementById('total').value = "Ievadīti nepareizi dati :(";
                return;
            }
            if (i===0){
                curr=(arr[i].value)*r2;
            }
            if (i===1){
                curr=(arr[i].value)*r1;
            }
            if (i===2 || i===3){
                curr=(arr[i].value)*r3;
            }
        }
        tot += curr;
        curr=0;
    }
    document.getElementById('total').value=tot;
}
    
function onblur(event) {
  findTotal()
}