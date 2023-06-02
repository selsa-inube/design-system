import React from "react";
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";

import { StyledButton } from "./styles";

import { Text } from "../../Text/index";
import { Stack } from "../../../layouts/Stack";

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
    <Stack
      justifyContent="flex-end"
      alignItems="center"
      aria-label="Pagination"
    >
      <Text typo="bodySmall" padding="16px 0px">
        {firstEntryInPage + 1} - {lastEntryInPage} of {totalRecords}
      </Text>

      <Stack
        alignItems="center"
        padding="0px 25px 0px"
        margin="0px 0px 0px 16px"
        gap="8px"
      >
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
      </Stack>
    </Stack>
  );
}

export { Pagination };
