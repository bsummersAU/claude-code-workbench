#!/bin/bash
# post-create.sh — runs after devcontainer is created
# Non-critical failures should not block the container from starting

# Resolve workspace root (works regardless of mount path or folder name)
WORKSPACE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
echo "=== Workspace: ${WORKSPACE_DIR} ==="

# --- Claude Code ---
echo "=== Installing Claude Code ==="
if ! command -v claude &> /dev/null; then
  curl -fsSL https://claude.ai/install.sh | bash || echo "WARN: Claude Code install failed — install manually later"
  # Ensure claude is on PATH for the rest of this script
  export PATH="$HOME/.claude/bin:$HOME/.local/bin:$PATH"
fi

# --- System packages ---
echo "=== Installing system packages ==="
sudo apt-get update -qq
sudo apt-get install -y -qq pandoc python3-pip python3-venv 2>&1 | tail -3 || echo "WARN: Some system packages failed to install"

# --- Python document tools ---
echo "=== Installing Python document tools ==="
pip3 install --break-system-packages python-pptx openpyxl pandas xlsxwriter 2>&1 | tail -3 || echo "WARN: Some Python packages failed to install"

# --- BMAD Method ---
echo "=== Installing BMAD Method ==="
if command -v npx &> /dev/null; then
  npx bmad-method install --directory "${WORKSPACE_DIR}" --modules bmm --tools claude-code --yes 2>&1 | tail -20 || echo "WARN: BMAD install failed — run 'npx bmad-method install' manually"
else
  echo "WARN: npx not found — skipping BMAD install. Install Node.js first, then run 'npx bmad-method install'"
fi

# --- Claude Code plugins ---
echo "=== Installing Claude Code plugins ==="
if command -v claude &> /dev/null; then
  claude plugin install frontend-design@claude-plugins-official --scope project 2>/dev/null || echo "WARN: Plugin install failed — run '/plugin install frontend-design' inside Claude Code"
else
  echo "WARN: claude not on PATH — skipping plugin install"
fi

# --- Azure CLI (optional, install if needed) ---
if ! command -v az &> /dev/null; then
  echo "=== Installing Azure CLI ==="
  curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash 2>&1 | tail -3 || echo "WARN: Azure CLI install failed — install manually if needed"
fi

echo "=== Dev container ready! ==="
echo "Workspace: ${WORKSPACE_DIR}"
echo "Tools: pandoc, python-pptx, openpyxl, pandas, xlsxwriter, BMAD Method, Claude Code"
