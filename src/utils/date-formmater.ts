import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface DateFormatterProps {
  date: Date;
  dateFormat?: string;
}

export function dateFormatter({
  date,
  dateFormat = "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
}: DateFormatterProps) {
  const formattedDate = format(date, dateFormat, {
    locale: ptBR,
  });

  return {
    formattedDate,
  };
}
