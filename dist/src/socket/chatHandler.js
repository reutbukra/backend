"use strict";
module.exports = (io, socket) => {
    // {'to': destination user id,
    //   'message' : message to send}
    const sendMessage = (payload) => {
        console.log('chat:send_message');
        const to = payload.to;
        const message = payload.message;
        const from = socket.data.user;
        io.to(to).emit("chat:message", { 'to': to, 'from': from, 'message': message });
    };
    console.log('register chat handlers');
    socket.on("chat:send_message", sendMessage);
};
//# sourceMappingURL=chatHandler.js.map