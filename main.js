let userPassword = prompt("Please enter the password.");

let attempts = 0;


while (attempts < 3) {
      if(userPassword === "myPassword1!"){
        console.log("password accepted");
        break;
         
         
        }else{
            attempts+=1
            userPassword = prompt("Please enter the password.")
            console.log("Password incorrect");
          }
        }
