import Link from "next/link";
import { HStack, Heading } from "@chakra-ui/react";

type typeLayout = {
  children: React.ReactNode;
  home?: boolean;
};

export default function Layout({ children }: typeLayout) {
  return (
    <div>
      <HStack px={4} py={4} bg="gray.50">
        <Heading size="md">
          <Link href="/">
            <a>keiba data okiba 🐎</a>
          </Link>
        </Heading>
      </HStack>
      

      <main>{children}</main>
    </div>
  );
}
