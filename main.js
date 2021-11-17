
        function authenticateUser(){

          
          let attempts = 0;
          
          while (attempts < 3) {
            let userPassword = prompt("Please enter the password.");
            
            if(userPassword === "myPassword1!"){
              alert("password accepted");
              break;
               }else{
                  attempts+=1
                  userPassword
                  alert("Password incorrect " + (3-attempts) + " attempt left");
                  
                }
              }

        }

        let isLoggeIn = authenticateUser();
        