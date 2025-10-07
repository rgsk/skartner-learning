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
    n, m, k = map(int, input().split())
    a = list(map(int, input().split()))
    b = list(map(int, input().split()))

    a.sort()
    b.sort()

    i = j = ans = 0

    while i < n and j < m:
        if abs(a[i] - b[j]) <= k:
            ans += 1
            i += 1
            j += 1
        elif a[i] > b[j]:
            j += 1
        else:
            i += 1

    print(ans)


main()
