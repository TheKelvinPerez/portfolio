#!/bin/bash
# Trap Ctrl+C and exit gracefully
trap 'echo -e "\nExiting gracefully..."; exit 0' INT

# Initialize counter file
ITERATIONS_FILE=".ralph_iterations"
if [ ! -f "$ITERATIONS_FILE" ]; then
  echo "0" >"$ITERATIONS_FILE"
fi

# Create progress txt
if [ ! -f "progress.txt" ]; then
  touch progress.txt
fi

while :; do
  # Read and increment counter
  ITERATION=$(cat "$ITERATIONS_FILE")
  ITERATION=$((ITERATION + 1))
  echo "$ITERATION" >"$ITERATIONS_FILE"

  echo "=========================================="
  echo "Ralph Wiggum Loop - Iteration #$ITERATION"
  echo "=========================================="

  # Delete the done file at the start of each iteration
  rm -f .ralph_done

  # Run your command
  cat prompt.md | claude --dangerously-skip-permissions

  # Check if the file was created and break if it exists
  if [ -f .ralph_done ]; then
    echo "Done file detected, stopping the ralph wiggum loop..."
    echo "Total iterations: $ITERATION"
    break
  fi
done
