export class Morpion {
   gameboard: Array<string>[];
   j1: string;
   j2: string;

   constructor() {
       this.gameboard = null;
       this.j1 = 'X';
       this.j2 = 'O';
   }

   generateGameboard(){
      this.gameboard = [["","",""],
                        ["","",""],
                        ["","",""]];
   }


   playPawn(x: number, y: number, joueur: string){
      if(this.gameboard[x][y] != "")
      {
         console.log("Case occupée");
      }
      else
      {
         this.gameboard[x][y] = joueur;
      }

      console.log(this.gameboard);
   }
   static checkFinishGame(gameboard: Array<string>[]){
      
      for (let entry of gameboard) {
         
         entry.forEach(element => {
            if(element == ''){
               return false;
            }
         });
         
     }
     return true;
   }

   
   play(random){
      let test: boolean;
      let whoPlay: number;
      whoPlay = 1;
      let x: number;
      let y: number;

      test = Morpion.checkFinishGame(this.gameboard);

      console.log(test);

      while( test == false){
         x = random;
         y = random;
         console.log('X : ' + x);
         console.log('Y : ' + y);
         if(whoPlay == 1)
         {
            this.playPawn(x,y, this.j1);
            whoPlay = 2;
         }
         else{
            this.playPawn(x,y, this.j2);
            whoPlay = 1;
         }
            
         test = Morpion.checkFinishGame(this.gameboard);
      }
      console.log("Partie Terminée");
   }

   
  

}