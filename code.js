
const Squares = [];
for(i = 0; i <= 8; i++)
{
    Squares[i] = null;
}

Player1 = "X";
Player2 = "O";

CurrentPlayer = Player1;
Winner = null;

PlayMode = "Multiplayer"; //default

function OnLoad()
{   
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    //Clear Canvas for fresh start
    ctx.clearRect(0, 0, c.width, c.height);
    for(i = 0; i <= 8; i++)
    {
        Squares[i] = null;
    }

    CurrentPlayer = Player1;
    Winner = null;

    var cp = document.getElementById("currentPlayer");
    cp.innerText = "Current Player: "+ CurrentPlayer

    var pm = document.getElementById("modes");
    PlayMode = pm.value;    

    //Draw Lines
    ctx.beginPath();    

    ctx.moveTo(100, 0);
    ctx.lineTo(100, 300);

    ctx.moveTo(200, 0);
    ctx.lineTo(200, 300);

    ctx.moveTo(0, 100);
    ctx.lineTo(300, 100);

    ctx.moveTo(0, 200);
    ctx.lineTo(300, 200);   

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.stroke();    
}

function drawCircle(ctx, x, y, radius, stroke, strokeWidth) 
{
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);    
    if (stroke) 
    {
      ctx.lineWidth = strokeWidth;
      ctx.strokeStyle = stroke;
      ctx.stroke();
    }
  }
function drawX(ctx, square, stroke, strokeWidth)
{
    ctx.beginPath();
    
    fromX1 = 25;
    fromY1 = 25;
    toX1 = 75;
    toY1 = 75;

    fromX2 = 25;
    fromY2 = 75;
    toX2 = 75;
    toY2 = 25;
    
    if(square == 1)
    {
        fromX1 += 100;
        toX1 += 100;
        fromX2 += 100;
        toX2 += 100;
    }
    if(square == 2)
    {
        fromX1 += 200;
        toX1 += 200;
        fromX2 += 200;
        toX2 += 200;
    }
    if(square == 3)
    {
        fromY1 += 100;
        toY1 += 100;
        fromY2 += 100;
        toY2 += 100;
    }
    if(square == 4)
    {
        fromX1 += 100;
        toX1 += 100;
        fromX2 += 100;
        toX2 += 100;

        fromY1 += 100;
        toY1 += 100;
        fromY2 += 100;
        toY2 += 100;
    }
    if(square == 5)
    {
        fromX1 += 200;
        toX1 += 200;
        fromX2 += 200;
        toX2 += 200;

        fromY1 += 100;
        toY1 += 100;
        fromY2 += 100;
        toY2 += 100;
    }
    if(square == 6)
    {
        fromY1 += 200;
        toY1 += 200;
        fromY2 += 200;
        toY2 += 200;
    }
    if(square == 7)
    {
        fromX1 += 100;
        toX1 += 100;
        fromX2 += 100;
        toX2 += 100;

        fromY1 += 200;
        toY1 += 200;
        fromY2 += 200;
        toY2 += 200;
    }
    if(square == 8)
    {
        fromX1 += 200;
        toX1 += 200;
        fromX2 += 200;
        toX2 += 200;

        fromY1 += 200;
        toY1 += 200;
        fromY2 += 200;
        toY2 += 200;
    }


    ctx.moveTo(fromX1, fromY1);
    ctx.lineTo(toX1, toY1);

    ctx.moveTo(fromX2, fromY2);
    ctx.lineTo(toX2, toY2); 

    if (stroke) {
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = stroke
      ctx.stroke();
    }
}

function getCircleX(position)
{
    X = 0;

    if(position == 0){X = 50;}
    if(position == 1){X = 150;}
    if(position == 2){X = 250;}

    if(position == 3){X = 50;}
    if(position == 4){X = 150;}
    if(position == 5){X = 250;}

    if(position == 6){X = 50;}
    if(position == 7){X = 150;}
    if(position == 8){X = 250;}

    return X;
}
function getCircleY(position)
{
    Y = 0;

    if(position == 0){Y = 50;}
    if(position == 1){Y = 50;}
    if(position == 2){Y = 50;}

    if(position == 3){Y = 150;}
    if(position == 4){Y = 150;}
    if(position == 5){Y = 150;}

    if(position == 6){Y = 250;}
    if(position == 7){Y = 250;}
    if(position == 8){Y = 250;}

    return Y;
}

