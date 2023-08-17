import { useMemo } from "react";
import { DisplayEntry } from "./DisplayEntry";

import { useMediaQueries } from "@hooks/useMediaQueries";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Text } from "@data/Text";
import { IEntry } from "./DisplayEntry";

import {
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTr,
  StyledThAction,
  StyledThTitle,
  StyledTd,
} from "./styles";

export interface ITitle {
  id: string;
  titleName: string;
  priority: number;
}

export interface IAction {
  id: string;
  actionName: string;
  content: (entry: any) => JSX.Element;
}

export interface IBreakpoint {
  breakpoint: string;
  totalColumns: number;
}

export interface ITableUIProps {
  titles: ITitle[];
  actions: IAction[];
  entries: IEntry[];
  breakpoints: IBreakpoint[];
  content?: React.ReactElement;
  infoTitle: string;
  actionsTitle: string;
}

function findCurrentMediaQuery(currentMediaQuery: Record<string, boolean>) {
  const lastIndexMedia = Object.values(currentMediaQuery).lastIndexOf(true);
  return lastIndexMedia !== -1 ? lastIndexMedia : 0;
}

function priorityColumns(titles: ITitle[], numColumns: number) {
  const maxPriorityToDisplay = numColumns - 1;
  return titles.filter((title) => title.priority <= maxPriorityToDisplay);
}

function totalTitleColumns(
  titles: ITitle[],
  breakpoints: IBreakpoint[],
  media: Record<string, boolean>
) {
  const numColumns = breakpoints[findCurrentMediaQuery(media)].totalColumns;

  if (numColumns >= titles.length) return titles;

  return priorityColumns(titles, numColumns);
}

function showActionTitle(actionTitle: IAction[], mediaQuery: boolean) {
  return !mediaQuery ? (
    actionTitle.map((action) => (
      <StyledThAction key={`action-${action.id}`}>
        <Text type="label" size="medium" textAlign="center" appearance="dark">
          {action.actionName}
        </Text>
      </StyledThAction>
    ))
  ) : (
    <StyledThAction>
      <Text type="label" size="medium" textAlign="center" appearance="dark">
        Open
      </Text>
    </StyledThAction>
  );
}

function ShowAction(
  actionContent: IAction[],
  entry: IEntry,
  mediaQuery: boolean,
  content: React.ReactElement
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
      <DisplayEntry content={content} />
    </StyledTd>
  );
}

const TableUI = (props: ITableUIProps) => {
  const { titles, actions, entries, breakpoints, content } = props;

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
              <Text type="label" size="medium" appearance="dark">
                {title.titleName}
              </Text>
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
                <Text type="body" size="small" appearance="dark">
                  {entry[title.id]}
                </Text>
              </StyledTd>
            ))}
            {ShowAction(actions, entry, mediaActionOpen, content!)}
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};

export { TableUI };
