# AI-chatbot-
🤖 Animated AI Chatbot Interface A clean, responsive, and animated chatbot user interface built with HTML, CSS, and JavaScript. It features engaging entrance animations, styled message components, ripple effects on the send button, and connects to a backend API for AI-generated replies.
🌟 Features
⚡ Smooth UI animations (fade, slide-in, ripple)

💬 Distinct user and bot message bubbles

📱 Responsive design

🧠 Connects to a backend AI API (/api/chat)

🎨 Styled scrollbars and hover effects

📁 Project Structure
graphql
Copy
Edit
📦 Animated-AI-Chatbot/
 ├── index.html           # Main frontend HTML file
 ├── style.css            # Embedded CSS (inside index.html)
 ├── script.js            # Embedded JS (inside index.html)
 └── README.md            # Project documentation
🚀 Getting Started
1. Clone the Repository
git clone https://github.com/AmitKumar9430/animated-ai-chatbot.git
cd animated-ai-chatbot
2. Start Your Backend Server
Ensure your backend is running and accepting requests at:

 
POST http://localhost:3000/api/chat
Expected request body:

json
 
{ "message": "Hello" }
Expected response:

json
 
{ "reply": "Hi there! How can I help you?" }
Replace the backend URL in the JS code if needed.

🔧 Deployment
You can host the frontend using:

GitHub Pages

Vercel

Netlify

Local server (Live Server extension or similar)

For a full-stack deployment, consider:

Render

Heroku

Vercel + Serverless Functions

📝 Customization Tips
🎨 Modify animations in the CSS @keyframes sections

🧠 Integrate OpenAI/GPT-based APIs in your backend

🌐 Update fetch('http://localhost:3000/api/chat') to production URL

📸 Screenshot
![Screenshot 2025-05-28 013252](https://github.com/user-attachments/assets/73c6f75b-c4d4-442d-96fa-b85913491976)

🧑‍💻 Author
Amit Kumar

🔗 LinkedIn
 www.linkedin.com/in/amit-kumar-9t5m2i3a
 GitHub
https://github.com/AmitKumar9430/

📄 License
This project is licensed under the MIT License.

