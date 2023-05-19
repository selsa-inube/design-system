import React from "react";
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";

import {
  StyledContentPagination,
  StyledContentText,
  StyledButton,
  StyledContentButtons,
} from "./styles";

import { Text } from "../../Text/index";

function Pagination(props) {
  const {
    firstEntryInPage,
    lastEntryInPage,
    totalRecords,
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
  } = props;

  return (
    <StyledContentPagination aria-label="Pagination">
      <StyledContentText>
        <Text typo="bodySmall">
          {firstEntryInPage + 1} - {lastEntryInPage} of {totalRecords}
        </Text>
      </StyledContentText>
      <StyledContentButtons>
        <StyledButton
          onClick={handleStartPage}
          aria-label="go to the first page"
        >
          <MdFirstPage />
        </StyledButton>
        <StyledButton onClick={handlePrevPage} aria-label="go to previous page">
          <MdNavigateBefore />
        </StyledButton>
        <StyledButton onClick={handleNextPage} aria-label="go to next page">
          <MdNavigateNext />
        </StyledButton>
        <StyledButton onClick={handleEndPage} aria-label="go to last page">
          <MdLastPage />
        </StyledButton>
      </StyledContentButtons>
    </StyledContentPagination>
  );
}

export { Pagination };
