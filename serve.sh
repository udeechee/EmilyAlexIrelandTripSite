#!/usr/bin/env bash
# Serve the static site locally for development.
# Usage: ./serve.sh [port]
#   Default port is 8000.

set -euo pipefail

PORT="${1:-8000}"
DIR="$(cd "$(dirname "$0")/static_site_src" && pwd)"

echo "Serving site from: $DIR"
echo "Open http://localhost:$PORT in your browser"
echo "Press Ctrl+C to stop."
echo ""

python3 -m http.server "$PORT" --directory "$DIR"
