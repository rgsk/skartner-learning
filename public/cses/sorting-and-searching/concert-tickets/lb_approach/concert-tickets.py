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
    tickets = sorted(map(int, input().split()))
    bids = list(map(int, input().split()))

    for bid in bids:
        # Find first element >= bid
        idx = bisect.bisect_left(tickets, bid)

        if idx < len(tickets) and tickets[idx] == bid:
            # Exact match
            print(tickets[idx])
            tickets.pop(idx)
        else:
            # Find smaller value if available
            if idx == 0:
                print(-1)
            else:
                print(tickets[idx - 1])
                tickets.pop(idx - 1)


main()