function CheckForBlock()
{
    rowValue = 0;
    nullRow = null;
    squareToBlock = null;

    //Horizontal 1                
    for(i = 0; i <= 2; i++)
    {
        if(Squares[i] == Player1)
        {
            rowValue += 1;
        }
        else if(Squares[i] == Player2)
        {
            rowValue -= 1;
        }                    
        if(Squares[i] == null)
        {
            nullRow = i;
        }   
    }
    
    if(rowValue == 2 && nullRow != null)
    {
        squareToBlock = nullRow;                   
    }
    else
    {
        rowValue = 0;
        nullRow = null;
        squareToBlock = null;
    }
     //Horizontal 2              
     if(squareToBlock == null)
     {
         for(i = 3; i <= 5; i++)
         {
             if(Squares[i] == Player1)
             {
                 rowValue += 1;
             }
             else if(Squares[i] == Player2)
             {
                 rowValue -= 1;
             }                    
             if(Squares[i] == null)
             {
                 nullRow = i;
             }   
         }
         if(rowValue == 2 && nullRow != null)
         {
             squareToBlock = nullRow;                   
         }
         else
         {
             rowValue = 0;
             nullRow = null;
             squareToBlock = null;
         }   
     } 
      //Horizontal 3              
      if(squareToBlock == null)
      {
          for(i = 6; i <= 8; i++)
          {
              if(Squares[i] == Player1)
              {
                  rowValue += 1;
              }
              else if(Squares[i] == Player2)
              {
                  rowValue -= 1;
              }                    
              if(Squares[i] == null)
              {
                  nullRow = i;
              }   
          }
          if(rowValue == 2 && nullRow != null)
          {
              squareToBlock = nullRow;                   
          }
          else
          {
              rowValue = 0;
              nullRow = null;
              squareToBlock = null;
          }   
      } 

     
    
      /*
         Vertical Block Check
     */

     //Vertical 1
     if(squareToBlock == null)
      {
         for(i = 0; i <= 6; i++)
         {
             if(Squares[i] == Player1)
             {
                 rowValue += 1;
             }
             else if(Squares[i] == Player2)
             {
                 rowValue -= 1;
             }                    
             if(Squares[i] == null)
             {
                 nullRow = i;
             }   

             i += 2; //Skip to vertical rows
         }
         if(rowValue == 2 && nullRow != null)
         {
             squareToBlock = nullRow;                   
         }
         else
         {
             rowValue = 0;
             nullRow = null;
             squareToBlock = null;
         }   
     }

      //Vertical 2
      if(squareToBlock == null)
      {
         for(i = 1; i <= 7; i++)
         {
             if(Squares[i] == Player1)
             {
                 rowValue += 1;
             }
             else if(Squares[i] == Player2)
             {
                 rowValue -= 1;
             }                    
             if(Squares[i] == null)
             {
                 nullRow = i;
             }   

             i += 2; //Skip to vertical rows
         }
         if(rowValue == 2 && nullRow != null)
         {
             squareToBlock = nullRow;                   
         }
         else
         {
             rowValue = 0;
             nullRow = null;
             squareToBlock = null;
         }   
     }
     //Vertical 3
     if(squareToBlock == null)
     {
        for(i = 2; i <= 8; i++)
        {
            if(Squares[i] == Player1)
            {
                rowValue += 1;
            }
            else if(Squares[i] == Player2)
            {
                rowValue -= 1;
            }                    
            if(Squares[i] == null)
            {
                nullRow = i;
            }   

            i += 2; //Skip to vertical rows
        }
        if(rowValue == 2 && nullRow != null)
        {
            squareToBlock = nullRow;                   
        }
        else
        {
            rowValue = 0;
            nullRow = null;
            squareToBlock = null;
        }   
    }

    /*
         Diagonal Block Check
    */
   //Diagonal 1
   if(squareToBlock == null)
   {
      for(i = 0; i <= 8; i++)
      {
          if(Squares[i] == Player1)
          {
              rowValue += 1;
          }
          else if(Squares[i] == Player2)
          {
              rowValue -= 1;
          }                    
          if(Squares[i] == null)
          {
              nullRow = i;
          }   

          i += 3; //Skip to diagonal rows
      }
      if(rowValue == 2 && nullRow != null)
      {
          squareToBlock = nullRow;                   
      }
      else
      {
          rowValue = 0;
          nullRow = null;
          squareToBlock = null;
      }   
  }
  //Diagonal 2
  if(squareToBlock == null)
  {
     for(i = 2; i <= 6; i++)
     {
         if(Squares[i] == Player1)
         {
             rowValue += 1;
         }
         else if(Squares[i] == Player2)
         {
             rowValue -= 1;
         }                    
         if(Squares[i] == null)
         {
             nullRow = i;
         }   

         i += 1; //Skip to diagonal rows
     }
     if(rowValue == 2 && nullRow != null)
     {
         squareToBlock = nullRow;                   
     }
     else
     {
         rowValue = 0;
         nullRow = null;
         squareToBlock = null;
     }   
 }

 return squareToBlock;

    
}

