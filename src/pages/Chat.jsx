import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! How can I help you today?" },
  ]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { from: "me", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Fake bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Temporary message" },
      ]);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto h-[85vh] mt-6 flex flex-col border rounded-xl 
      bg-white dark:bg-neutral-900 shadow-md">

      {/* HEADER */}
      <div className="p-4 border-b dark:border-neutral-700">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Real-Time Chat
        </h1>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.from === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-xl max-w-[75%] text-sm font-medium shadow-md
              ${
                msg.from === "me"
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-200 text-black dark:bg-neutral-800 dark:text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* INPUT AREA */}
      <div className="p-4 border-t dark:border-neutral-700 flex items-center gap-3">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white dark:bg-neutral-800 dark:text-white text-black border 
            border-gray-300 dark:border-neutral-700"
        />

        <Button onClick={sendMessage}>
          <Send size={18} />
        </Button>
      </div>
    </div>
  );
}
