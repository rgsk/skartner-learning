"use client";
import Container from "@/components/Shared/Container";
import Heading from "@/components/Shared/Heading";
import PracticeLinks from "@/components/Shared/PracticeLinks";

interface TemplateProps {}
const Template: React.FC<TemplateProps> = ({}) => {
  return (
    <Container>
      <Heading>Template</Heading>
      <PracticeLinks workattech="template" />
    </Container>
  );
};
export default Template;
