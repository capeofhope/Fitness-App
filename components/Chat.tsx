import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  initiateSocketConnection,
  joinCommunity,
  sendMessage,
  onNewMessage,
  disconnectSocket
} from "@/lib/socket";

interface Message {
  sender: string;
  content: string;
  timestamp: string;
}

export default function CommunityChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const router = useRouter();
  const { id: communityId } = router.query;

  useEffect(() => {
    if (!communityId) return;

    initiateSocketConnection();
    joinCommunity(communityId as string);

    onNewMessage((message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      disconnectSocket();
    };
  }, [communityId]);

  const handleSend = () => {
    if (!input.trim() || !communityId) return;

    const messageObj: Message = {
      sender: "User", // Replace with actual logged-in user
      content: input,
      timestamp: new Date().toISOString()
    };

    sendMessage(communityId as string, messageObj);
    setInput("");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Community Chat</h2>

      <div className="border rounded-lg p-4 h-96 overflow-y-scroll bg-white shadow">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong>{msg.sender}</strong>: {msg.content}
            <span className="text-xs text-gray-500 ml-2">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>

      <div className="flex mt-4">
        <input
          type="text"
          className="border rounded-l-lg p-2 flex-1"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
