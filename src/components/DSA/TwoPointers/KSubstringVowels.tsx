"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Container from "@/components/Shared/Container";
import Examples from "@/components/Shared/Examples";
import Heading from "@/components/Shared/Heading";
import InlineCode from "@/components/Shared/InlineCode";
import MinorHeading from "@/components/Shared/MinorHeading";
import Paragraph from "@/components/Shared/Paragraph";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import Problem from "@/components/Shared/Problem";
import Section from "@/components/Shared/Section";
import Solution from "@/components/Shared/Solution";
import SubHeading from "@/components/Shared/SubHeading";
import UnorderedList from "@/components/Shared/UnorderedList";

interface KSubstringVowelsProps {}
const KSubstringVowels: React.FC<KSubstringVowelsProps> = ({}) => {
  return (
    <Container>
      <Heading>k-Substring Vowels</Heading>
      <PracticeLinks workattech="k-substring-vowels" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a string s and a number k, find the number of vowels in every
            substring of size k.
          </Paragraph>
          <Paragraph>
            Vowels: <InlineCode>['a', 'e', 'i', 'o', 'u']</InlineCode>
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
String: "workattech"
k: 3
Here, the substrings of size k and their vowel counts are:
wor => 1
ork => 1
rka => 1
kat => 1
att => 1
tte => 1
tec => 1
ech => 1
Answer: [1, 1, 1, 1, 1, 1, 1, 1]
            `,
              `\
String: "substring"
k: 2
Here, the substrings of size k and their vowel counts are:
su => 1
ub => 1
bs => 0
st => 0
tr => 0
ri => 1
in => 1
ng => 0
Answer: [1, 1, 0, 0, 0, 1, 1, 0]
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Sliding Window Approach</SubHeading>
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
            pythonFile="/dsa/two_pointers/k_substring_vowels/optimal/k_substring_vowels.py"
            cppFile="/dsa/two_pointers/k_substring_vowels/optimal/k_substring_vowels.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default KSubstringVowels;
