"use client";

import React, { useState } from "react";

interface PaginationOptions<T> {
  data: T[];
  itemsPerPage: number;
}

interface PaginationResult<T> {
  pageCount: number;
  currentPageData: T[];
  currentPage: number;
  handlePageChange: (selectedPage: any) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const usePagination = <T,>({
  data,
  itemsPerPage,
}: PaginationOptions<T>): PaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  return {
    pageCount,
    currentPageData,
    currentPage,
    setCurrentPage,
    handlePageChange,
  };
};


