const { Supadata } = require("@supadata/js");

const apiKey = process.env.SUPADATA_API_KEY || "sd_39cc4ea592be440b13510928673f8dcf";
const supadata = new Supadata({ apiKey });

const sampleUrls = [
  "https://youtu.be/dQw4w9WgXcQ"
];

async function runBatch() {
  console.log(`Starting batch transcription for ${sampleUrls.length} videos...`);
  for (const url of sampleUrls) {
    try {
      const res = await supadata.transcript({ url, mode: "auto" });
      console.log(`✓ ${url} | Lang: ${res.lang} | Segments: ${res.content ? res.content.length : 0}`);
    } catch (e) {
      console.error(`✗ ${url} | Failed:`, e.message);
    }
  }
}

runBatch();
