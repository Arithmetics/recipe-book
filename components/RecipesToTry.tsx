import { useRecipesToTryQuery } from '../generated/graphql-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function RecipesToTry(): JSX.Element {
  const { data, loading } = useRecipesToTryQuery({ fetchPolicy: 'network-only' });

  if (loading) {
    return (
      <div>
        <h2 className="ml-4 mt-4 text-3xl font-bold">Recipes To Try</h2>
        <div className="flex justify-center pt-[30vh]">
          <div className="size-10 animate-spin rounded-full border-2 border-border border-t-main" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="ml-4 mt-4 text-3xl font-bold">Recipes To Try</h2>
      {!data?.recipeToTries?.length && (
        <div className="flex justify-center pt-[30vh]">
          <p className="text-main">No items on list</p>
        </div>
      )}
      <div className="p-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.recipeToTries?.map((rtt) => (
              <TableRow key={rtt.name}>
                <TableCell>{rtt.name}</TableCell>
                <TableCell>
                  <a
                    href={rtt.originalLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-main underline hover:no-underline"
                  >
                    {rtt.originalLink}
                    <svg
                      className="ml-1 inline size-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
