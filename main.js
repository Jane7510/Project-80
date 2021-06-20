
    var names_of_people= [];
     
    function Submit(){
   
   
     var name_of_the_guest= document.getElementById("Input_Guest_Name").value;
     names_of_people.push(name_of_the_guest)
 console.log(name_of_the_guest);
 console.log(names_of_people);
 
 var length= names_of_people.length;
 console.log(length);
 document.getElementById("Guest_Names").innerHTML= names_of_people.toString();

}

function Show(){
  


        var g=[];
        for(var b=0; b<names_of_people.length; b++){
            g.push('<ol>'+names_of_people[b]+'</ol>');
            console.log(g);
            g.sort()

        }
      
    
  var remove_commas= g.join("");

  
    console.log(remove_commas);
    document.getElementById("Show_Guests").innerHTML=remove_commas;
   
    
    }

    function Search(){
        var Name= document.getElementById("Input_Name_to_search").value;
        var N_Found= 0;

        for(var p=0; p<names_of_people.length; p++){
             
            if(Name==names_of_people[p]){
                N_Found= N_Found+1;

            }

        }

        document.getElementById("h3").innerHTML="This Name was entered "+ N_Found + " time/s";
      
        
     }
  















