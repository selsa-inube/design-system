import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { Pagination } from "./Pagination";
import { TableUI } from "./interface";
import { useState } from "react";
import { Stack } from "../../layouts/Stack";

function Table(props) {
  const {
    titles,
    actions,
    entries,
    filter = "",
    pageLength = 10,
    breakPoints,
  } = props;

  const filteredEntries = useMemo(() => {
    const titlesId = titles.map((title) => title.id);

    console.log(entries);
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

  console.log(filteredEntries);
  debugger;

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
    <Stack direction="column">
      <TableUI
        titles={titles}
        actions={actions}
        entries={getPageEntries()}
        breakPoints={breakPoints}
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
  );
}

Table.propTypes = {
  titles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      titleName: PropTypes.string.isRequired,
      Prioridad: PropTypes.number.isRequired,
    })
  ).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      actionName: PropTypes.string.isRequired,
      content: PropTypes.node,
      type: PropTypes.string,
    })
  ).isRequired,
  entries: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
  filte: PropTypes.string,
  pageLength: PropTypes.number,
  breakPoints: PropTypes.arrayOf(
    PropTypes.shape({
      breakPoint: PropTypes.string.isRequired,
      totalColumns: PropTypes.number.isRequired,
    })
  ),
};
export { Table };
