import type { AnchorHTMLAttributes, ReactNode } from "react";

type Intent = "ember" | "copper" | "ghost";

/* Button styling lives in globals.css (.btn / .btn--*) so it stays
   in sync with the rest of the system. This component just maps an
   `intent` to a class and appends the animated arrow. */
export function Button({
                         intent = "ember",
                         children,
                         showArrow = true,
                         className = "",
                         ...props
                       }: {
  intent?: Intent;
  children: ReactNode;
  showArrow?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
      <a className={`btn btn--${intent} ${className}`.trim()} {...props}>
        {children}
        {showArrow && <span className="arr">→</span>}
      </a>
  );
}
