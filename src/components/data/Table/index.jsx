import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { Pagination } from "./Pagination";
import { TableUI } from "./interface";
import { useState } from "react";
import { Stack } from "../../layouts/Stack";

const Table = (props) => {
  const {
    id,
    titles,
    actions,
    entries,
    filter = "",
    pageLength = 10,
    breakpoints,
    modalTitle,
    infoTitle,
    actionsTitle,
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
          portalId={id}
          titles={titles}
          actions={actions}
          entries={getPageEntries()}
          breakpoints={breakpoints}
          modalTitle={modalTitle}
          infoTitle={infoTitle}
          actionsTitle={actionsTitle}
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

Table.propTypes = {
  id: PropTypes.string.isRequired,
  titles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      titleName: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
    })
  ).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      actionName: PropTypes.string.isRequired,
      content: PropTypes.func,
      type: PropTypes.string,
    })
  ).isRequired,
  entries: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
  filter: PropTypes.string,
  pageLength: PropTypes.number,
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      breakpoint: PropTypes.string.isRequired,
      totalColumns: PropTypes.number.isRequired,
    })
  ),
  modalTitle: PropTypes.string,
  infoTitle: PropTypes.string,
  actionsTitle: PropTypes.string,
};

export { Table };
