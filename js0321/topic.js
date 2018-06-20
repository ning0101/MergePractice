var topic =[
    
    "短腿柯基",
    "性感薩摩",
    "中二哈士奇",
    "可愛柴犬",
    "抱歉巴哥",
    
];

var startDate = new Date();   //將當下時間點抓取下來，存到starDate

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1); 
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    
}

setMonthAndDay(2,21);    //自己做的函數