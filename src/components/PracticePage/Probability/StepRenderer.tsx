interface StepDefinition {
  component: React.ComponentType<{ counter: number }>;
  length: number;
}

interface StepRendererProps {
  counter: number;
  steps: StepDefinition[];
}

function StepRenderer({ counter, steps }: StepRendererProps) {
  let cumulative = 0;

  for (const step of steps) {
    const start = cumulative + 1;
    const end = cumulative + step.length;

    if (counter >= start && counter <= end) {
      const Component = step.component;
      return <Component counter={counter - cumulative} />;
    }

    cumulative = end;
  }

  return null;
}
export default StepRenderer;
