import { MdArrowRight } from "react-icons/md";

import { Stack } from "@layouts/Stack";
import { Text } from "@data/Text";
import { Icon } from "@data/Icon";

import { ProgressBar } from "./styles";

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
    <Stack>
      <Stack>
        {<Icon appearance="primary" icon={<MdArrowRight />} />}
        <Text type="label"></Text>
      </Stack>
      <ProgressBar />
    </Stack>
  );
};

export { Assisted };
