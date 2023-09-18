import { Assisted, IAssistedProps } from "..";
import { parameters, props } from "../props";
import { AssistedController } from "./Assisted.Controller";

const story = {
  title: "Feedback/Assisted",
  component: Assisted,
  parameters,
  argTypes: props,
};

const stepsMock = [
  {
    id: 1,
    label: "Información general",
  },

  {
    id: 2,
    label: "Ramas",
  },

  {
    id: 3,
    label: "Proyectos",
  },

  {
    id: 4,
    label: "Unidades de ayuda",
  },

  {
    id: 5,
    label: "Nómina",
  },

  {
    id: 6,
    label: "Verificación",
  },
];

const Default = (args: IAssistedProps) => <AssistedController {...args} />;

Default.args = {
  steps: stepsMock,
  titleButtonBefore: "Anterior",
  titleButtonAfter: "Próximo",
  currentStepId: 2,
};

export default story;

export { Default };
