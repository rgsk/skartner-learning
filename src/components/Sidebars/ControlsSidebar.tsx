"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import useLocalStorageState from "@/hooks/useLocalStorageState";

export function ControlsSidebar() {
  const [visualizationExpandedOnPageLoad, setVisualizationExpandedOnPageLoad] =
    useLocalStorageState("visualizationExpandedOnPageLoad", false);

  return (
    <div className="bg-sidebar p-4 w-72">
      <div>
        <div>
          <span className="text-sm">Settings</span>
          <div className="h-4"></div>
          <div>
            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox
                id="toggle-2"
                checked={visualizationExpandedOnPageLoad}
                onCheckedChange={(checked) =>
                  setVisualizationExpandedOnPageLoad(!!checked)
                }
                className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
              />
              <div className="grid gap-1.5 font-normal">
                <p className="text-sm leading-none font-medium">
                  Expanded Visualizations
                </p>
                <p className="text-muted-foreground text-sm">
                  Visualizations will be shown in expanded mode by default.
                </p>
              </div>
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
