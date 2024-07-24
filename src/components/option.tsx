import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { MoveLeft } from "lucide-react";
type TOptionProps = {
  className: string;
};
const Option = ({ className }: TOptionProps) => {
  return (
    <Link
      href="/"
      className={cn(
        `text-first container mx-auto flex items-center gap-2 text-sm`,
        className,
      )}
    >
      <MoveLeft /> Kembali
    </Link>
  );
};

export default Option;
