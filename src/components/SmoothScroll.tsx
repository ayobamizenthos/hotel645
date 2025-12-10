import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

// Disabled Lenis for performance - using native scroll
const SmoothScroll = ({ children }: SmoothScrollProps) => {
  return <>{children}</>;
};

export default SmoothScroll;