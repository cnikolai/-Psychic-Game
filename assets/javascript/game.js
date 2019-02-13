//alert('here1');
      var computerText = document.getElementById("computer-text");
      var guessessofarText = document.getElementById("guesses-so-far");
      var guessessofaruserText = document.getElementById("guesses-so-far-user");
      var guessesleftText = document.getElementById("guesses-left");
      var guessesleftnumText = document.getElementById("guesses-left-num");
      var winsText = document.getElementById("wins");
      var lossesText = document.getElementById("losses");
      var guessesleft = 9;
      var wins = 0;
      var losses = 0;
      var userChose = "";
      var computerChose = "";
      var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

      //alert('here2');

      //computer chooses a letter
      computerChose = letters[Math.floor(Math.random() * letters.length)+1];

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {    
        //which letter did the user chooose
        //allow for upper case letters too
        userChose = event.key.toLowerCase();
        //alert('here3');

        //initialize the game
        computerText.textContent = "Guess what letter I'm thinking of: ";// + computerChose;
        guessesleftnumText.textContent = 9;

        //user chose a lower case letter from the alphabet
        if (letters.indexOf(userChose) != -1) {
            //the user guesses correctly (wins)
          if (userChose === computerChose) {
            wins++;
            guessessofaruserText.textContent = "";
            mySpan = document.createElement("span");
            mySpan.setAttribute("id","guesses-so-far-user")
            guessessofarText.appendChild(mySpan);
            winsText.textContent = "Wins: "+ wins;
            guessesleft = 9;
            guessesleftText.textContent = "Guesses Left: ";
            var mySpan = document.createElement("span");
            mySpan.setAttribute("id","guesses-left-num")
            mySpan.textContent = "9";
            guessesleftText.appendChild(mySpan); 
            //computer chooses a letter
            computerChose = letters[Math.floor(Math.random() * letters.length)+1];
            computerText.textContent = "Guess what letter I'm thinking of: ";// + computerChose;
          } //the user still have guesses left
          else if (guessesleft > 1) {
            guessesleft--;
            console.log("guesses left in if: " + guessesleft);
            guessesleftnumText = document.getElementById("guesses-left-num");
            guessesleftnumText.textContent = guessesleft;
            guessessofaruserText = document.getElementById("guesses-so-far-user");
            guessessofaruserText.textContent = guessessofaruserText.textContent + "," + userChose;
          } 
          else {
            //the user used up all of his guesses and lost the game
            console.log("guesses left in else: " + guessesleft);
            losses++;
            lossesText.textContent = "Losses: " + losses;
            guessesleft = 9;
            guessesleftText.textContent = "Guesses Left: ";
            var mySpan = document.createElement("span");
            mySpan.setAttribute("id","guesses-left-num")
            mySpan.textContent = "9";
            guessesleftText.appendChild(mySpan);
            guessessofarText.textContent = "Your Guesses So Far: ";
            mySpan = document.createElement("span");
            mySpan.setAttribute("id","guesses-so-far-user")
            guessessofarText.appendChild(mySpan);
            //computer chooses a letter
            computerChose = letters[Math.floor(Math.random() * letters.length)+1];
            computerText.textContent = "Guess what letter I'm thinking of: ";// + computerChose;
          }
        } else {
           alert("Please choose a letter from the alphabet");
        }
      };
  //    alert('here4');
