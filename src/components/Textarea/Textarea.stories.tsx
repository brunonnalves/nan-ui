import type { Meta, StoryObj } from '@storybook/react-vite/*';
import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
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
    rows: {
      control: { type: 'number', min: 1, max: 20 },
    },
    maxLength: {
      control: { type: 'number', min: 1, max: 1000 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Mensagem',
    placeholder: 'Digite sua mensagem aqui...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Comentário',
    placeholder: 'Deixe seu comentário...',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Descrição',
    placeholder: 'Descreva o produto...',
    helpText: 'Seja específico e detalhado na sua descrição',
  },
};

export const WithError: Story = {
  args: {
    label: 'Mensagem',
    placeholder: 'Digite sua mensagem...',
    error: 'Mensagem é obrigatória',
    touched: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Mensagem obrigatória',
    placeholder: 'Digite sua mensagem...',
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

export const WithValue: Story = {
  args: {
    label: 'Mensagem',
    value:
      'Esta é uma mensagem pré-preenchida que demonstra como o componente se comporta com conteúdo.',
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'Mensagem',
    placeholder: 'Digite sua mensagem...',
    maxLength: 200,
    showCount: true,
  },
};

export const WithCharacterCountAndValue: Story = {
  args: {
    label: 'Mensagem',
    value:
      'Esta é uma mensagem de exemplo que demonstra o contador de caracteres funcionando.',
    maxLength: 100,
    showCount: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Textarea label='Small' size='small' placeholder='Tamanho pequeno' />
      <Textarea label='Medium' size='medium' placeholder='Tamanho médio' />
      <Textarea label='Large' size='large' placeholder='Tamanho grande' />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Textarea label='Default' placeholder='Variante padrão' />
      <Textarea
        label='Success'
        variant='success'
        placeholder='Variante sucesso'
      />
      <Textarea label='Error' variant='error' placeholder='Variante erro' />
    </div>
  ),
};

export const DifferentRows: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Textarea label='2 linhas' rows={2} placeholder='Poucas linhas' />
      <Textarea label='4 linhas' rows={4} placeholder='Médias linhas' />
      <Textarea label='6 linhas' rows={6} placeholder='Muitas linhas' />
    </div>
  ),
};

export const CharacterLimits: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Textarea
        label='Limite baixo (50)'
        maxLength={50}
        showCount
        placeholder='Máximo 50 caracteres'
      />
      <Textarea
        label='Limite médio (200)'
        maxLength={200}
        showCount
        placeholder='Máximo 200 caracteres'
      />
      <Textarea
        label='Limite alto (500)'
        maxLength={500}
        showCount
        placeholder='Máximo 500 caracteres'
      />
    </div>
  ),
};

export const ContactForm: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Textarea
        label='Mensagem'
        placeholder='Como podemos ajudá-lo?'
        maxLength={500}
        showCount
        required
        rows={4}
      />
      <Textarea
        label='Observações adicionais'
        placeholder='Alguma informação extra?'
        maxLength={200}
        showCount
        rows={2}
      />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Textarea label='Normal' placeholder='Estado normal' />
      <Textarea label='Com valor' value='Texto preenchido' />
      <Textarea
        label='Desabilitado'
        disabled
        placeholder='Campo desabilitado'
      />
      <Textarea label='Erro' error='Campo obrigatório' touched />
      <Textarea label='Sucesso' variant='success' value='Valor válido' />
      <Textarea label='Obrigatório' required placeholder='Campo obrigatório' />
      <Textarea
        label='Com contador'
        maxLength={100}
        showCount
        placeholder='Com contador de caracteres'
      />
      <Textarea
        label='Com ajuda'
        helpText='Este é um texto de ajuda'
        placeholder='Com texto de ajuda'
      />
    </div>
  ),
};
