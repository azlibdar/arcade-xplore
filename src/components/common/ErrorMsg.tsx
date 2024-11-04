import { AlertIcon } from "@primer/octicons-react";

interface Props {
  errorMsg: string;
  size?: "default" | "sm";
}

const ErrorMsg = ({ errorMsg, size = "default" }: Props) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-md flex items-center gap-3 px-4 py-6 flex-col justify-center">
        <AlertIcon size={24} className="text-red-400" />
        <p className={`text-sm font-mono ${size === "default" ? "sm:text-base" : ""} text-zinc-400 text-center leading-normal`}>
          {errorMsg}
        </p>
      </div>
    </div>
  );
};

export default ErrorMsg;