function CheckForComplete()
{
   /*
    -------------------------------------
    Check if row can be completed
    -------------------------------------
    */

    /*
    Horizontal Complete Check
    */ 

    //Reset Values
    rowValue = 0;
    nullRow = null;
    sqaureToComplete = null;

    //Horizontal 1                
    for(i = 0; i <= 2; i++)
    {
    if(Squares[i] == Player2)
    {
        rowValue += 1;
    }
    else if(Squares[i] == Player1)
    {
        rowValue -= 1;
    }                    
    if(Squares[i] == null)
    {
        nullRow = i;
    }   
    }

    if(rowValue == 2 && nullRow != null)
    {
    sqaureToComplete = nullRow;                         
    }
    else
    {
    rowValue = 0;
    nullRow = null;
    sqaureToComplete = null;
    }        
    //Horizontal 2
    if(sqaureToComplete == null)
    {
    for(i = 3; i <= 5; i++)
    {
        if(Squares[i] == Player2)
        {
            rowValue += 1;
        }
        else if(Squares[i] == Player1)
        {
            rowValue -= 1;
        }                    
        if(Squares[i] == null)
        {
            nullRow = i;
        }   
    }

    if(rowValue == 2 && nullRow != null)
    {
        sqaureToComplete = nullRow;                                     
    }
    else
    {
        rowValue = 0;
        nullRow = null;
        sqaureToComplete = null;
    }        
    }
    //Horizontal 3
    if(sqaureToComplete == null)
    {
        for(i = 6; i <= 8; i++)
        {
            if(Squares[i] == Player2)
            {
                rowValue += 1;
            }
            else if(Squares[i] == Player1)
            {
                rowValue -= 1;
            }                    
            if(Squares[i] == null)
            {
                nullRow = i;
            }   
        }

        if(rowValue == 2 && nullRow != null)
        {
            sqaureToComplete = nullRow;                         
        }
        else
        {
            rowValue = 0;
            nullRow = null;
            sqaureToComplete = null;
        }        
    }

    //Vertical 1
    if(sqaureToComplete == null)
    {
        for(i = 0; i <= 6; i++)
        {
            if(Squares[i] == Player2)
            {
                rowValue += 1;
            }
            else if(Squares[i] == Player1)
            {
                rowValue -= 1;
            }                    
            if(Squares[i] == null)
            {
                nullRow = i;
            }

            i += 2; //Skip to vertical rows
        }

        if(rowValue == 2 && nullRow != null)
        {
            sqaureToComplete = nullRow;                         
        }
        else
        {
            rowValue = 0;
            nullRow = null;
            sqaureToComplete = null;
        }        
    }
    //Vertical 2
    if(sqaureToComplete == null)
    {
        for(i = 1; i <= 7; i++)
        {
            if(Squares[i] == Player2)
            {
                rowValue += 1;
            }
            else if(Squares[i] == Player1)
            {
                rowValue -= 1;
            }                    
            if(Squares[i] == null)
            {
                nullRow = i;
            }

            i += 2; //Skip to vertical rows
        }

        if(rowValue == 2 && nullRow != null)
        {
            sqaureToComplete = nullRow;                         
        }
        else
        {
            rowValue = 0;
            nullRow = null;
            sqaureToComplete = null;
        }        
    }
    //Vertical 3
    if(sqaureToComplete == null)
    {
        for(i = 2; i <= 8; i++)
        {
            if(Squares[i] == Player2)
            {
                rowValue += 1;
            }
            else if(Squares[i] == Player1)
            {
                rowValue -= 1;
            }                    
            if(Squares[i] == null)
            {
                nullRow = i;
            }

            i += 2; //Skip to vertical rows
        }

        if(rowValue == 2 && nullRow != null)
        {
            sqaureToComplete = nullRow;                         
        }
        else
        {
            rowValue = 0;
            nullRow = null;
            sqaureToComplete = null;
        }        
    }
    //Diagonal 1
    if(sqaureToComplete == null)
    {
        for(i = 0; i <= 8; i++)
        {
            if(Squares[i] == Player2)
            {
                rowValue += 1;
            }
            else if(Squares[i] == Player1)
            {
                rowValue -= 1;
            }                    
            if(Squares[i] == null)
            {
                nullRow = i;
            }

            i += 3; //Skip to diagonal rows
        }

        if(rowValue == 2 && nullRow != null)
        {
            sqaureToComplete = nullRow;                         
        }
        else
        {
            rowValue = 0;
            nullRow = null;
            sqaureToComplete = null;
        }        
    }
    //Diagonal 2
    if(sqaureToComplete == null)
    {
        for(i = 2; i <= 6; i++)
        {
            if(Squares[i] == Player2)
            {
                rowValue += 1;
            }
            else if(Squares[i] == Player1)
            {
                rowValue -= 1;
            }                    
            if(Squares[i] == null)
            {
                nullRow = i;
            }

            i += 1; //Skip to diagonal rows
        }

        if(rowValue == 2 && nullRow != null)
        {
            sqaureToComplete = nullRow;                         
        }
        else
        {
            rowValue = 0;
            nullRow = null;
            sqaureToComplete = null;
        }        
    }

    return sqaureToComplete;
}

