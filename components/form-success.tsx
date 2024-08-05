import { CheckCircle2 } from "lucide-react";

const FormSuccess = ({ message }: { message?: string }) => {
  if (!message) return null;

  return (
    <div className="bg-teal-400/25 flex gap-2 text-xs text-teal-300  my-2 font-medium items-center p-3 rounded-md ">
      <CheckCircle2 className="w-4 h-4 " />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
