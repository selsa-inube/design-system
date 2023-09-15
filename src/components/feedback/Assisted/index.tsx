import { MdArrowBack, MdArrowForward, MdOutlineCircle } from "react-icons/md";

import { Stack } from "@layouts/Stack";
import { Text } from "@data/Text";
import { Icon } from "@data/Icon";

import { AssistedContainer, ProgressBar } from "./styles";
//import { Button } from "@src/components/inputs/Button";

/* import {
  StyledAssistedContainer,
  StyledCircleId,
  StyledButton,
} from "./styles"; */

type IStep = {
  id: string | number;
  label: string;
  description?: string;
};

export interface IAssistedProps {
  steps: IStep[];
  currentStepId: IStep["id"];
  onStepChange: (step: IStep["id"]) => void;
  isSequential?: boolean;
  completedStepIds: (string | number)[];
  smallScreen: boolean;
}

const Assisted = (props: IAssistedProps) => {
  /*   const {
    steps,
    currentStepId,
    onStepChange,
    isSequential = true,
    completedStepIds,
  } = props; */

  return (
    <AssistedContainer>
      <Stack alignItems="center">
        <Icon
          appearance="primary"
          icon={<MdArrowBack />}
          spacing="wide"
          size="20px"
        />
        <Icon appearance="primary" icon={<MdOutlineCircle />} size="20px" />
        <Text type="label">Andres</Text>

        <Icon
          appearance="primary"
          icon={<MdArrowForward />}
          spacing="wide"
          size="20px"
        />
      </Stack>
      <ProgressBar />
    </AssistedContainer>
  );
};

export { Assisted };
