import type { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'dashed', 'dotted'],
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['thin', 'medium', 'thick'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    Story => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const WithText: Story = {
  args: {
    text: 'ou',
  },
  decorators: [
    Story => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '100%',
      }}
    >
      <div>
        <p>Conteúdo acima</p>
        <Divider variant='solid' />
        <p>Conteúdo abaixo</p>
      </div>
      <div>
        <p>Conteúdo acima</p>
        <Divider variant='dashed' />
        <p>Conteúdo abaixo</p>
      </div>
      <div>
        <p>Conteúdo acima</p>
        <Divider variant='dotted' />
        <p>Conteúdo abaixo</p>
      </div>
    </div>
  ),
};

export const Orientations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>Horizontal (padrão)</h4>
        <div style={{ width: '100%' }}>
          <p>Conteúdo acima</p>
          <Divider orientation='horizontal' />
          <p>Conteúdo abaixo</p>
        </div>
      </div>
      <div>
        <h4>Vertical</h4>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            height: '100px',
          }}
        >
          <p>Conteúdo à esquerda</p>
          <Divider orientation='vertical' />
          <p>Conteúdo à direita</p>
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '100%',
      }}
    >
      <div>
        <p>Conteúdo acima</p>
        <Divider size='thin' />
        <p>Conteúdo abaixo (thin)</p>
      </div>
      <div>
        <p>Conteúdo acima</p>
        <Divider size='medium' />
        <p>Conteúdo abaixo (medium)</p>
      </div>
      <div>
        <p>Conteúdo acima</p>
        <Divider size='thick' />
        <p>Conteúdo abaixo (thick)</p>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '100%',
      }}
    >
      <div>
        <p>Conteúdo acima</p>
        <Divider color='default' />
        <p>Conteúdo abaixo (default)</p>
      </div>
      <div>
        <p>Conteúdo acima</p>
        <Divider color='primary' />
        <p>Conteúdo abaixo (primary)</p>
      </div>
      <div>
        <p>Conteúdo acima</p>
        <Divider color='success' />
        <p>Conteúdo abaixo (success)</p>
      </div>
      <div>
        <p>Conteúdo acima</p>
        <Divider color='error' />
        <p>Conteúdo abaixo (error)</p>
      </div>
    </div>
  ),
};

export const TextDividers: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '100%',
      }}
    >
      <div>
        <p>Conteúdo acima</p>
        <Divider text='ou' />
        <p>Conteúdo abaixo</p>
      </div>
      <div>
        <p>Conteúdo acima</p>
        <Divider text='separador' variant='dashed' />
        <p>Conteúdo abaixo</p>
      </div>
      <div>
        <p>Conteúdo acima</p>
        <Divider text='divisor' variant='dotted' color='primary' />
        <p>Conteúdo abaixo</p>
      </div>
    </div>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <div
      style={{
        // width: '100%',
        padding: '2rem',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
      }}
    >
      <h3>Entrar</h3>
      <div style={{ width: '100%', margin: '1rem 0' }}>
        <input
          type='email'
          placeholder='Email'
          style={{
            width: 'calc(100% - 0.5rem - 4px)',
            padding: '0.5rem 0 0.5rem 0.5rem',
            marginBottom: '0.5rem',
          }}
        />
        <input
          type='password'
          placeholder='Senha'
          style={{
            width: 'calc(100% - 0.5rem - 4px)',
            padding: '0.5rem 0 0.5rem 0.5rem',
          }}
        />
      </div>
      <button
        style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem' }}
      >
        Entrar
      </button>
      <Divider text='ou' />
      <button style={{ width: '100%', padding: '0.75rem', marginTop: '1rem' }}>
        Entrar com Google
      </button>
    </div>
  ),
};

export const SectionDividers: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <section>
        <h3>Seção 1</h3>
        <p>Conteúdo da primeira seção do documento.</p>
      </section>
      <Divider variant='dashed' />
      <section>
        <h3>Seção 2</h3>
        <p>Conteúdo da segunda seção do documento.</p>
      </section>
      <Divider variant='dotted' />
      <section>
        <h3>Seção 3</h3>
        <p>Conteúdo da terceira seção do documento.</p>
      </section>
    </div>
  ),
};

export const VerticalLayout: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        height: '200px',
      }}
    >
      <div style={{ flex: 1, textAlign: 'center' }}>
        <h4>Coluna 1</h4>
        <p>Conteúdo da primeira coluna</p>
      </div>
      <Divider orientation='vertical' size='thick' color='primary' />
      <div style={{ flex: 1, textAlign: 'center' }}>
        <h4>Coluna 2</h4>
        <p>Conteúdo da segunda coluna</p>
      </div>
      <Divider orientation='vertical' variant='dashed' />
      <div style={{ flex: 1, textAlign: 'center' }}>
        <h4>Coluna 3</h4>
        <p>Conteúdo da terceira coluna</p>
      </div>
    </div>
  ),
};

export const AllCombinations: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '100%',
      }}
    >
      <div>
        <p>Solid + Medium + Default</p>
        <Divider variant='solid' size='medium' color='default' />
      </div>
      <div>
        <p>Dashed + Thick + Primary</p>
        <Divider variant='dashed' size='thick' color='primary' />
      </div>
      <div>
        <p>Dotted + Thin + Success</p>
        <Divider variant='dotted' size='thin' color='success' />
      </div>
      <div>
        <p>With Text + Dashed + Error</p>
        <Divider text='erro' variant='dashed' color='error' />
      </div>
    </div>
  ),
};
