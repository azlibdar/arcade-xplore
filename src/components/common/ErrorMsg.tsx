import { Alert02Icon } from "hugeicons-react";

interface Props {
  errorMsg: string;
  className?: string;
  IconSize?: number;
}

const ErrorMsg = ({ errorMsg, className, IconSize = 24 }: Props) => {
  return (
    <div className={`w-full flex flex-col rounded-lg items-center justify-center text-center leading-normal ${className}`}>
      <Alert02Icon size={IconSize} className="text-red-400" />
      <p className="max-w-md">{errorMsg}</p>
    </div>
  );
};

export default ErrorMsg;
