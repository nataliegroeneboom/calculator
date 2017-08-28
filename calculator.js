$(document).ready(function(){
  var string="";
  var calcString = "";
  var operators="";
  var workings = $("#onGoingResult");
  var result = $("#finalResult");
  var regNum = /([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/;
  var regOp = /[\/\*\+\-]$/;
  var backSpace = /[&#247;&#215;\+-]$|([-+]?[0-9]*\.?[0-9]+$)/;
  var calculation;
 
 function output(val){
   val = val.toLocaleString();
   if(val.length>14){
    val = "ERROR";
     return val;
   }
   else{
    return val; 
   }
 }; 


  $(".numbers").click(function(){
    string+=$(this).text();
    workings.text(string);
    
  });
  
 
  
   $(".operator").click(function(){
    operators=this.id;
     if(regOp.test(string)===true){
      string = string.replace(regOp,operators);
 
    }
    else{
      string+=operators;
    } 
    
    workings.text(string);
  }); 
  
  
  
  
  
  $("#ac").click(function(){
    string="";
    workings.text(string);
    result.text(output(string));
  });
  
  $("#ce").click(function(){
    string= string.replace(backSpace,"");
    workings.text(string);
  });
  
  $("#equal").click(function(){
    calculation = string.match(regNum);
   calculation = eval(calculation[0]);
   string=calculation; 
    result.text(output(calculation));
    
  })
  
});

