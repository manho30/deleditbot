const sendMessageManual = () => {
    UrlFetchApp.fetch("api.telegram.org/bot" + botToken + "/sendMessage?chat_id=-1001208383577&text=Good Morning... \nShhh... quiet now. Tan BoonXiang has been restricted wh from typing here. Unban at: 11 Feb 09:06 am (UTC+0800)")
}

const connectDB = async () => {
    const data = JSON.stringify({
        "collection": "del_msg",
        "database": "tgbot",
        "dataSource": "Cluster0",
         /*
        "projection": {
            "_id": 1
        }
        */
    });

    var config = {
        "method": 'post',
        'Content-Type': 'application/json',
        "muteHttpExceptions": true,
        "headers": {
            'Access-Control-Request-Headers': '*',
            'api-key': '6203caaba7965a4b1f10f9e9', 
        }, 
        "payload": data
    };

    const response = await JSON.stringify(UrlFetchApp.fetch("https://data.mongodb-api.com/app/data-giamo/endpoint/data/beta/action/findOne", config))
    Logger.log(JSON.stringify(response));
}