{
    const todayDate = new Date();
    const day = todayDate.getDay();

    function isWeekend(){
            const daysMap = {
              0: 'weekend',
              1: 'weekday',
              2: 'weekday',
              3: 'weekday',
              4: 'weekday',
              5: 'weekday',
              6: 'weekend'
            };
            return daysMap[day];
        }
        console.log(`Is it weekend?: ${isWeekend()}`);
}