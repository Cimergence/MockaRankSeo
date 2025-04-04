import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface Keyword {
  name: string;
  position: number;
  change: string;
  volume: number;
}

interface KeywordTableProps {
  keywords: Keyword[];
}

export default function KeywordTable({ keywords }: KeywordTableProps) {
  const formatVolume = (volume: number) => {
    return new Intl.NumberFormat().format(volume);
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader className="bg-gray-50 dark:bg-gray-700">
          <TableRow>
            <TableHead>Keyword</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {keywords.map((keyword, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{keyword.name}</TableCell>
              <TableCell>{keyword.position}</TableCell>
              <TableCell
                className={cn(
                  keyword.change.startsWith("+") ? "text-green-500" : "text-red-500"
                )}
              >
                {keyword.change}
              </TableCell>
              <TableCell>{formatVolume(keyword.volume)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
