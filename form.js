class Form{
    constructor(){
      this.input =  createInput("").attribute("placeholder", "Name");
      this.button = createButton('Play')
      this.title=createElement('h1');
      //this.reset=createButton('RESET BRUH')
    
    }

    hide(){
      this.input.hide();
      this.button.hide();
      this.title.hide()
    
    }


  display(){
     this.title.style('color','white') 
     this.title.html ("AMONG US");
     this.title.position(displayWidth/2,displayHeight/2-400);
      
      this.input.position(displayWidth/2,displayHeight/2-250);
     this.button.position(displayWidth/2,displayHeight/2-200);
     // this.reset.position(displayWidth-300,displayHeight-300);

      this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title.hide();
        clear();
        getRole();
        gameState = "play";
        cafe=createSprite(displayWidth/2,displayHeight/2,100,displayHeight)
        cafe.addImage(cafeimg)
        cafe.scale=0.7
        name = this.input.value();

       
     /* player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
     
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)
      Player.updateCarsAtEnd(0);
      database.ref('players').remove();
    */
   })
  } 
  

}