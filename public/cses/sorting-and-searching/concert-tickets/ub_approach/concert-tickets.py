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
    import bisect

    # Read inputs
    n, m = map(int, input().split())
    h = sorted(map(int, input().split()))
    t = list(map(int, input().split()))

    for v in t:
        # Find the index of the first element greater than v
        idx = bisect.bisect_right(h, v)
        if idx == 0:
            print(-1)
        else:
            # Take the largest element <= v
            chosen = h[idx - 1]
            print(chosen)
            # Remove it from the list
            h.pop(idx - 1)


main()
