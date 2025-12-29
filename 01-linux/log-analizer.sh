

#1/bin/bash
set -e          # Exit on error
set -u          # Exit on undefined variable
set -o pipefail # Catch errors in pipes
LOG_FILE=${1:-"/e/revaturetraining/linux"}

if [ ! -f "$LOG_FILE" ]; then
    echo "Error: Log file not found: $LOG_FILE"
    exit 1
fi

echo "=== Log Analysis Report ==="
echo "File: $LOG_FILE"
echo ""
echo "lines count:$(wc -l < "$LOG_FILE")"
echo "Error count: $(grep -c -i 'error' "$LOG_FILE")"

echo "Warning count: $(grep -c -i 'warning' "$LOG_FILE")"
echo ""

echo "=== Recent Errors ==="
grep -i 'error' "$LOG_FILE" | tail -5
echo " unique ip address"
echo IP_LIST=$(grep -oE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' "$LOG_FILE" | sort | uniq)
 