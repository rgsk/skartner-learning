import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

const Pages = ({
  steps,
}: {
  steps: {
    component: ({ counter }: { counter: number }) => any;
    length: number;
  }[];
}) => {
  return (
    <div>
      <div className="space-y-8">
        {steps.map((step, i) => {
          const Component = step.component;
          return (
            <Fragment key={i}>
              <div className="p-6">
                <Component counter={step.length} />
              </div>
              <Separator />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Pages;
