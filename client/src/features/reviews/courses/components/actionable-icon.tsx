import { Button } from "@/components/ui/button";

type ActionableIconProps = {
  children: React.ReactNode;
  className?: string;
};

// TODO: add onclick event
export const ActionableIcon = ({
  children,
  className,
}: ActionableIconProps) => {
  return (
    <Button
      variant="secondary"
      className={`flex items-center gap-2 hover:text-secondary-foreground text-foreground cursor-pointer transition-colors duration-200 ease-in-out bg-transparent hover:bg-transparent active:scale-90 p-0 ${className}`}
    >
      {children}
    </Button>
  );
};
