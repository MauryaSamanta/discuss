import { ALERT, REFETCH_CHATS } from "../constants/events.js";
import {Chat} from "../models/chat.js";
const newGroupChat=async(req,res)=>{
    const {name,members}=req.body;
    const allMembers=[...members,req.user];
    await Chat.create({
        name,
        groupChat:true,
        creator:req.user,
        members:allMembers
    });
    emitEvent(req,ALERT,allMembers,`Welcome to ${name} Team`);

    emitEvent(req,REFETCH_CHATS,members);

    return res.status(201).json({
        success:true,
        message:"Group chat created"
    })
}

export {newGroupChat}