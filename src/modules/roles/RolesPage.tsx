'use client';

import { DataTable } from '@/shared/components/data-table';
import { Pagination } from '@/shared/components/pagination';
import { useListRolesQuery } from '@/shared/services/roles';
import React from 'react';

const RolesPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { data: roles, isLoading, isFetching } = useListRolesQuery(currentPage);

  return (
    <main className='flex min-h-screen flex-col justify-between p-16 font-sans'>
      <DataTable rolesData={roles?.data} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        meta={roles?.meta}
      />
    </main>
  );
};

export default RolesPage;
