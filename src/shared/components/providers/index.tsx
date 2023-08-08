'use client';

import { api } from '@/shared/services/roles';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  const { children } = props;
  return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default Providers;
