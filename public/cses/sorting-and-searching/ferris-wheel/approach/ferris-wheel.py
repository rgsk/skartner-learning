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
    n, x = map(int, input().split())
    p = list(map(int, input().split()))

    p.sort()
    l, r = 0, n - 1
    ans = 0

    while l <= r:
        if p[l] + p[r] <= x:
            ans += 1
            l += 1
            r -= 1
        else:
            r -= 1
            ans += 1

    print(ans)


main()
