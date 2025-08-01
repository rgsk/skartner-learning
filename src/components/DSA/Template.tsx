"use client";
import Heading from "@/components/Shared/Heading";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import { Container } from "lucide-react";

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
