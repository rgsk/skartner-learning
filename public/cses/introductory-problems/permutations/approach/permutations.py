# setup-start
import os
import sys
script_directory = os.path.dirname(os.path.realpath(__file__))
parent_directory = os.path.dirname(script_directory)
input_path = os.path.join(parent_directory, 'test_cases/1/input.txt')
output_path = os.path.join(parent_directory, 'test_cases/1/output.txt')
if os.path.exists(input_path):
    sys.stdin = open(input_path, 'r')
    try:
        sys.stdout = open(output_path, 'w')
    except Exception as e:
        pass
# setup-end


def main():
    n = int(input())

    if n == 1:
        print(1)
    elif n <= 3:
        print("NO SOLUTION")
    else:
        for i in range(2, n + 1, 2):
            print(i, end=" ")
        for i in range(1, n + 1, 2):
            print(i, end=" ")
        print()


main()
