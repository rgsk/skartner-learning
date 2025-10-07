# setup-start
import os
import sys
script_directory = os.path.dirname(os.path.realpath(__file__))
parent_directory = os.path.dirname(script_directory)
input_path = os.path.join(parent_directory, 'input.txt')
output_path = os.path.join(parent_directory, 'output.txt')
if os.path.exists(input_path):
    sys.stdin = open(input_path, 'r')
    try:
        sys.stdout = open(output_path, 'w')
    except Exception as e:
        pass
# setup-end


def main():
    n = int(input())
    elements = [int(v) for v in input().split()]
    ops = 0
    for i in range(1, n):
        if elements[i] < elements[i-1]:
            ops += elements[i-1] - elements[i]
            elements[i] = elements[i-1]

    print(ops)


main()
