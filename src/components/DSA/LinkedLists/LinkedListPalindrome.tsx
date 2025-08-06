"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Container from "@/components/Shared/Container";
import Examples from "@/components/Shared/Examples";
import Heading from "@/components/Shared/Heading";
import MinorHeading from "@/components/Shared/MinorHeading";
import Paragraph from "@/components/Shared/Paragraph";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import Problem from "@/components/Shared/Problem";
import Section from "@/components/Shared/Section";
import Solution from "@/components/Shared/Solution";
import SubHeading from "@/components/Shared/SubHeading";
import UnorderedList from "@/components/Shared/UnorderedList";
interface LinkedListPalindromeProps {}
const LinkedListPalindrome: React.FC<LinkedListPalindromeProps> = ({}) => {
  return (
    <Container>
      <Heading>Linked List Palindrome</Heading>
      <PracticeLinks workattech="linked-list-palindrome" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a non-negative number represented as a linked list, determine
            whether it is a palindrome or not.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
Number : 1234
Linked list : 1→2→3→4
Result : Not a palindrome
            `,
              `\
Number : 1221
Linked list : 1→2→2→1
Result : A palindrome
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            The idea is to compare the two halves of the linked list.
          </Paragraph>
          <UnorderedList
            items={[
              "Get the middle element of the linked list",
              "Reverse the second half of the linked list and compare it with the first half.",
              "If both the halves are equal then return true otherwise return false.",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(n)", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/linked_lists/linked_list_palindrome/approach/linked_list_palindrome.py"
            cppFile="/dsa/linked_lists/linked_list_palindrome/approach/linked_list_palindrome.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default LinkedListPalindrome;
