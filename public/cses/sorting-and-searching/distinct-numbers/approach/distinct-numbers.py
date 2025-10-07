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

    arr = [int(v) for v in input().split()]
    arr.sort()
    distinct = 1
    for i in range(1, n):
        if arr[i] != arr[i-1]:
            distinct += 1
    print(distinct)


main()
