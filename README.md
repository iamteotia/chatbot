# Ultra-Modern AI Chatbot Website

An elegant, minimalist AI chatbot with pitch-black background and modern design, powered by OpenRouter API.

## Features

- 🎨 Ultra-modern minimalist design
- ⚫ Pitch-black background with grey search toolbar
- 🤖 Powered by OpenRouter API (GPT-3.5 Turbo)
- 💬 Real-time conversation interface
- 📱 Fully responsive design
- ⚡ Fast and lightweight

## Quick Start

### Local Development

1. Clone this repository
2. Open `index.html` in your browser
3. Start chatting!

### Deployment on GitHub Pages

#### Method 1: Using GitHub Web Interface

1. Create a new repository on GitHub
2. Upload these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Go to **Settings** → **Pages**
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your site will be live at: `https://[your-username].github.io/[repository-name]`

#### Method 2: Using Git Commands

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: AI chatbot website"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/[your-username]/[repository-name].git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings as described in Method 1.

## File Structure

```
.
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # JavaScript logic and API integration
└── README.md       # Documentation
```

## Technologies Used

- HTML5
- CSS3 (with animations)
- Vanilla JavaScript
- OpenRouter API

## Customization

### Changing AI Model

In `script.js`, modify the model parameter:

```javascript
model: 'openai/gpt-3.5-turbo'  // Change to any OpenRouter supported model
```

### Updating API Key

Replace the API key in `script.js`:

```javascript
const API_KEY = 'your-new-api-key-here';
```

### Styling Changes

All styling is in `style.css`. Key color variables:
- Background: `#000000` (pitch black)
- Input container: `#1a1a1a` (dark grey)
- Text: `#ffffff` (white)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use and modify as needed.

## Notes

⚠️ **Important**: Never commit API keys to public repositories. Consider using environment variables or backend proxy for production applications.
