const API_KEY = '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';
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

let conversationHistory = [];

// Event listeners
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const message = userInput.value.trim();

    if (!message) return;

    // Display user message
    addMessage(message, 'user');
    userInput.value = '';

    // Add to conversation history
    conversationHistory.push({
        role: 'user',
        content: message
    });

    // Show typing indicator
    const typingIndicator = addTypingIndicator();

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.href,
                'X-Title': 'AI Assistant'
            },
            body: JSON.stringify({
                model: 'openai/gpt-3.5-turbo',
                messages: conversationHistory
            })
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        const assistantMessage = data.choices[0].message.content;

        // Remove typing indicator
        typingIndicator.remove();

        // Display assistant message
        addMessage(assistantMessage, 'assistant');

        // Add to conversation history
        conversationHistory.push({
            role: 'assistant',
            content: assistantMessage
        });

    } catch (error) {
        typingIndicator.remove();
        addMessage('Sorry, something went wrong. Please try again.', 'assistant');
        console.error('Error:', error);
    }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;

    messageDiv.appendChild(contentDiv);
    chatContainer.appendChild(messageDiv);

    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function addTypingIndicator() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message assistant';

    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';

    messageDiv.appendChild(typingDiv);
    chatContainer.appendChild(messageDiv);

    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;

    return messageDiv;
}