import { Meta, StoryObj } from '@storybook/react-vite/*';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Aceito os termos e condições',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Aceito os termos',
    description: 'Leia cuidadosamente os termos antes de aceitar',
  },
};

export const Checked: Story = {
  args: {
    label: 'Opção selecionada',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Opção desabilitada',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Opção desabilitada e selecionada',
    disabled: true,
    checked: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Aceito os termos',
    required: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox label='Small' size='small' />
      <Checkbox label='Medium' size='medium' />
      <Checkbox label='Large' size='large' />
    </div>
  ),
};

export const MultipleCheckboxes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox label='Opção 1' />
      <Checkbox label='Opção 2' checked />
      <Checkbox label='Opção 3' />
      <Checkbox label='Opção 4' disabled />
      <Checkbox label='Opção 5' disabled checked />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox label='Normal' />
      <Checkbox label='Selecionado' checked />
      <Checkbox label='Desabilitado' disabled />
      <Checkbox label='Desabilitado e selecionado' disabled checked />
      <Checkbox label='Obrigatório' required />
      <Checkbox
        label='Com descrição'
        description='Esta é uma descrição adicional'
      />
    </div>
  ),
};
