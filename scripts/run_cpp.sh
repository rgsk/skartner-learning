#!/usr/bin/env bash
set -euo pipefail

SRC="$1"            # path to .cpp file
COMPILER=${COMPILER:-g++-15}
OUT_BIN="/tmp/temp_cpp_run"

if [ -z "$SRC" ] ; then
  echo "Usage: run_cpp.sh path/to/file.cpp"
  exit 1
fi

# directory of the .cpp (where input.txt/output.txt are expected to be)
DIR=$(dirname "$SRC")

# compile
"$COMPILER" -std=gnu++17 -O2 "$SRC" -o "$OUT_BIN"

# run the binary from the source directory so relative files (input.txt) are found
(
  cd "$DIR"
  if [ -f input.txt ]; then
    # redirect so output goes to output.txt as your program expects (freopen will handle it)
    "$OUT_BIN"
    # print output.txt so users can see it in the console
    if [ -f output.txt ]; then
      cat output.txt
    fi
  else
    # no input.txt — just run program (it may block expecting stdin)
    "$OUT_BIN"
  fi
)

# cleanup
rm -f "$OUT_BIN"