function Computer_Player(Difficulty)
{
    if(Difficulty != "Multiplayer" && Winner == null)
    {        
        const Squares_Temp = [];
        
        if(Difficulty == "Solo: Easy")
        {
            for(i = 0; i <= 8; i++)
            {
                if(Squares[i] == null)
                {
                    Squares_Temp.push(i);
                }
            }
            RandNum = Math.floor(Math.random() * Squares_Temp.length);
            NewSquare = Squares_Temp[RandNum];
            Squares[NewSquare] = Player2;

            var c = document.getElementById("myCanvas");
            let ctx = c.getContext('2d')

            drawCircle(ctx, getCircleX(NewSquare), getCircleY(NewSquare), 25, 'black', 5)            
            changePlayer(CurrentPlayer);
        }
        else if(Difficulty == "Solo: Medium")
        {
            /*
                1st time: Place Anywhere but middel (Corner baiting)
                2nd:    1) Test if player can be blocked
                        2) Else test if row can be completed
                        3) Else just place randomly on open square
            */
                        
            for(i = 0; i <= 8; i++)
            {
                if(Squares[i] == null)
                {
                    Squares_Temp.push(i);
                }
            }
            
            NewSquare = null;

            //First Time
            if(Squares_Temp.length == Squares.length-1)
            {
               
                do {
                    RandNum = Math.floor(Math.random() * Squares_Temp.length);
                    NewSquare = Squares_Temp[RandNum];
                  }
                while (NewSquare == 4); //Middle Square (Should not be placed in the middle) 
                
               //NewSquare = 3;
                     
            }
            else //2nd & More Times    
            {
                 
                sqaureToComplete = CheckForComplete();
                squareToBlock = CheckForBlock();
            

            //----------------------------\\
            if(sqaureToComplete != null)
            {
                NewSquare = sqaureToComplete;
            }
            else if(squareToBlock != null)
            {
                NewSquare = squareToBlock;
            }             
            //Random
            else
            {
                RandNum = Math.floor(Math.random() * Squares_Temp.length);
                NewSquare = Squares_Temp[RandNum];
            }
                

            }
            
            Squares[NewSquare] = Player2;

            var c = document.getElementById("myCanvas");
            let ctx = c.getContext('2d')

            drawCircle(ctx, getCircleX(NewSquare), getCircleY(NewSquare), 25, 'black', 5)            
            changePlayer(CurrentPlayer);
        }
        else if(Difficulty == "Solo: Impossible")
        {
            /*
                Strategy:
                ---------
                1st Time
                    If Player 1 = Middle then place in a corner
                    If Player 1 = Corner then place in the middle
                    If Player 1 = Outer side (not corner) then place in corner next to player 1
                2nd & More
                    If Player 1 = Middle (Player 2 in corner)
                        Test if can block
                        Test if can complete
                        Else place in corner where row is open (row does not contain player 1)
                    If Player 1 = Corner (Player 2 in middle)
                        Test if can block
                        Test if can complete
                        Else place in empty row vertically or horizontally (row must not contain player 1)
                    If Player 1 = Outer side (Player 2 in corner next to player 1)
                        Test if can block
                        Test if can complete
                        Else place in corner                        
            */

            for(i = 0; i <= 8; i++)
            {
                if(Squares[i] == null)
                {
                    Squares_Temp.push(i);
                }
            }
            
            NewSquare = null;

            //First Time
            if(Squares_Temp.length == Squares.length-1)
            {
                Squares_Corners = [0,2,6,8];
                Squares_Sides = [1,3,5,7];

                if(Player1 == Squares[4]) //4: Middle
                {  
                    RandNum = Math.floor(Math.random() * Squares_Corners.length);
                    NewSquare = Squares_Corners[RandNum];
                }
                else if(Player1 == Squares[0] || Player1 == Squares[2] || Player1 == Squares[6] || Player1 == Squares[8]) //Corners
                {
                    NewSquare = 4; //Middle
                }
                else if(Player1 == Squares[1] || Player1 == Squares[3] || Player1 == Squares[5] || Player1 == Squares[7])//Sides
                {
                   //Corner next to player 1
                   if(Player1 == Squares[1])
                   {
                        NewSquare = 0;
                   }
                   else if(Player1 == Squares[3])
                   {
                        NewSquare = 0;
                   }
                   else if(Player1 == Squares[5])
                   {
                        NewSquare = 2;
                   }
                   else if(Player1 == Squares[7])
                   {
                        NewSquare = 6;
                   }
                }
                        
            }
            else //2nd & More Times    
            {
                
                if(Player1 == Squares[4]) //4: Middle
                {  
                    sqaureToComplete = CheckForComplete();
                    squareToBlock = CheckForBlock();

                    if(sqaureToComplete != null)
                    {
                        NewSquare = sqaureToComplete;
                    }
                    else if(squareToBlock != null)
                    {
                        NewSquare = squareToBlock;
                    } 
                    else
                    {
                        //Else place in corner where row is open (row does not contain player 1)
                        if(Squares[0] == null)
                        {
                            NewSquare = 0;
                        }
                        else if(Squares[2] == null)
                        {
                            NewSquare = 2;
                        }
                        else if(Squares[6] == null)
                        {
                            NewSquare = 6;
                        }
                        else if(Squares[8] == null)
                        {
                            NewSquare = 8;
                        }
                        else
                        {
                            RandNum = Math.floor(Math.random() * Squares_Temp.length);
                            NewSquare = Squares_Temp[RandNum];
                        }
                    }   
                }
                else if(Player1 == Squares[0] || Player1 == Squares[2] || Player1 == Squares[6] || Player1 == Squares[8]) //Corners
                {
                    
                   
                    sqaureToComplete = CheckForComplete();
                    squareToBlock = CheckForBlock(); 
                    
                    if(sqaureToComplete != null)
                    {
                        NewSquare = sqaureToComplete;
                    }
                    else if(squareToBlock != null)
                    {
                        NewSquare = squareToBlock;
                    } 
                    else
                    {                       
                        //Else place in empty row vertically or horizontally (row must not contain player 1)
                        if(Squares[1] == null && (Squares[0] == null || Squares[2] == null) && (Squares[0] != null || Squares[2] != null))
                        {
                            NewSquare = 1;
                        }
                        else if(Squares[3] == null && (Squares[0] == null || Squares[6] == null) && (Squares[0] != null || Squares[6] != null))
                        {
                            NewSquare = 3;
                        }
                        else if(Squares[5] == null && (Squares[2] == null || Squares[8] == null) && (Squares[2] != null || Squares[8] != null))
                        {
                            NewSquare = 5;
                        }
                        else if(Squares[7] == null && (Squares[6] == null || Squares[8] == null) && (Squares[6] != null || Squares[8] != null))
                        {
                            NewSquare = 7;
                        }
                        else
                        {
                            RandNum = Math.floor(Math.random() * Squares_Temp.length);
                            NewSquare = Squares_Temp[RandNum];
                        }

                        /*
                        if(Squares[1] == null)
                        {
                            NewSquare = 1;
                        }
                        else if(Squares[3] == null)
                        {
                            NewSquare = 3;
                        }
                        else if(Squares[5] == null)
                        {
                            NewSquare = 5;
                        }
                        else if(Squares[7] == null)
                        {
                            NewSquare = 7;
                        }
                        */
                    }   
                }
                else if(Player1 == Squares[1] || Player1 == Squares[3] || Player1 == Squares[5] || Player1 == Squares[7]) //Sides
                {
                                      
                    sqaureToComplete = CheckForComplete();
                    squareToBlock = CheckForBlock();
                    
                    if(sqaureToComplete != null)
                    {
                        NewSquare = sqaureToComplete;
                    }
                    else if(squareToBlock != null)
                    {
                        NewSquare = squareToBlock;
                    } 
                    else
                    {                      
                       
                        //Else place in corner
                       if(Squares[0] == null)
                        {
                            NewSquare = 0;
                        }
                        else if(Squares[2] == null)
                        {
                            NewSquare = 2;
                        }
                        else if(Squares[6] == null)
                        {
                            NewSquare = 6;
                        }
                        else if(Squares[8] == null)
                        {
                            NewSquare = 8;
                        }
                        else
                        {
                            RandNum = Math.floor(Math.random() * Squares_Temp.length);
                            NewSquare = Squares_Temp[RandNum];
                        } 
                    }   
                }

                
               
                
            }
                        



            Squares[NewSquare] = Player2;

            var c = document.getElementById("myCanvas");
            let ctx = c.getContext('2d')

            drawCircle(ctx, getCircleX(NewSquare), getCircleY(NewSquare), 25, 'black', 5)            
            changePlayer(CurrentPlayer);
        }
    }
    
}

