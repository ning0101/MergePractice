var mapArray, ctx, currentImgMainX, currentImgMainY;
var imgMountain, imgMain, imgEnemy;
$(document).ready(function(){
    mapArray =[0,1,1,0,0,0,3,1,2];
    ctx = $("#mycanvas")[0].getContext("2d");
    
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMainX = 0;
    currentImgMainY = 0;
    imgMain.onload = function(){
    ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);
        
    };
    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(var x in mapArray)
            {
              if(mapArray[x]==1)
              {
               ctx.drawImage(imgMountain,290,0,30,28,x%3*200,Math.floor(x/3)*200,200,200);    //32,65,32,32
              }
              else if(mapArray[x]==3)
              {
               ctx.drawImage(imgEnemy,627,56,70,135,x%3*200,Math.floor(x/3)*200,200,200);      //7,40,104,135
              }
            }
        };
    };
});
$(document).keydown(function(event){
    var targetImgMainX, targetImgMainY, targetBlock, cutImgPositionX;
    event.preventDefault();
    switch(event.which){
        case 37:
            targetImgMainX = currentImgMainX-200;
            targetImgMainY = currentImgMainY;
            cutImgPositionX = 175;
            break;
        case 38:
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-200;
            cutImgPositionX = 355;
            break;
        case 39:
            targetImgMainX = currentImgMainX+200;
            targetImgMainY = currentImgMainY;
            cutImgPositionX = 540;
            break;
            
        case 40:
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+200;
            cutImgPositionX = 0;
            break;
        default:
            return;    
            
    }   
    
    if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0)
        {
            targetBlock = targetImgMainX/200 + targetImgMainY/200*3;
        }
    else{
        targetBlock = -1;
    }
    
    ctx.clearRect(currentImgMainX, currentImgMainY, 200, 200);
    if(targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3)
        {
            //
        }
    else{
        $("talkBox").text("");
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;
    }
    
    ctx.drawImage(imgMain, cutImgPositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);
    
    switch(mapArray[targetBlock])
        {
            case undefined:
                $("#talkBox").text("boundary");
                break;
            case 1:
                $("#talkBox").text("禁止通行!!");
                break;
            case 2:
                $("#talkBox").text("終點");
                break;
            case 3:
                $("#talkBox").text("我好冷，可以借我一件衣服嗎?");
                
                break;
                
                
        }
});

        