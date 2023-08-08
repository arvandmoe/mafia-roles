import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseType } from '../types/ResponseType'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.shabe.ir/' }),
  endpoints: (build) => ({
    listRoles: build.query<ResponseType<RoleType>, number | void>({
      query: (page = 1) => `role?page=${page}`,
    }),
  }),
})

export const { useListRolesQuery } = api