function announceWinner(position)
{
    setTimeout(function() {
        if(CurrentPlayer == Player1) //X
        {
         Winner = Player2;
        }
        else if(CurrentPlayer == Player2) //O
        {            
         Winner = Player1;            
        }  

        drawWinnerLine(position);

        var cp = document.getElementById("currentPlayer");
        cp.innerText = "THE WINNER IS: "+ Winner;

         return;
       }, 200);
}

function drawWinnerLine(position)
{
    //Draw Winner Line
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();    
    
    if(position == "Horizontal_1")
    {
        ctx.moveTo(0, 50);
        ctx.lineTo(300, 50);  
    }
    if(position == "Horizontal_2")
    {
        ctx.moveTo(0, 150);
        ctx.lineTo(300, 150);  
    }
    if(position == "Horizontal_3")
    {
        ctx.moveTo(0, 250);
        ctx.lineTo(300, 250);  
    }
    if(position == "Vertical_1")
    {
        ctx.moveTo(50, 0);
        ctx.lineTo(50, 300);  
    }
    if(position == "Vertical_2")
    {
        ctx.moveTo(150, 0);
        ctx.lineTo(150, 300);  
    }
    if(position == "Vertical_3")
    {
        ctx.moveTo(250, 0);
        ctx.lineTo(250, 300);  
    }
    if(position == "Diagonal_1")
    {
        ctx.moveTo(0, 0);
        ctx.lineTo(300, 300);  
    }
    if(position == "Diagonal_2")
    {
        ctx.moveTo(300, 0);
        ctx.lineTo(0, 300);  
    }
    if(position == "Draw")
    {
        ctx.moveTo(0, 0);
        ctx.lineTo(300, 0);
        ctx.moveTo(300, 0);
        ctx.lineTo(300, 300);
        ctx.moveTo(300, 300);
        ctx.lineTo(0, 300);
        ctx.moveTo(0, 300);
        ctx.lineTo(0, 0);  
    }


     

    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.stroke(); 
}

