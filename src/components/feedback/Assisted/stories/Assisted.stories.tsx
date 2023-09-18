import { Assisted, IAssistedProps } from "..";

const story = {
  title: "Feedback/Assisted",
  component: Assisted,
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

const Default = (args: IAssistedProps) => <Assisted {...args} />;

Default.args = {
  steps: stepsMock,
  titleButtonBefore: "Anterior",
  titleButtonAfter: "Próximo",
  currentStepId: 3,
};

export default story;

export { Default };
