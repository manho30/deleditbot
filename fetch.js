const fetch = (link) =>	{
    return UrlFetchApp.fetch(link)
} 
const fetchingWebhook = () => {
    const res = fetch("api.telegram.org/bot"+botToken+"/setWebhook?url="+gasLink)
    Logger.log(res)
}
const getUpdatesWebhook = () => {
    const res = fetch("api.telegram.org/bot"+botToken+"/getUpdates")
    Logger.log(res)
}
const deletewebhook = () => {
    const res = fetch("api.telegram.org/bot"+botToken+"/deletewebhook")
    Logger.log(res)
}
var testList2 = '{"update_id":427275035,"message":{"message_id":211,"from":{"id":-1001449238584, "is_bot":false,"first_name":"Yufeng Deng","last_name":"峰哥","username":"fennng","language_code":"en-US"},"chat":{"id":"-1001449238584","first_name":"Yufeng Deng","last_name":"峰哥","username":"fennng","type":"privatew"},"date":1540807486,"text":"习","entities":[{"offset":0,"length":5,"type":"bot_command"}]}}';
var isDebug = false;
 var grp = '{"update_id":503847942,"message":{"message_id":3156,"from":{"id":1381836444,"is_bot":false,"first_name":"M an Ho","username":"manho30","language_code":"en"},"chat":{"id":-1001449238584,"title":"test","type":"supergroup"},"date":1644573962,"text":"/mute"}} '
function debug() {
  e = {};
  e.postData = {};
  e.postData.contents = grp;
  doPost(e);
}
function testing(){
   Logger.log(checkDate("2020-12-31"))
}

function testGetResult() {
    var data = getSchoolData("KEB307") 
    Logger.log(data)
}