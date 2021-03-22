import NextLink from "next/link";
import { useRouter } from "next/router";
import { HStack, Link, BoxProps, Button } from "@chakra-ui/react";

const links = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Who I am",
    href: "/whoiam",
  },
];

export const Navigation = ({ ...restProps }: BoxProps) => {
  const { pathname } = useRouter();

  return (
    <HStack spacing={4} {...restProps}>
      {links.map((link) => (
        <NextLink key={link.href} href={link.href} passHref={true}>
          <Link
            px={2}
            py={2}
            rounded={"md"}
            color={"white"}
            _hover={{ textDecoration: "none", bg: "gray.900" }}
            css={{ transition: "all 0.3s ease-in-out" }}
            bg={pathname === link.href ? "gray.900" : "inherit"}
          >
            {link.label}
          </Link>
        </NextLink>
      ))}
      <NextLink key="/started" href="/started" passHref={true}>
        <Button
          as={Link}
          border="1px"
          px={2}
          py={2}
          color="brandGreen.500"
          variant="outline"
          _hover={{
            textDecoration: "none",
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
          }}
          css={{ transition: "all 0.3s ease-in-out" }}
          bg={pathname === "/started" ? "gray.900" : "inherit"}
          textTransform="uppercase"
          fontWeight="bold"
        >
          Get Started
        </Button>
      </NextLink>
    </HStack>
  );
};
