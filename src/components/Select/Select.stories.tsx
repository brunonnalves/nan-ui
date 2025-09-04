import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions = [
  { value: '1', label: 'Opção 1' },
  { value: '2', label: 'Opção 2' },
  { value: '3', label: 'Opção 3' },
];

const countryOptions = [
  { value: 'br', label: 'Brasil' },
  { value: 'us', label: 'Estados Unidos' },
  { value: 'ca', label: 'Canadá' },
  { value: 'mx', label: 'México' },
  { value: 'ar', label: 'Argentina' },
];

const statusOptions = [
  { value: 'active', label: 'Ativo' },
  { value: 'inactive', label: 'Inativo' },
  { value: 'pending', label: 'Pendente' },
  { value: 'disabled', label: 'Desabilitado', disabled: true },
];

export const Default: Story = {
  args: {
    label: 'Selecione uma opção',
    options: basicOptions,
    placeholder: 'Escolha uma opção',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'País',
    placeholder: 'Selecione um país',
    options: countryOptions,
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Status',
    placeholder: 'Selecione o status',
    options: statusOptions,
    helpText: 'Escolha o status atual do item',
  },
};

export const WithError: Story = {
  args: {
    label: 'País',
    placeholder: 'Selecione um país',
    options: countryOptions,
    error: 'País é obrigatório',
    touched: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Categoria',
    placeholder: 'Selecione uma categoria',
    options: basicOptions,
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    placeholder: 'Este campo está desabilitado',
    options: basicOptions,
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    label: 'País',
    placeholder: 'Selecione um país',
    options: countryOptions,
    value: 'br',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Select label='Small' size='small' options={basicOptions} />
      <Select label='Medium' size='medium' options={basicOptions} />
      <Select label='Large' size='large' options={basicOptions} />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Select label='Default' options={basicOptions} />
      <Select label='Success' variant='success' options={basicOptions} />
      <Select label='Error' variant='error' options={basicOptions} />
    </div>
  ),
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Status',
    placeholder: 'Selecione o status',
    options: statusOptions,
  },
};

export const CountrySelector: Story = {
  args: {
    label: 'País de origem',
    placeholder: 'Selecione seu país',
    options: countryOptions,
    required: true,
  },
};

export const PrioritySelector: Story = {
  args: {
    label: 'Prioridade',
    placeholder: 'Selecione a prioridade',
    options: [
      { value: 'low', label: 'Baixa' },
      { value: 'medium', label: 'Média' },
      { value: 'high', label: 'Alta' },
      { value: 'urgent', label: 'Urgente' },
    ],
    helpText: 'Defina a prioridade da tarefa',
  },
};

export const LanguageSelector: Story = {
  args: {
    label: 'Idioma',
    placeholder: 'Selecione o idioma',
    options: [
      { value: 'pt', label: 'Português' },
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Español' },
      { value: 'fr', label: 'Français' },
      { value: 'de', label: 'Deutsch' },
    ],
    value: 'pt',
  },
};

export const FormExample: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '300px',
      }}
    >
      <Select
        label='País'
        placeholder='Selecione um país'
        options={countryOptions}
        required
      />
      <Select
        label='Status'
        placeholder='Selecione o status'
        options={statusOptions}
        helpText='Escolha o status atual'
      />
      <Select
        label='Prioridade'
        placeholder='Selecione a prioridade'
        options={[
          { value: 'low', label: 'Baixa' },
          { value: 'medium', label: 'Média' },
          { value: 'high', label: 'Alta' },
        ]}
      />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Select label='Normal' options={basicOptions} />
      <Select label='Com valor' options={basicOptions} value='1' />
      <Select label='Desabilitado' options={basicOptions} disabled />
      <Select
        label='Erro'
        options={basicOptions}
        error='Campo obrigatório'
        touched
      />
      <Select
        label='Sucesso'
        options={basicOptions}
        variant='success'
        value='2'
      />
      <Select label='Obrigatório' options={basicOptions} required />
      <Select
        label='Com ajuda'
        options={basicOptions}
        helpText='Este é um texto de ajuda'
      />
      <Select
        label='Com opções desabilitadas'
        options={statusOptions}
        placeholder='Algumas opções estão desabilitadas'
      />
    </div>
  ),
};
