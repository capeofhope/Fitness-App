import { io } from "socket.io-client";

let socket;

export function initiateSocketConnection() {
  socket = io({
    path: "/api/socket"
  });
  console.log("Connecting socket...");
}

export function joinCommunity(communityId) {
  if (socket) socket.emit("joinCommunity", communityId);
}

export function sendMessage(communityId, message) {
  if (socket) socket.emit("sendMessage", { communityId, message });
}

export function onNewMessage(callback) {
  if (socket) socket.on("newMessage", callback);
}

export function disconnectSocket() {
  if (socket) socket.disconnect();
}
