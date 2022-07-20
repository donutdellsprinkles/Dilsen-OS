const getValueInput = () =>{
    let inputValue = document.getElementById("searchbar").value; 
    if (inputValue == "Demarcus" || inputValue == "demarcus" || inputValue == "Demarcus Dieser" ){ window.location.href="demarcus.html";}
    else if (inputValue == "bro"){alert("Bro");}
    else  {
        document.getElementById("valueInput").style.display = 'block';
        }
  }



 