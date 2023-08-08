import { Meta } from '@/shared/types/ResponseType';
import { persianNumber } from '@/shared/utils/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  meta: Meta | undefined;
}

export default function Pagination(props: Props) {
  const { currentPage, setCurrentPage, meta } = props;

  if (!meta) {
    return null;
  }

  const totalPages = meta.last_page;

  return (
    <div className='flex items-center justify-center border-t border-gray-200 bg-white px-4 pb-4 pt-8 sm:px-6'>
      <nav
        className=' inline-flex -space-x-px rounded-md shadow-sm justify-self-center'
        aria-label='Pagination'
      >
        <button
          className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          <span className='sr-only'>Previous</span>
          <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(index + 1);
            }}
            className={`relative inline-flex items-center ${
              index + 1 === currentPage
                ? 'bg-indigo-600 text-white'
                : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
            } px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0`}
          >
            {persianNumber(index + 1)}
          </button>
        ))}

        <button
          className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          <span className='sr-only'>Next</span>
          <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
        </button>
      </nav>
    </div>
  );
}
