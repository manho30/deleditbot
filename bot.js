require("Const.js")

const bot = (body) => {
    if(body.message){
       const handleMessage = (body) => {
           if(body.message.chat.type === "private"){
                if(body.message.text.indexOf("/start") === 0){
                    return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, "我可以帮助您的群组删除已编辑消息及阿拉伯语\n需要管理员权限。")] 
          } 
           } else {
                if (body.message){
                    if (body.message.from.id == 1534723719){
                        silent = false
                        if (silent === true){
                           return [sendMessage(body.message.chat.id, `${getMentionName(body.message.from)} TUHAN TIDAK DIBENAR CAKAP`), deleteMessage(body.message.chat.id, body.message.message_id)]
                        } 
                    }
                   
                    if (body.message.text.indexOf("/id") === 0 ) {
                        return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, `${body.message.chat.id}`, "", body.message.message_id)] 
                    }
                    
                    if (body.message.text.indexOf("/pin") === 0 || body.message.text.indexOf("置顶") >= 0){
                        if(body.message.reply_to_message){
                            if (isAdmin(body.message.from.id, body.message.chat.id)) {
                                return [sendChatAction(body.message.chat.id, "typing"), pin(body.message.chat.id, body.message.reply_to_message.message_id),  sendMessage(body.message.chat.id, escapeMarkDown("Mesasage has pinned"), null, body.message.message_id)]
                            } else {
                                return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, "I don't like shit people touching admin commands.", null, body.message.message_id)] 
                            } 
                        } else {
                            return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, "You must specif a message to pin!", null, body.message.message_id)] 
                        }
                    } 
                    if (body.message.text.indexOf("/del") === 0 ){
                        if (isAdmin(body.message.from.id, body.message.chat.id)) {
                            return [sendMessage(body.message.chat.id, `${getMentionName(body.message.reply_to_message.from)} 发送的消息已被删除。`), deleteMessage(body.message.chat.id, body.message.reply_to_message.message_id)] 
                        } else {
                            return sendMessage(body.message.chat.id, "I don't like shit people touching admin commands.", null, body.message.message_id)
                        } 
                    }
                    if (body.message.text.indexOf("/unmute") === 0 ){
                        if (isAdmin(body.message.from.id, body.message.chat.id)) {
                            if (body.message.reply_to_message) {
                                return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, `changed permissions for ${getMentionName(body.message.reply_to_message.from)}`
                                    + `\n\n`
                                    + `Duration: Forever\n\n`
                                    + `+ Send messages` + `\n`
                                    + `+ Send stickers & GIFs\n`
                                    + `+ Send media\n`
                                    + `+ Send polls\n`), unmute(body.message.chat.id, body.message.reply_to_message.from.id) ] 
                            } else {
                                return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id,"You need to specify a user with replying.")] 
                            } 
                        } else {
                            return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, "I don't like people playing admin command.")] 
                        } 
                    } 
                    if (body.message.text.indexOf("/kick") >=0 ) {
                        if (isAdmin(body.message.from.id, body.message.chat.id)) {
                            return[sendChatAction(body.message.chat.id, `typing`), kick(body.message.chat.id, body.message.reply_to_message.from.id), sendMessage(body.message.chat.id, `Bye bye! Banned  ${getMentionName(body.message.reply_to_message.from)}`) ] 
                        } else {
                             // for those who reply to them self
                             // make them happy, just kick them.
                             if (body.message.from.id === body.message.reply_to_message.from.id) {
                                 return[sendChatAction(body.message.chat.id, "typing"), kick(body.message.chat.id, body.message.reply_to_message.from.id), sendMessage(body.message.chat.id, `Bye bye! Banned  ${getMentionName(body.message.reply_to_message.from)}`) ] 
                             } else {
                                 return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, "I don't like shit people touching admin commands.", null, body.message.message_id)] 
                             } 
                        } 
                    } 
                    if (body.message.text.indexOf("/mute") >= 0 ) {
                        var param = body.message.text.trim().split(" ");
                        // remove empty strings
                        param = param.filter(function(para){
                        if (para){
                            return true
                        }
                        });
                        if (param[1]){                          
                            if (body.message.reply_to_message) {
                                if (body.message.reply_to_message.from.id != 1381836444){
                                    if (isAdmin(body.message.from.id, body.message.chat.id)){
                                        if (!isAdmin(body.message.reply_to_message.from.id, body.message.chat.id)){
                                            if (param[2]){
                                                return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, `Shhh...quiet now.` + `\n`
                                                + `changed permissions for ${getMentionName(body.message.reply_to_message.from)}`
                                                + `\n\n${getMentionName(body.message.reply_to_message.from)},  ${param[2]} `
                                                + `\n\n`
                                                + `Duration: ${parseTime(param[1])}\n\n`
                                                + `- Send messages` + `\n`
                                                + `- Send stickers & GIFs\n`
                                                + `- Send media\n`
                                                + `- Send polls\n`), mute(body.message.chat.id, body.message.reply_to_message.from.id, param[1] * 86400)] 
                                            } else {
                                                return [sendMessage(body.message.chat.id, `Shhh...quiet now.` + `\n`
                                                + `changed permissions for ${getMentionName(body.message.reply_to_message.from)}`
                                                + `\n\n`
                                                + `Duration: ${parseTime(param[1])}\n\n`
                                                + `- Send messages` + `\n`
                                                + `- Send stickers & GIFs\n`
                                                + `- Send media\n`
                                                + `- Send polls\n`), mute(body.message.chat.id, body.message.reply_to_message.from.id, param[1] * 86400)]
                                            }
                                        } else {
                                            return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, "Why should I ban an admin? It's sound like pretty.", null, body.message.message_id)] 
                                        } 
                                    } else {
                                        return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, `${getMentionName(body.message.from)} ,please don't play admin's command.`, null, body.message.message_id)] 
                                    }
                                } else {
                                    return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, "Why should I ban ManHo Jiejie?  ", null, body.message.message_id)] 
                                }
                            } else {
                                return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, "You need to specify a user.", null, body.message.message_id  )] 
                            } 
                        } else {
                            if (!body.message.reply_to_message){
                                return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, "Please specify the user", null, body.message.message_id )] 
                            } else {
                                return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, `Shh... quiet now.\n`
                                    + `changed permissions for ${getMentionName(body.message.reply_to_message.from)}`
                                    + `\n\n`
                                    + `Duration: Forever\n\n`
                                    + `- Send messages` + `\n`
                                    + `- Send stickers & GIFs\n`
                                    + `- Send media\n`
                                    + `- Send polls\n`), mute(body.message.chat.id, body.message.reply_to_message.from.id,0)] 
                            } 
                        } 
                    } 
                    if (isArabic(body.message.text)) {
                        return [sendChatAction(body.message.chat.id, "typing"),deleteMessage(body.message.chat.id, body.message.message_id), sendMessage(body.message.chat.id, `${getMentionName(body.message.from)} I don't like Arabic. Get lost here.`)] 
                    }
                    if (isYoutube(body.message.text)) {
                        return [sendChatAction(body.message.chat.id, "typing"), sendMessage(body.message.chat.id, "Ohh this is youtube link.")] 
                    } 
                } 
           } 
        }
        return handleMessage(body)
    }
    if (body.callback_query){
        if(body.callback_query.data.indexOf("pri") >= 0){
            return editMessage(body.callback_query.message.chat.id, body.callback_query.message.message_id, "✅您已同意并已详细阅读用户协议。")                         
        }                      
    } 
    if(body.edited_message){
        const deleted = (body) => {
            return deleteMessage(body.edited_message.chat.id, body.edited_message.message_id)
        }
        const sendDeleted = (body) => {
            return sendMessage(body.edited_message.chat.id,getMentionName(body.edited_message.from) + ", I don't like edited message. Get lost.")
        } 
        
        const muting = (body) => {
            return mute(body.edited_message.chat.id, body.edited_message.from.id, 300)
        }
        // ignore admin
        if(!isAdmin2(body.edited_message.from.id, body.edited_message.chat.id)){
            postTelegram(sendChatAction(body.edited_message.chat.id, "typing"))
            const del = postTelegram(deleted(body));
            const res = postTelegram(sendDeleted(body));
            const muted = postTelegram(muting(body))
            if(res.ok == true){
                if(autoDel === true){
                    Utilities.sleep(3000)
                        postTelegram({
                            "method": "deleteMessage", 
                            "chat_id": res.result.chat.id, 
                            "message_id": res.result.message_id
                    })
                }
            }
        }
    } 
}