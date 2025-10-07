import os
import sys

# Get directory where the script resides
script_directory = os.path.dirname(os.path.realpath(__file__))

# Go one directory up
parent_directory = os.path.dirname(script_directory)

# Build full paths to input/output files
input_path = os.path.join(parent_directory, 'input.txt')
output_path = os.path.join(parent_directory, 'output.txt')

# Redirect stdin/stdout if files exist
if os.path.exists(input_path):
    sys.stdin = open(input_path, 'r')

    try:
        sys.stdout = open(output_path, 'w')
    except Exception as e:
        # You might want to log this or print, but ignoring is fine
        pass

def main():
    n = int(input())
    while n != 1:
        print(n, end=" ")
        if n % 2:
            n = n * 3 + 1
        else:
            n //= 2
    print(1)

main()


