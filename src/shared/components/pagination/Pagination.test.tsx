import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

import '@testing-library/jest-dom/extend-expect';

describe('Pagination Component', () => {
  const mockSetCurrentPage = jest.fn();

  const mockMeta = {
    current_page: 2,
    from: 11,
    last_page: 5,
    links: [],
    path: '/',
    per_page: 10,
    to: 20,
    total: 50,
  };

  it('renders the Pagination component correctly', () => {
    const { getByText, getAllByRole } = render(
      <Pagination
        currentPage={mockMeta.current_page}
        setCurrentPage={mockSetCurrentPage}
        meta={mockMeta}
      />,
    );

    // Check if the previous button is rendered
    const previousButton = getByText('Previous');
    expect(previousButton).toBeInTheDocument();

    // Check if the next button is rendered
    const nextButton = getByText('Next');
    expect(nextButton).toBeInTheDocument();

    // Check if the page buttons are rendered correctly
    const pageButtons = getAllByRole('button');
    expect(pageButtons).toHaveLength(mockMeta.last_page + 2); // Add 2 for Previous and Next buttons

    // Test clicking on a page button
    fireEvent.click(pageButtons[2]); // Click on the second page button
    expect(mockSetCurrentPage).toHaveBeenCalledWith(2); // Assuming you clicked on page 2
  });

  // Add more test cases as needed
});
