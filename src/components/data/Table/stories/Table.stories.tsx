import { useState, useEffect } from "react";
import { Table, ITableProps } from "..";
import { MdClose } from "react-icons/md";
import { titlesMuck, actionsMuck, breakPointsMuck } from "./mucks";
import { StyledModal } from "./styles";
import { props, parameters } from "../props";
import { Blanket } from "@utils/Blanket";
import { Stack } from "@layouts/Stack";
import { Text } from "@data/Text";

const story = {
  title: "data/Table",
  component: [Table],
  parameters,
  argTypes: props,
};

const LoremModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) {
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <Blanket>
      <StyledModal>
        <Stack justifyContent="space-between">
          <Text as="h3" appearance={"primary"} type="title" size="large">
            Lorem ipsum
          </Text>
          <MdClose onClick={() => setIsVisible(false)} />
        </Stack>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum.
      </StyledModal>
    </Blanket>
  );
};

const Default = (args: ITableProps) => <Table {...args} />;
Default.args = {
  id: "tableId",
  titles: titlesMuck,
  actions: actionsMuck,
  entries: [
    {
      id: "11",
      username: "David Leonardo Garzón",
      code: "LGARZON",
      userID: "1256545",
      position: "Credit Analyst",
    },
    {
      id: "12",
      username: "Angie Pinilla",
      code: "APINILLA",
      userID: "789654",
      position: "Adviser",
    },
    {
      id: "13",
      username: "Cristian Rojas",
      code: "CROJAS",
      userID: "258963",
      position: "Credit Analyst",
    },
    {
      id: "14",
      username: "Johan Nova",
      code: "JNOVA",
      userID: "589647",
      position: "Adviser",
    },
  ],
  filter: "",
  pageLength: 10,
  breakpoints: breakPointsMuck,
  modalTitle: "Form",
  infoTitle: "Information",
  content: <LoremModal />,
};

export default story;
export { Default };
