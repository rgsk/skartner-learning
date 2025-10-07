# setup-start
def setup():
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
    setup()
    n = int(input())
    elements = [int(v) for v in input().split()]
    sum_upto_n = (n * (n + 1)) // 2
    res = sum_upto_n - sum(elements)
    print(res)


main()
