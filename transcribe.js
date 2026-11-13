const { Supadata } = require("@supadata/js");

const apiKey = process.env.SUPADATA_API_KEY || "sd_39cc4ea592be440b13510928673f8dcf";
const targetUrl = process.argv[2] || "https://youtu.be/dQw4w9WgXcQ";

const supadata = new Supadata({ apiKey });

async function run() {
  console.log(`[Supadata] Processing: ${targetUrl}`);
  try {
    const result = await supadata.transcript({
      url: targetUrl,
      mode: "auto"
    });

    console.log(`[Supadata] Language: ${result.lang}`);
    console.log(`[Supadata] Total Segments: ${result.content ? result.content.length : 0}`);
    
    if (result.content && result.content.length > 0) {
      const fullText = result.content.map(s => s.text).join(" ");
      console.log(`\n--- TRANSCRIPT PREVIEW ---\n${fullText.slice(0, 300)}...\n`);
    }
  } catch (err) {
    console.error("[Supadata] Error:", err.message);
  }
}

run();
