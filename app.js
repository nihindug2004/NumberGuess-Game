function guessFunction(){
    let randomNumber = Math.floor((Math.random()*10)+1);
    //console.log(randomNumber);
    
    const num1 = parseFloat(document.getElementById('num').value);
    let result;
    if(num1==randomNumber){
        result="You win!";
        alert(result);
    } else if(num1>randomNumber){
        result="Too high! Try again.";
        alert(result);
    }else if(num1<randomNumber){
        result="Too low! Try again.";
        alert(result);
    }else if(num1!=randomNumber){
        result="Invalid input";
        alert(result);
    }
    
    
    document.getElementById('output').innerHTML= result;
    }