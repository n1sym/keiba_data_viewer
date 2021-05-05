import Link from "next/link";
import { HStack } from "@chakra-ui/react";

type typeLayout = {
  children: React.ReactNode;
  home?: boolean;
};

export default function Layout({ children }: typeLayout) {
  return (
    <div>
      <HStack px={4} pt={4}>
      <Link href="/">
          <a>Home</a>
      </Link>
      <div>/</div>
      <Link href="/">
          <a>About</a>
      </Link>
      </HStack>
      
      <main>{children}</main>
    </div>
  );
}
