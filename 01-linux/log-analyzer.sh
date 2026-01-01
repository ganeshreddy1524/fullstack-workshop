#!/bin/bash
# -----------------------------------------
# Log Analysis Script
# Usage: ./log_analyzer.sh [log_file]
# If no argument is provided, a default log file is used
# -----------------------------------------

set -e          # Exit immediately on command failure
set -u          # Exit on use of undefined variables
set -o pipefail # Catch errors in piped commands

# Handle argument with default value
LOG_FILE="${1:-/e/revaturetraining/linux}"

# Validate input file
if [ ! -f "$LOG_FILE" ]; then
    echo "Error: Log file not found: $LOG_FILE"
    exit 1
fi

echo "=== Log Analysis Report ==="
echo "File: $LOG_FILE"
echo ""

# Total number of lines
echo "Lines count: $(wc -l < "$LOG_FILE")"

# Count errors (case-insensitive)
echo "Error count: $(grep -ci 'error' "$LOG_FILE")"

# Count warnings (case-insensitive)
echo "Warning count: $(grep -ci 'warning' "$LOG_FILE")"
echo ""

# Show recent errors
echo "=== Recent Errors (last 5) ==="
grep -i 'error' "$LOG_FILE" | tail -5 || echo "No errors found"
echo ""

# Extract unique IP addresses
echo "=== Unique IP Addresses ==="
grep -oE '\b([0-9]{1,3}\.){3}[0-9]{1,3}\b' "$LOG_FILE" \
    | sort -u || echo "No IP addresses found"
