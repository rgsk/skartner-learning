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
    s = input()
    n = len(s)

    max_same = 1
    cur_same = 1

    for i in range(1, n):
        if s[i] == s[i - 1]:
            cur_same += 1
        else:
            max_same = max(max_same, cur_same)
            cur_same = 1

    max_same = max(max_same, cur_same)
    print(max_same)


main()
