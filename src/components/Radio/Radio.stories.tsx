import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Opção 1',
    name: 'options',
    value: '1',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Opção premium',
    description: 'Inclui recursos avançados e suporte prioritário',
    name: 'plan',
    value: 'premium',
  },
};

export const Checked: Story = {
  args: {
    label: 'Opção selecionada',
    name: 'options',
    value: '1',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Opção desabilitada',
    name: 'options',
    value: '1',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Opção desabilitada e selecionada',
    name: 'options',
    value: '1',
    disabled: true,
    checked: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Opção obrigatória',
    name: 'required',
    value: '1',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Opção com erro',
    name: 'error',
    value: '1',
    variant: 'error',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Opção com sucesso',
    name: 'success',
    value: '1',
    variant: 'success',
    checked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio label='Small' size='small' name='size' value='small' />
      <Radio label='Medium' size='medium' name='size' value='medium' />
      <Radio label='Large' size='large' name='size' value='large' />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio label='Default' name='variant' value='default' />
      <Radio label='Error' variant='error' name='variant' value='error' />
      <Radio label='Success' variant='success' name='variant' value='success' />
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio label='Opção 1' name='group' value='1' />
      <Radio label='Opção 2' name='group' value='2' checked />
      <Radio label='Opção 3' name='group' value='3' />
      <Radio label='Opção 4' name='group' value='4' disabled />
    </div>
  ),
};

export const PaymentMethods: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio
        label='Cartão de Crédito'
        name='payment'
        value='credit'
        description='Visa, Mastercard, American Express'
      />
      <Radio
        label='PIX'
        name='payment'
        value='pix'
        description='Pagamento instantâneo'
        checked
      />
      <Radio
        label='Boleto Bancário'
        name='payment'
        value='boleto'
        description='Vencimento em 3 dias úteis'
      />
      <Radio
        label='Transferência Bancária'
        name='payment'
        value='transfer'
        description='TED ou DOC'
        disabled
      />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio label='Normal' name='states' value='normal' />
      <Radio label='Selecionado' name='states' value='selected' checked />
      <Radio label='Desabilitado' name='states' value='disabled' disabled />
      <Radio
        label='Desabilitado e selecionado'
        name='states'
        value='disabled-selected'
        disabled
        checked
      />
      <Radio label='Com erro' name='states' value='error' variant='error' />
      <Radio
        label='Com sucesso'
        name='states'
        value='success'
        variant='success'
        checked
      />
      <Radio label='Obrigatório' name='states' value='required' required />
      <Radio
        label='Com descrição'
        name='states'
        value='description'
        description='Esta é uma descrição adicional'
      />
    </div>
  ),
};
