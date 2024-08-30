import { AppProvider } from "@/app/provider";
import { ModeToggle } from "@/components/mode-toggle";

import { Button } from "@/components/ui/button";

export const App = () => {
  return (
    <>
      <AppProvider>
        <ModeToggle />
        <Button>Testing</Button>
      </AppProvider>
    </>
  );
};
