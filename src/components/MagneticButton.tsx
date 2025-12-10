import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";

interface MagneticButtonProps extends ButtonProps {
  children: React.ReactNode;
  magneticStrength?: number;
}

const MagneticButton = ({ 
  children, 
  magneticStrength = 0.3,
  className,
  ...props 
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const x = (clientX - centerX) * magneticStrength;
    const y = (clientY - centerY) * magneticStrength;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <motion.div
        animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
        transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.1 }}
      >
        <Button className={className} {...props}>
          {children}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default MagneticButton;
