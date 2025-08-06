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

interface MaximumKSubstringVowelsProps {}
const MaximumKSubstringVowels: React.FC<
  MaximumKSubstringVowelsProps
> = ({}) => {
  return (
    <Container>
      <Heading>Maximum k-Substring Vowels</Heading>
      <PracticeLinks
        workattech="maximum-k-substring-vowels"
        leetcode="maximum-number-of-vowels-in-a-substring-of-given-length"
      />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a string s and a number k, find the maximum number of vowels
            in any substring of size k.
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
String: "workaattech"
k: 3
Here, the substrings of size k and their vowel counts are:
wor => 1
ork => 1
rka => 1
kaa => 2
aat => 2
att => 1
tte => 1
tec => 1
ech => 1
Answer: 2
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
Answer: 1
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
            pythonFile="/dsa/two_pointers/maximum_k_substring_vowels/optimal/maximum_k_substring_vowels.py"
            cppFile="/dsa/two_pointers/maximum_k_substring_vowels/optimal/maximum_k_substring_vowels.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default MaximumKSubstringVowels;
