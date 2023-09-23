import Link from "next/link";
import React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="py-10 text-3xl text-center">
      <Link href="/">HO</Link>
    </div>
  );
};

export default Header;
