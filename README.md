# Supadata Social Media Transcriber

[![Powered by Supadata](https://img.shields.io/badge/Powered%20by-Supadata-blue)](https://supadata.ai)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)

An automated multi-platform transcription tool that extracts timestamped captions from **YouTube**, **TikTok**, and **Instagram Reels** into structured JSON and plain text using the official [`@supadata/js`](https://www.npmjs.com/package/@supadata/js) SDK.

---

## ✨ Features

- **Universal Input:** Transcribe YouTube videos & Shorts, TikTok clips, Instagram Reels, and direct audio files with one unified API.
- **Hybrid Extraction:** Automatically pulls native captions when available; falls back to high-accuracy AI speech-to-text when captions are missing.
- **Structured Output:** Exports both raw timestamped subtitle segments (`offset` and `duration`) and full combined transcripts.
- **Zero Scraping Friction:** No headless browsers, proxy rotations, or IP blocking headaches.

---

## 🚀 Quickstart

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/1tuberus/supadata-social-transcriber.git
cd supadata-social-transcriber
npm install
```

### 2. Configuration

Set your Supadata API key from the [Supadata Dashboard](https://dash.supadata.ai):

```bash
export SUPADATA_API_KEY="your_api_key_here"
```

### 3. Usage

Run transcription on any supported social media URL:

```bash
node transcribe.js "https://youtu.be/dQw4w9WgXcQ"
```

Or run batch processing across multiple links:

```bash
node batch.js
```

---

## 🛠 Code Example

```javascript
const { Supadata } = require("@supadata/js");

const supadata = new Supadata({
  apiKey: process.env.SUPADATA_API_KEY
});

async function transcribeVideo(videoUrl) {
  try {
    console.log(`Extracting transcript for: ${videoUrl}`);
    const result = await supadata.transcript({
      url: videoUrl,
      mode: "auto"
    });

    console.log(`Detected Language: ${result.lang}`);
    console.log(`Found ${result.content.length} transcript segments.`);
    
    const fullText = result.content.map(c => c.text).join(" ");
    console.log(`Preview: ${fullText.substring(0, 150)}...`);
    
    return result;
  } catch (error) {
    console.error("Transcription error:", error);
  }
}

transcribeVideo("https://youtu.be/dQw4w9WgXcQ");
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