function FindWinner()
{
    //Horizontal
    if(Squares[0] == Squares[1] && Squares[1] == Squares[2])
    {         
        if(Squares[0] != null)
        {
            announceWinner("Horizontal_1");           
        }       
    }    
    else if(Squares[3] == Squares[4] && Squares[4] == Squares[5])
    {         
        if(Squares[3] != null)
        {
            announceWinner("Horizontal_2");           
        }    
    }
    else if(Squares[6] == Squares[7] && Squares[7] == Squares[8])
    {         
        if(Squares[6] != null)
        {
            announceWinner("Horizontal_3");           
        }    
    }
    //Vertical
    else if(Squares[0] == Squares[3] && Squares[3] == Squares[6])
    {         
        if(Squares[0] != null)
        {
            announceWinner("Vertical_1");
        }    
    }
    else if(Squares[1] == Squares[4] && Squares[4] == Squares[7])
    {         
        if(Squares[1] != null)
        {
            announceWinner("Vertical_2");
        }    
    }
    else if(Squares[2] == Squares[5] && Squares[5] == Squares[8])
    {         
        if(Squares[2] != null)
        {
            announceWinner("Vertical_3");
        }    
    }
    //Diagonal
    else if(Squares[0] == Squares[4] && Squares[4] == Squares[8])
    {         
        if(Squares[0] != null)
        {
            announceWinner("Diagonal_1");
        }    
    }
    else if(Squares[2] == Squares[4] && Squares[4] == Squares[6])
    {         
        if(Squares[2] != null)
        {
            announceWinner("Diagonal_2");
        }    
    } 
    else
    {       
        //Draw
        isNull = true;
        for(i = 0; i <= 8; i++)
        {
            if(Squares[i] == null)
            {
                isNull = false;
            }
        }        

        if(isNull)
        {
            var cp = document.getElementById("currentPlayer");
            cp.innerText = "IT'S A DRAW!";
            Winner = "Draw";

            drawWinnerLine("Draw");
        }
        
    } 
   
}

