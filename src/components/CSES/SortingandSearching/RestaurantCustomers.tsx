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
import TaskConstraints from "../Common/TaskConstraints";
interface RestaurantCustomersProps {}
const RestaurantCustomers: React.FC<RestaurantCustomersProps> = ({}) => {
  return (
    <Container>
      <Heading>Restaurant Customers</Heading>
      <PracticeLinks cses="1619" />
      <Problem>
        <TaskConstraints time="1.00 s" memory="512 MB" />
        <Section>
          <Paragraph
            text={String.raw`You are given the arrival and leaving times of $n$ customers in a restaurant.`}
          />
          <Paragraph
            text={String.raw`What was the maximum number of customers in the restaurant at any time?`}
          />
        </Section>
        <Section>
          <SubHeading>Input</SubHeading>
          <Paragraph
            text={String.raw`
            The first input line has an integer $n:$ the number of customers.
            `}
          />
          <Paragraph
            text={String.raw`After this, there are $n$ lines that 
                describe the customers. Each line has two integers $a$ and $b:$ 
                the arrival and leaving times of a customer.`}
          />
          <Paragraph
            text={String.raw`You may assume that all arrival and leaving times are distinct.`}
          />
        </Section>
        <Section>
          <SubHeading>Output</SubHeading>
          <Paragraph
            text={String.raw`Print one integer: the maximum number of customers.`}
          />
        </Section>
        <Section>
          <SubHeading>Constraints</SubHeading>
          <UnorderedList
            items={[
              String.raw`$1 \le n \le 2 \cdot 10^5$`,
              String.raw`$1 \le a < b \le 10^9$`,
            ]}
          />
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Input:
3
5 8
2 4
3 9

Output:
2
`,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            This program uses a two-pointer technique. It sorts all arrival and
            leaving times, then iterates through them to track how many
            customers are currently in the restaurant. Each time someone
            arrives, it increments the count; each time someone leaves, it
            decrements it. The program keeps track of the maximum number of
            customers present at any moment and prints that value as the result.
          </Paragraph>
        </Section>

        <Section>
          <SubHeading>Implementation</SubHeading>
          <p>✅ Accepted</p>
          <CodeFetcher
            cppFile="/cses/sorting-and-searching/restaurant-customers/approach/restaurant-customers.cpp"
            pythonFile="/cses/sorting-and-searching/restaurant-customers/approach/restaurant-customers.py"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default RestaurantCustomers;
