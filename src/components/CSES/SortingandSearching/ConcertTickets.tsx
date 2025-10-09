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
interface ConcertTicketsProps {}
const ConcertTickets: React.FC<ConcertTicketsProps> = ({}) => {
  return (
    <Container>
      <Heading>Concert Tickets</Heading>
      <PracticeLinks cses="1091" />
      <Problem>
        <TaskConstraints time="1.00 s" memory="512 MB" />
        <Section>
          <Paragraph
            text={String.raw`There are $n$ concert tickets available, each with a certain price. Then, $m$ customers arrive, one after another.`}
          />
          <Paragraph
            text={String.raw`Each customer announces the maximum price they are willing to pay for a ticket, and after this, they will get a ticket with the nearest possible price such that it does not exceed the maximum price.`}
          />
        </Section>
        <Section>
          <SubHeading>Input</SubHeading>
          <Paragraph
            text={String.raw`
            The first input line contains integers $n$ and $m:$ the number of tickets and the number of customers.
            `}
          />
          <Paragraph
            text={String.raw`
                The next line contains $n$ integers $h_1,h_2,\ldots,h_n:$ the price of each ticket.
                `}
          />
          <Paragraph
            text={String.raw`
                The last line contains $m$ integers $t_1,t_2,\ldots,t_m:$ the maximum price for each customer in the order they arrive.
                `}
          />
        </Section>
        <Section>
          <SubHeading>Output</SubHeading>
          <Paragraph
            text={String.raw`Print, for each customer, the price that they will pay for their ticket. After this, the ticket cannot be purchased again.`}
          />
          <Paragraph
            text={String.raw`If a customer cannot get any ticket, print -1.`}
          />
        </Section>
        <Section>
          <SubHeading>Constraints</SubHeading>
          <UnorderedList
            items={[
              String.raw`$1 \le n, m \le 2 \cdot 10^5$`,
              String.raw`$1 \le h_i, t_i \le 10^9$`,
            ]}
          />
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Input:
5 3
5 3 7 8 5
4 8 3

Output:
3
8
-1
`,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Upper Bound Approach</SubHeading>
          <Paragraph
            text={String.raw`
                It keeps the ticket prices sorted and, for each customer, 
                finds the most expensive ticket that does not exceed their maximum price (v). If such a ticket exists, 
                 it prints the ticket price and removes it from the list (since it’s sold); 
                 otherwise, it prints -1. This ensures each customer 
                 gets the best possible ticket efficiently.
                `}
          />

          <Paragraph
            text={String.raw`
                In this approach we use upper_bound / bisect_right for finding that ticket ie. <= max_price.
                `}
          />
        </Section>

        <Section>
          <SubHeading>Implementation</SubHeading>
          <p>✅ Accepted</p>
          <CodeFetcher
            cppFile="/cses/sorting-and-searching/concert-tickets/ub_approach/concert-tickets.cpp"
            pythonFile="/cses/sorting-and-searching/concert-tickets/ub_approach/concert-tickets.py"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Lower Bound Approach</SubHeading>
          <Paragraph
            text={String.raw`
                In this approach we use lower_bound / bisect_left for finding that ticket ie. <= max_price.
                `}
          />
        </Section>

        <Section>
          <SubHeading>Implementation</SubHeading>
          <p>✅ Accepted</p>
          <CodeFetcher
            cppFile="/cses/sorting-and-searching/concert-tickets/lb_approach/concert-tickets.cpp"
            pythonFile="/cses/sorting-and-searching/concert-tickets/lb_approach/concert-tickets.py"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default ConcertTickets;
