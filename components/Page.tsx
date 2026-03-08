import Nav from './nav/Nav';

interface PageProps {
  children?: React.ReactNode;
}

export default function Page({ children }: PageProps): JSX.Element {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
