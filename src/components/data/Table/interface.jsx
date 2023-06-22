import React, { useMemo } from "react";
import { DisplayEntry } from "./DisplayEntry";
import {
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTr,
  StyledThAction,
  StyledThTitle,
  StyledTd,
} from "./styles";

import { useMediaQueries } from "../../../hooks/useMediaQueries";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { Text } from "../Text";

function findCurrentMediaQuery(currentMediaQuery) {
  const lastIndexMedia = Object.values(currentMediaQuery).lastIndexOf(true);
  return lastIndexMedia !== -1 ? lastIndexMedia : 0;
}

function priorityColumns(titles, numColumns) {
  const maxPriorityToDisplay = numColumns - 1;
  return titles.filter((title) => title.priority <= maxPriorityToDisplay);
}

function totalTitleColumns(titles, breakpoints, media) {
  const numColumns = breakpoints[findCurrentMediaQuery(media)].totalColumns;

  if (numColumns >= titles.length) return titles;

  return priorityColumns(titles, numColumns);
}

function showActionTitle(actionTitle, mediaQuery) {
  return !mediaQuery ? (
    actionTitle.map((action) => (
      <StyledThAction key={`action-${action.id}`}>
        <Text typo="labelMedium" align="center">
          {action.actionName}
        </Text>
      </StyledThAction>
    ))
  ) : (
    <StyledThAction>
      <Text typo="labelMedium" align="center">
        Open
      </Text>
    </StyledThAction>
  );
}

function ShowAction(
  actionContent,
  entry,
  mediaQuery,
  modalTitle,
  titleLabels,
  infoTitle,
  actionsTitle
) {
  return !mediaQuery ? (
    <>
      {actionContent.map((action) => (
        <StyledTd key={`${entry.id}-${action.id}`}>
          {action.content(entry)}
        </StyledTd>
      ))}
    </>
  ) : (
    <StyledTd>
      <DisplayEntry
        entry={entry}
        title={modalTitle}
        actions={actionContent}
        titleLabels={titleLabels}
        infoTitle={infoTitle}
        actionsTitle={actionsTitle}
      />
    </StyledTd>
  );
}

const TableUI = (props) => {
  const {
    titles,
    actions,
    entries,
    breakpoints,
    modalTitle,
    infoTitle,
    actionsTitle,
  } = props;

  const mediaActionOpen = useMediaQuery("(max-width: 850px)");

  const queriesArray = useMemo(
    () => breakpoints.map((breakpoint) => breakpoint.breakpoint),
    [breakpoints]
  );

  const media = useMediaQueries(queriesArray);

  const TitleColumns = useMemo(
    () => totalTitleColumns(titles, breakpoints, media),
    [titles, breakpoints, media]
  );

  return (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          {TitleColumns.map((title) => (
            <StyledThTitle
              key={`title-${title.id}`}
              aria-label={title.titleName}
            >
              <Text typo="labelMedium">{title.titleName}</Text>
            </StyledThTitle>
          ))}
          {showActionTitle(actions, mediaActionOpen)}
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        {entries.map((entry) => (
          <StyledTr
            key={`entry-${entry.id}`}
            aria-labelledby={`entry-${entry.id}`}
          >
            {TitleColumns.map((title) => (
              <StyledTd key={`e-${entry[title.id]}`}>
                <Text typo="bodySmall">{entry[title.id]}</Text>
              </StyledTd>
            ))}
            {ShowAction(
              actions,
              entry,
              mediaActionOpen,
              modalTitle,
              titles,
              infoTitle,
              actionsTitle
            )}
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};

export { TableUI };
