#!/bin/bash
set -e

echo "=== Installing Claude Code ==="
curl -fsSL https://claude.ai/install.sh | bash

echo "=== Installing system packages ==="
sudo apt-get update -qq
sudo apt-get install -y -qq pandoc python3-pip python3-venv > /dev/null 2>&1

echo "=== Installing Python document tools ==="
pip3 install --break-system-packages python-pptx openpyxl pandas xlsxwriter > /dev/null 2>&1

echo "=== Installing BMAD Method ==="
npx bmad-method install --directory /workspaces/workbench --modules bmm --tools claude-code --yes 2>&1 | tail -20

echo "=== Installing Claude Code plugins ==="
claude plugin install frontend-design@claude-plugins-official --scope project 2>/dev/null || true

echo "=== Dev container ready! ==="
echo "Tools installed: pandoc, python-pptx, openpyxl, pandas, xlsxwriter, BMAD Method, Claude Code"
