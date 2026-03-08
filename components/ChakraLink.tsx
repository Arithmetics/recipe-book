import NextLink from 'next/link';

interface ChakraLinkProps {
  title: string;
  href: string;
  children?: JSX.Element;
}

export default function ChakraLink({ href, title, children }: ChakraLinkProps): JSX.Element {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <a href={href} className="text-main hover:underline">
        {children ?? title}
      </a>
    </NextLink>
  );
}
