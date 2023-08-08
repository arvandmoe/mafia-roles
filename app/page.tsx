import { DataTable } from '@/shared/components/data-table';
import { Pagination } from '@/shared/components/pagination';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-between p-16 font-sans'>
        <DataTable />
        <Pagination />
    </main>
  );
}
