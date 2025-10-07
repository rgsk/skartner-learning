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
    arrival = []
    leaving = []

    for _ in range(n):
        a, l = map(int, input().split())
        arrival.append(a)
        leaving.append(l)

    arrival.sort()
    leaving.sort()

    i = j = 0
    occupied = 0
    max_occupied = 0

    while i < n:
        if arrival[i] < leaving[j]:
            occupied += 1
            max_occupied = max(max_occupied, occupied)
            i += 1
        else:
            occupied -= 1
            j += 1

    print(max_occupied)


main()
