import { ThemeProvider } from "styled-components";
import { presente } from "@shared/themes/presente";
import { parameters, props } from "../props";
import { AssistedController } from "./Assisted.Controller";
import { Assisted, IAssistedProps } from "..";

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
  currentStepId: 3,
  size: "large",
};

const theme = structuredClone(presente);

const Themed = (args: IAssistedProps) => (
  <ThemeProvider theme={theme}>
    <AssistedController {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;

export { Default, Themed };
