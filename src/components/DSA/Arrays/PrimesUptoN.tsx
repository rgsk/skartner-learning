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
import YoutubeVideo from "@/components/Shared/YoutubeVideo";

interface PrimesUptoNProps {}
const PrimesUptoN: React.FC<PrimesUptoNProps> = ({}) => {
  return (
    <Container>
      <Heading>Primes upto N</Heading>
      <PracticeLinks workattech="primes-upto-n" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a number, let’s say 10. Can you tell all the divisors of the
            number?
          </Paragraph>
          <Paragraph>
            For 10, there are 4 divisors (1, 2, 5 & 10). <br />
            Let’s take 5, it has 2 divisors (1 & 5).
          </Paragraph>
          <Paragraph>
            A Prime number is a number that has exactly two divisors → 1 and
            itself.
            <br />
            Note: 1 is not a prime number.
          </Paragraph>
          <Paragraph>
            Below are some examples of prime numbers, which have divisors as 1
            and itself:
          </Paragraph>
          <Paragraph>
            2 → 1, 2 <br />
            3 → 1, 3 <br />
            5 → 1, 5 <br />
            7 → 1, 7 <br />
          </Paragraph>
          <Paragraph>
            Given a number, find all the prime numbers from 1 to that number.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
            primesUptoN(20) → 2, 3, 5, 7, 11, 13, 17, 19
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            We can iterate over all the numbers from 1 to N, and check if the
            current number is prime, store it in the result.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n * root(n)), root(n) is required to check if a number is prime.",
              "Auxiliary Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/primes_upto_n/naive/primes_upto_n.py"
            cppFile="/dsa/arrays/primes_upto_n/naive/primes_upto_n.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            We can precompute all the primes from 1 to N in N * log(logN) time
            complexity using the Sieve of Eratosthenes.
          </Paragraph>
          <Paragraph>
            In this algorithm, we initially consider all the numbers from 1 to N
            to be primes, then we iterate over all the numbers from 2 to
            sqrt(N), and if we find a prime number, then we mark all its
            multiples as non-prime.
          </Paragraph>
          <Paragraph>
            At the end of the algorithm, only the prime numbers remain unmarked
            and so we can decide if a number is prime, and add it to result.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(N * log(logN))",
              "Auxiliary Space Complexity: O(n)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/primes_upto_n/optimal/primes_upto_n.py"
            cppFile="/dsa/arrays/primes_upto_n/optimal/primes_upto_n.cpp"
          />
        </Section>
      </Solution>
      <Section>
        <SubHeading>Video Explaination</SubHeading>
        <YoutubeVideo id="BHMSRPuwEGo" />
      </Section>
    </Container>
  );
};
export default PrimesUptoN;
