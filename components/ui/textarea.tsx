import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-md border border-[#ffffff0f] bg-[#0f0f1a] px-3 py-2 text-sm text-white outline-none transition placeholder:text-[#64748b] focus:border-[#6366f1]/70 focus:ring-2 focus:ring-[#6366f1]/20",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
