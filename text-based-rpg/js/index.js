function Game(){
 var score;
 var health;
 var attack;
 var lives;  
 
 var weapon = prompt("Please choose a weapon: Sword, Bow and Arrow").toLowerCase();
 switch(weapon){
   case "sword":
     var choice1 = prompt("You find a dragon and a knight, who do you fight?").toLowerCase();
     if(choice1 === "dragon"){
       alert("You are fighting a dragon: ");
       var attack1 = prompt("Do you hit, or special hit: ").toLowerCase();
       if(attack1 === "hit"){
         alert("Your dead, dragon dodged your attack and left you in critical condition");
       }else{
         alert("Dragon is dead, you were able to leave the dragon in critical condition");
         var levelup1 = alert("You have leveled up, choose what to upgrade, health, attack").toLowerCase();
         if(levelup1 === "health"){
           alert("Health increased to 20");
           health = 20;
         }else{
           alert("Attack increased to 20");
           attack = 20;
         }
       }
     }else{
        alert("You are fighting a knight: ");
        var attack1 = prompt("Do you hit, or special hit: ").toLowerCase();
        if(attack1==="hit"){
           alert("You kill the knight, but he left you wounded, you are loosing 2 health every turn.");
           var levelup1 = prompt("You have leveled up, choose what to upgrade, health, attack: ");
           if(levelup1 === "health"){
           alert("Health increased to 20");
           health = 20;
         }else{
           alert("attack increased to 20");
attack = 20;
         }
        }else{
           alert("You are killed, knight has experience with this type of attack, he kills you.");
        }
     }
     break;
   case "bow and arrow":
     var choice1 = prompt("You find a dragon and a knight, who do you fight?").toLowerCase();
     if(choice1==="dragon"){
       alert("You are fighting a dragon: ");
       var attack1 = prompt("Do you hit, or special hit: ").toLowerCase();
       if(attack1 === "hit"){
         alert("Your dead, dragon dodged your attack and left you in critical condition");
       }else{
         alert("Dragon is dead, you were able to leave the dragon in critical condition");
         var levelup1 = alert("You have leveled up, choose what to upgrade, health, attack: ").toLowerCase();
         if(levelup1 === "health"){
           health = 20;
         }else{
           attack = 20;
         }
       }
     }else{
       alert();
     }
     break;
        
 }
}