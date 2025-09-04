import type { Meta, StoryObj } from '@storybook/react-vite/*';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
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
    mask: {
      control: { type: 'select' },
      options: [
        '',
        'naturalNumber',
        'cpf',
        'cnpj',
        'phone',
        'cep',
        'currency',
        'datetime',
      ],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Senha',
    type: 'password',
    helpText: 'Mínimo de 8 caracteres',
    placeholder: 'Digite sua senha',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    error: 'Email inválido',
    touched: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Nome',
    placeholder: 'Digite seu nome',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    placeholder: 'Este campo está desabilitado',
    disabled: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Buscar',
    placeholder: 'Digite sua busca',
    leftIcon: <span>🔍</span>,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Senha',
    type: 'password',
    placeholder: 'Digite sua senha',
    rightIcon: <span>👁️</span>,
  },
};

export const Clearable: Story = {
  args: {
    label: 'Buscar',
    placeholder: 'Texto para limpar',
    clearable: true,
    value: '',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input label='Small' size='small' placeholder='Tamanho pequeno' />
      <Input label='Medium' size='medium' placeholder='Tamanho médio' />
      <Input label='Large' size='large' placeholder='Tamanho grande' />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input label='Default' placeholder='Variante padrão' />
      <Input label='Success' variant='success' placeholder='Variante sucesso' />
      <Input label='Error' variant='error' placeholder='Variante erro' />
    </div>
  ),
};

export const WithMasks: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input label='CPF' mask='cpf' placeholder='000.000.000-00' />
      <Input label='CNPJ' mask='cnpj' placeholder='00.000.000/0000-00' />
      <Input label='Telefone' mask='phone' placeholder='(00) 00000-0000' />
      <Input label='CEP' mask='cep' placeholder='00000-000' />
      <Input label='Moeda' mask='currency' placeholder='R$ 0,00' />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input label='Normal' placeholder='Estado normal' />
      <Input label='Com valor' value='Texto preenchido' />
      <Input label='Desabilitado' disabled placeholder='Campo desabilitado' />
      <Input label='Erro' error='Campo obrigatório' touched />
      <Input label='Sucesso' variant='success' value='Valor válido' />
      <Input label='Obrigatório' required placeholder='Campo obrigatório' />
    </div>
  ),
};
