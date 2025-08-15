import { useState } from "react"; // cài: npm install react-icons

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div>
      {/* Nút icon chat */}
      <button
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#0d6efd",
          color: "white",
          borderRadius: "50%",
          width: "65px",
          height: "65px",
          border: "none",
          fontSize: "28px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
         <i className="fa-regular fa-comment"></i>
      </button>

      {/* Hộp chat */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "95px",
            right: "20px",
            width: "380px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "12px",
              backgroundColor: "#0d6efd",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            Chat với chúng tôi
          </div>

          {/* Nội dung chat */}
          <div
            style={{
              flex: 1,
              padding: "12px",
              overflowY: "auto",
              maxHeight: "300px",
              backgroundColor: "#f8f9fa",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "8px",
                  textAlign: msg.sender === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    backgroundColor:
                      msg.sender === "user" ? "#0d6efd" : "#e4e6eb",
                    color: msg.sender === "user" ? "white" : "black",
                    padding: "8px 12px",
                    borderRadius: "16px",
                    display: "inline-block",
                    maxWidth: "80%",
                    wordWrap: "break-word",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Ô nhập */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #ddd",
              backgroundColor: "#fff",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập tin nhắn..."
              style={{
                flex: 1,
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              style={{
                marginLeft: "8px",
                backgroundColor: "#0d6efd",
                color: "white",
                border: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
