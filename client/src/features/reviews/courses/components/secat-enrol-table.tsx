import { SecatInfo } from "@/features/reviews/courses/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Small } from "@/components/typography";

type SecatEnrolTableProps = {
  secatInfo: SecatInfo;
};

export const SecatEnrolTable = ({ secatInfo }: SecatEnrolTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Enrolled</TableHead>
          <TableHead className="text-center">Responses</TableHead>
          <TableHead className="text-center">Response Rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="text-center">
          <TableCell>
            <NumberTicker value={secatInfo.enrolled} />
          </TableCell>
          <TableCell>
            <NumberTicker value={secatInfo.responses} />
          </TableCell>
          <TableCell>
            <Small>
              <NumberTicker
                value={Number(secatInfo.rate.replace("%", ""))}
                rounded={2}
              />
              %
            </Small>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
