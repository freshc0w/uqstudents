import { H2 } from "@/components/typography";
import BoxReveal from "@/components/ui/box-reveal";

type SecatTableProps = {
  code: string;
};

export const SecatTable = ({ code }: SecatTableProps) => {
  return (
    <>
      <BoxReveal duration={0.5} boxColor="primary">
        <H2>SECAT Evaluations</H2>
        
      </BoxReveal>
    </>
  );
};