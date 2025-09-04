import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
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
    label: 'Notificações',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Notificações por email',
    description: 'Receba atualizações sobre novos produtos e ofertas',
  },
};

export const Checked: Story = {
  args: {
    label: 'Switch ativado',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Switch desabilitado',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Switch desabilitado e ativado',
    disabled: true,
    checked: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Aceito receber notificações',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Switch com erro',
    variant: 'error',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Switch com sucesso',
    variant: 'success',
    checked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label='Small' size='small' />
      <Switch label='Medium' size='medium' />
      <Switch label='Large' size='large' />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label='Default' />
      <Switch label='Error' variant='error' />
      <Switch label='Success' variant='success' />
    </div>
  ),
};

export const SettingsPanel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch
        label='Notificações push'
        description='Receba notificações no seu dispositivo'
        checked
      />
      <Switch
        label='Notificações por email'
        description='Receba atualizações por email'
      />
      <Switch
        label='Modo escuro'
        description='Use o tema escuro da aplicação'
      />
      <Switch
        label='Sincronização automática'
        description='Sincronize dados automaticamente'
        checked
      />
      <Switch
        label='Modo offline'
        description='Trabalhe sem conexão com a internet'
        disabled
      />
    </div>
  ),
};

export const PrivacySettings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch
        label='Compartilhar dados de uso'
        description='Ajude-nos a melhorar o produto compartilhando dados anônimos'
        variant='error'
      />
      <Switch
        label='Permitir cookies'
        description='Permita o uso de cookies para personalizar sua experiência'
        checked
      />
      <Switch
        label='Marketing por email'
        description='Receba ofertas e novidades por email'
      />
      <Switch
        label='Análise de comportamento'
        description='Permita análise de como você usa a aplicação'
        variant='success'
        checked
      />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label='Normal' />
      <Switch label='Ativado' checked />
      <Switch label='Desabilitado' disabled />
      <Switch label='Desabilitado e ativado' disabled checked />
      <Switch label='Com erro' variant='error' />
      <Switch label='Com sucesso' variant='success' checked />
      <Switch label='Obrigatório' required />
      <Switch
        label='Com descrição'
        description='Esta é uma descrição adicional'
      />
    </div>
  ),
};
