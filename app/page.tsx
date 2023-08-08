import { DataTable } from '@/shared/components/data-table';
import { Container } from '@/shared/components/layout/Container';
import { Pagination } from '@/shared/components/pagination';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Container className='flex flex-col content-between'>
        <DataTable />
        <Pagination />
      </Container>
    </main>
  );
}
