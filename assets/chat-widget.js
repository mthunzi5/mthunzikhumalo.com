// Inject floating chat widget once on any page
(function() {
  // Only inject once
  if (document.getElementById('chatToggle')) return;

  const chatHTML = `
    <!-- AI Chat Assistant -->
    <button id="chatToggle" aria-label="Open AI Chat Assistant">
      <i class="fas fa-comments"></i>
    </button>

    <div id="chatWindow" class="hidden">
      <div class="chat-header">
        <div class="chat-header-info">
          <div class="chat-avatar">
            <i class="fas fa-robot"></i>
          </div>
          <div class="chat-header-text">
            <h3>Global-Future AI</h3>
            <p>Your virtual assistant</p>
          </div>
        </div>
        <button id="chatClose" class="chat-close" aria-label="Close chat">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div id="chatMessages" class="chat-messages">
        <!-- Messages will be added here dynamically -->
      </div>

      <div class="chat-input-container">
        <button id="voiceBtn" class="chat-btn voice-btn" title="Voice input" aria-label="Voice input">
          <i class="fas fa-microphone"></i>
        </button>
        <input 
          type="text" 
          id="userInput" 
          class="chat-input" 
          placeholder="Ask me anything about Global-Future..."
          aria-label="Chat input"
        />
        <button id="speakerBtn" class="chat-btn speaker-btn" title="Toggle voice output" aria-label="Toggle voice output">
          <i class="fas fa-volume-up"></i>
        </button>
        <button id="sendBtn" class="chat-btn send-btn" aria-label="Send message">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', chatHTML);
})();
