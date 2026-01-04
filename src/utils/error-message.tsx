import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleX } from "lucide-react";

export function ErrorMessage({
  message,
  title,
}: {
  message: string;
  title: string;
}) {
  return (
    <Alert
      variant="destructive"
      className="bg-red-600 text-white border-red-700 border"
    >
      <CircleX />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
