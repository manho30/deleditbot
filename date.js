function parseTime(date){
    const hours = Math.floor(date * 24)
    const Days = Math.floor(hours/24);
    const Remainder = hours % 24;
    const hour = Math.floor(Remainder);
    var minute = Math.floor(60*(Remainder-hour));
    if (Number(Days) > 1){
        var s = "days";
    } else {
        var s = "day";
    }
    if (Number(hour) > 1){
        var x = "hours";
    } else {
        var x = "hour";
    } 
    return Days + " "+ s + " " + hour + " " + x
}
const testDate = () => {
    var day=1.7
    var timeResult=parseTime(day)
    Logger.log(timeResult)
} 