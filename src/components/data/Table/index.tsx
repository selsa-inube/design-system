import { useMemo, useState } from "react";
import { Pagination } from "./Pagination";

import { Stack } from "@layouts/Stack";

import { TableUI } from "./interface";

export interface IActions {
  id: string;
  [key: string]: string;
}

export interface ITitle {
  id: string;
  titleName: string;
  priority: number;
}

export interface IAction {
  id: string;
  actionName: string;
  content: (entry: IActions) => JSX.Element;
}

export interface IBreakpoint {
  breakpoint: string;
  totalColumns: number;
}

export interface ITableUIProps {
  titles: ITitle[];
  actions: IAction[];
  entries: IActions[];
  breakpoints: IBreakpoint[];
  content?: React.ReactElement;
  infoTitle: string;
  actionsTitle: string;
}

export interface ITableProps {
  id: string;
  titles: ITitle[];
  actions: IAction[];
  entries: IActions[];
  filter?: string;
  pageLength?: number;
  breakpoints?: IBreakpoint[];
  content?: React.ReactElement;
  infoTitle?: string;
}

const Table = (props: ITableProps) => {
  const {
    id,
    titles,
    actions,
    entries,
    filter = "",
    pageLength = 10,
    breakpoints,
    content,
    infoTitle,
  } = props;

  const filteredEntries = useMemo(() => {
    const titlesId = titles.map((title) => title.id);

    return entries.filter((entry) => {
      for (const attribute in entry) {
        if (
          titlesId.includes(attribute) &&
          entry[attribute]
            .toString()
            .toLowerCase()
            .includes(filter.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
  }, [entries, filter, titles]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredEntries.length / pageLength);

  const firstEntryInPage = (currentPage - 1) * pageLength;

  const lastEntryInPage = Math.min(
    firstEntryInPage + pageLength,
    filteredEntries.length
  );

  function getPageEntries() {
    return filteredEntries.slice(firstEntryInPage, lastEntryInPage);
  }

  function goToFirstPage() {
    setCurrentPage(1);
  }

  function goToEndPage() {
    setCurrentPage(totalPages);
  }

  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div id={id}>
      <Stack direction="column">
        <TableUI
          titles={titles}
          actions={actions}
          entries={getPageEntries()}
          breakpoints={breakpoints!}
          content={content}
          infoTitle={infoTitle!}
        />
        {filteredEntries.length > pageLength && (
          <Pagination
            firstEntryInPage={firstEntryInPage}
            lastEntryInPage={lastEntryInPage}
            totalRecords={filteredEntries.length}
            handleStartPage={goToFirstPage}
            handlePrevPage={prevPage}
            handleNextPage={nextPage}
            handleEndPage={goToEndPage}
          />
        )}
      </Stack>
    </div>
  );
};

export { Table };