function changePlayer(currentPlayer)
{
    if(CurrentPlayer == Player1)
    {
        CurrentPlayer = Player2
    }
    else if (CurrentPlayer == Player2)
    {
        CurrentPlayer = Player1;
    }

    var cp = document.getElementById("currentPlayer");
    cp.innerText = "Current Player: "+ CurrentPlayer

    FindWinner();
}

function getMousePosition(canvas, event) 
{
    if(Winner == null)
    {    
        var c = document.getElementById("myCanvas");

        if((CurrentPlayer == Player1) || (CurrentPlayer == Player2 && PlayMode == "Multiplayer"))
        {           
            
            //var ctx = c.getContext("2d");
            
            let rect = canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;   

            if(x < 100 && y < 100 && Squares[0] == null)
            {//Square 0
                Squares[0] = CurrentPlayer;   
                let ctx = canvas.getContext('2d')

                if(CurrentPlayer == Player1)//X
                {
                    drawX(ctx, 0, 'black', 5)
                }
                else if (CurrentPlayer == Player2)//O
                {
                    drawCircle(ctx, getCircleX(0), getCircleY(0), 25, 'black', 5)
                } 

                //ChangePlayer
                changePlayer(CurrentPlayer);
            }
            if(x > 100 && x < 200 && y < 100 && Squares[1] == null)
            {//Square 1
                Squares[1] = CurrentPlayer;        
                let ctx = canvas.getContext('2d')

                if(CurrentPlayer == Player1)//X
                {
                    drawX(ctx, 1, 'black', 5)
                }
                else if (CurrentPlayer == Player2)//O
                {
                    drawCircle(ctx, getCircleX(1), getCircleY(1), 25, 'black', 5)
                } 

                 //ChangePlayer
                 changePlayer(CurrentPlayer);
            }
            if(x > 200 && y < 100 && Squares[2] == null)
            {//Square 2
                Squares[2] = CurrentPlayer;        
                let ctx = canvas.getContext('2d')

                if(CurrentPlayer == Player1)//X
                {
                    drawX(ctx, 2, 'black', 5)
                }
                else if (CurrentPlayer == Player2)//O
                {
                    drawCircle(ctx, getCircleX(2), getCircleY(2), 25, 'black', 5)
                } 

                 //ChangePlayer
                 changePlayer(CurrentPlayer);
            }
            if(x < 100 && y > 100 && y < 200 && Squares[3] == null)
            {//Square 3
                Squares[3] = CurrentPlayer;
                let ctx = canvas.getContext('2d')

                if(CurrentPlayer == Player1)//X
                {
                    drawX(ctx, 3, 'black', 5)
                }
                else if (CurrentPlayer == Player2)//O
                {
                    drawCircle(ctx, getCircleX(3), getCircleY(3), 25, 'black', 5)
                }    

                 //ChangePlayer
                 changePlayer(CurrentPlayer);
            }
            if(x > 100 && x < 200 && y > 100 && y < 200 && Squares[4] == null)
            {//Square 4
                Squares[4] = CurrentPlayer;
                let ctx = canvas.getContext('2d')

                if(CurrentPlayer == Player1)//X
                {
                    drawX(ctx, 4, 'black', 5)
                }
                else if (CurrentPlayer == Player2)//O
                {
                    drawCircle(ctx, getCircleX(4), getCircleY(4), 25, 'black', 5)
                }     

                 //ChangePlayer
                 changePlayer(CurrentPlayer);
            }
            if(x > 200 && y > 100 && y < 200 && Squares[5] == null)
            {//Square 5
                Squares[5] = CurrentPlayer;
                let ctx = canvas.getContext('2d')

                if(CurrentPlayer == Player1)//X
                {
                    drawX(ctx, 5, 'black', 5)
                }
                else if (CurrentPlayer == Player2)//O
                {
                    drawCircle(ctx, getCircleX(5), getCircleY(5), 25, 'black', 5)
                }  

                 //ChangePlayer
                 changePlayer(CurrentPlayer);
            }
            if(x < 100 && y > 200 && Squares[6] == null)
            {//Square 6
                Squares[6] = CurrentPlayer; 
                let ctx = canvas.getContext('2d')

                if(CurrentPlayer == Player1)//X
                {
                    drawX(ctx, 6, 'black', 5)
                }
                else if (CurrentPlayer == Player2)//O
                {
                    drawCircle(ctx, getCircleX(6), getCircleY(6), 25, 'black', 5)
                }     

                 //ChangePlayer
                 changePlayer(CurrentPlayer);
            }
            if(x > 100 && x < 200 && y > 200 && Squares[7] == null)
            {//Square 7
                Squares[7] = CurrentPlayer;  
                let ctx = canvas.getContext('2d')

                if(CurrentPlayer == Player1)//X
                {
                    drawX(ctx, 7, 'black', 5)
                }
                else if (CurrentPlayer == Player2)//O
                {
                    drawCircle(ctx, getCircleX(7), getCircleY(7), 25, 'black', 5)
                }      

                 //ChangePlayer
                 changePlayer(CurrentPlayer);
            }
            if(x > 200 && y > 200 && Squares[8] == null)
            {//Square 8
                Squares[8] = CurrentPlayer;   
                let ctx = canvas.getContext('2d')

                if(CurrentPlayer == Player1)//X
                {
                    drawX(ctx, 8, 'black', 5)
                }
                else if (CurrentPlayer == Player2)//O
                {
                    drawCircle(ctx, getCircleX(8), getCircleY(8), 25, 'black', 5)
                }   

                 //ChangePlayer
                 changePlayer(CurrentPlayer);
            }
           
            //------------------------//
            if(CurrentPlayer == Player2 && PlayMode != "Multiplayer")
            {               
                setTimeout(function() {
                    Computer_Player(PlayMode);
                     return;
                   }, 200);
                
            }
        }
    }
                
}

let canvasElem = document.querySelector("canvas");
  
canvasElem.addEventListener("mousedown", function(e)
{
    getMousePosition(canvasElem, e);
});