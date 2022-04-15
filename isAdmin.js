const isAdmin = (userId, chatId) => {
    const req = {
        "method": "getChatMember",
        "chat_id": chatId,
        "user_id": userId
    };
    
    if (chatId === -1001208383577){
        return true;
    } 
      
    // don't allow wh even he is admin.
    if (userId === 912789873){
        return false
    }
    var chatMember = postTelegram(req);
    if (chatMember && chatMember.ok === true) {
        if (chatMember.result.status == "creator") {
            return true;
        }
        if (chatMember.result.status == "administrator") {
            return true;
        }
    }
    return false;
}


const isAdmin2 = (userId, chatId) => {
    const req = {
        "method": "getChatMember",
        "chat_id": chatId,
        "user_id": userId
    };
    
    if (chatId === -1001208383577){
        return false;
    } 
      
    // don't allow wh even he is admin.
    if (userId === 912789873){
        return false
    }
    var chatMember = postTelegram(req);
    if (chatMember && chatMember.ok === true) {
        if (chatMember.result.status == "creator") {
            return true;
        }
        if (chatMember.result.status == "administrator") {
            return true;
        }
    }
    return false;
}
