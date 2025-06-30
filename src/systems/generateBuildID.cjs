// generateBuildId.js
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

try {
  const commitHash = execSync("git rev-parse --short HEAD").toString().trim();
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const buildId = `${timestamp}-${commitHash}`;

  const outputPath = path.join(__dirname, "src", "buildId.js");
  fs.writeFileSync(outputPath, `export default "${buildId}";\n`);
  console.log("✅ Build ID gerado:", buildId);
} catch (err) {
  console.error("❌ Erro ao gerar buildId:", err.message);
}