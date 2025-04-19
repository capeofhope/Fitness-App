import { Server } from "socket.io";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, {
      path: "/api/socket"
    });

    io.on("connection", (socket) => {
      console.log("A user connected:", socket.id);

      // Join a community room
      socket.on("joinCommunity", (communityId) => {
        socket.join(communityId);
        console.log(`User ${socket.id} joined community ${communityId}`);
      });

      // Handle sending a message
      socket.on("sendMessage", ({ communityId, message }) => {
        io.to(communityId).emit("newMessage", message);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });

    res.socket.server.io = io;
    console.log("Socket.io server initialized");
  }
  res.end();
}
