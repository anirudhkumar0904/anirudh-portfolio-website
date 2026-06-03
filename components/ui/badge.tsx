import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-[#ffffff0f] bg-[#0f0f1a] px-3 py-1 text-xs font-medium text-[#94a3b8]",
        className
      )}
      {...props}
    />
  );
}
