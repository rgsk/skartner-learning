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


setup()
# setup-end


def main():
    n = int(input())
    while n != 1:
        print(n, end=" ")
        if n % 2:
            n = n * 3 + 1
        else:
            n //= 2
    print(1)


main()
