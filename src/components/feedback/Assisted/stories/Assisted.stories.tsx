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
    description: "Información general",
  },

  {
    id: 2,
    label: "Ramas",
    description: "Ramas",
  },

  {
    id: 3,
    label: "Proyectos",
    description: "Proyectos",
  },

  {
    id: 4,
    label: "Unidades de ayuda",
    description: "Unidades de ayuda",
  },

  {
    id: 5,
    label: "Nómina",
    description: "Nómina",
  },

  {
    id: 6,
    label: "Verificación",
    description: "Verificación",
  },
];

const Default = (args: IAssistedProps) => <AssistedController {...args} />;

Default.args = {
  steps: stepsMock,
  currentStepId: 3,
  titleButtonText: {
    before: "Anterior",
    after: "Siguiente",
    finish: "Enviar",
  },
};

const theme = {
  ...presente,
};

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
