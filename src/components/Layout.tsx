import Link from "next/link";
import { HStack, Heading, Box } from "@chakra-ui/react";

type typeLayout = {
  children: React.ReactNode;
  home?: boolean;
};

export default function Layout({ children }: typeLayout) {
  return (
    <div>
      <Box mb={12}>
      <HStack px={4} py={4} >
        <Heading size="md">
          <Link href="/">
            <a> Minerva v1.2.1</a>
          </Link>
        </Heading>
      </HStack>

      

      <main>{children}</main>
      </Box>
    </div>
  );
}
