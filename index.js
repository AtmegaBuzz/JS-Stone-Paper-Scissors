


// database of game JS object


function database(computer_pick,user_pick){

    rps_data = {
        "rock":{"rock":0.5,"paper":0,"scissors":1},
        "paper":{"rock":1,"paper":0.5,"scissors":0},
        "scissors":{"rock":0,"paper":1,"scissors":0.5},
    }
    result = rps_data[user_pick][computer_pick];
    return result;
}

// computer picking RANDOM

function computer_choice(){
    choice = Math.floor(Math.random()*3);
    if(choice==0){
        return "rock";
    }
    else if(choice==1){
        return "paper";
    }
    else if(choice==2){
        return "scissors";
    }
}



// checking result here

function answer(computer_pick,user_pick){
    const answer = document.querySelector("#answer");

     // since the container is in flex so to get user image on left ive done this
    const user_img = document.querySelector("#user");
    user_img.src = `${user_pick}.jpg`;
    

    
    result = database(computer_pick,user_pick);

    if(result==1){
        answer.innerText = "won";
        
    }
    else if(result==0){
        answer.innerText = "Loose";
       
    }
    else if(result==0.5){
        answer.innerText = "Draw";
        
    }
    
    // since the container is in flex so to get computer image on right ive done this
    const computer_img = document.querySelector("#computer");
    computer_img.src = `${computer_pick}.jpg`;
    

    

    
}


// here the function starts
//init call

function playgame(element){
    var user_pick= String(element.id);
    var computer_pick = computer_choice();
    
    
    console.log(computer_pick);
    console.log(user_pick);
    answer(computer_pick,user_pick);



    
    
}
