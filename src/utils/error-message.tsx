import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleXIcon } from "lucide-react";

export function ErrorMessage({
  message,
  title,
}: {
  message: string | React.ReactNode;
  title: string;
}) {
  return (
    <Alert
      variant="destructive"
      className="bg-red-600 text-white border-red-700 border"
    >
      <CircleXIcon style={{ width: 20, height: 20 }} />

      <AlertTitle className="font-bold text-base">{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
