import ContainedButton from '../button/ContainedButton';

interface Props {
  rolesData: RoleType[] | undefined;
}

export default function DataTable(props: Props) {
  const { rolesData } = props;
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-base font-semibold leading-6 text-gray-900'>
            نقش ها
          </h1>
          <p className='mt-2 text-sm text-gray-700'>
            توی این لیست نقش های مختلف بازی مافیا رو می بینید
          </p>
        </div>
      </div>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='align-start inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <table className='min-w-full divide-y divide-gray-300'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-0'
                  >
                    نام
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-right text-sm font-semibold text-gray-900'
                  >
                    ساید
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-right text-sm font-semibold text-gray-900'
                  >
                    وضعیت
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-right text-sm font-semibold text-gray-900'
                  >
                    قابلیت
                  </th>
                  <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-0'>
                    <ContainedButton text='مشاهده' type='button' />
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {rolesData &&
                  rolesData.map((role) => (
                    <tr key={role.id}>
                      <td className='whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>
                        <div className='flex items-center'>
                          <div className='h-11 w-11 flex-shrink-0 ml-2'>
                            <img
                              className='h-11 w-11 rounded-full'
                              src={`https://cdn.shabe.ir/${role.gallery.path}/${role.gallery.image}`}
                              alt=''
                            />
                          </div>
                          <div className='ml-4'>
                            <div className='font-medium text-gray-900'>
                              {role.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                        <div className='mt-1 text-gray-500'>{role.side}</div>
                      </td>
                      <td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                        <span className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
                          {role.status}
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                        {role.number}
                      </td>
                      <td className='relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0'>
                        <a
                          href='#'
                          className='text-indigo-600 hover:text-indigo-900'
                        >
                          مشاهده<span className='sr-only'>, {role.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
