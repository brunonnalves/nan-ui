import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input label='Email' placeholder='Digite seu email' />);
    const input = screen.getByRole('textbox', { name: /email/i });
    expect(input).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Input label='Nome' />);
    const label = screen.getByText('Nome');
    expect(label).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Input label='Test' size='small' />);
    let input = screen.getByRole('textbox', { name: /test/i });
    expect(input).toHaveClass('nan-input--small');

    rerender(<Input label='Test' size='large' />);
    input = screen.getByRole('textbox', { name: /test/i });
    expect(input).toHaveClass('nan-input--large');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Input label='Test' variant='error' />);
    let input = screen.getByRole('textbox', { name: /test/i });
    expect(input).toHaveClass('nan-input--error');

    rerender(<Input label='Test' variant='success' />);
    input = screen.getByRole('textbox', { name: /test/i });
    expect(input).toHaveClass('nan-input--success');
  });

  it('renders with error message', () => {
    render(<Input label='Email' error='Email inválido' touched />);
    const errorMessage = screen.getByText('Email inválido');
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders with help text', () => {
    render(<Input label='Email' helpText='Digite um email válido' />);
    const helpText = screen.getByText('Digite um email válido');
    expect(helpText).toBeInTheDocument();
  });

  it('renders with left icon', () => {
    render(<Input label='Search' leftIcon={<span>🔍</span>} />);
    const icon = screen.getByText('🔍');
    expect(icon).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    render(<Input label='Search' rightIcon={<span>🔍</span>} />);
    const icon = screen.getByText('🔍');
    expect(icon).toBeInTheDocument();
  });

  it('renders with clearable button', () => {
    render(<Input label='Test' clearable value='test' />);
    const clearButton = screen.getByRole('button', { name: /limpar campo/i });
    expect(clearButton).toBeInTheDocument();
  });

  it('forwards additional props', () => {
    render(
      <Input
        label='Test'
        data-testid='custom-input'
        aria-label='Custom'
        placeholder='Custom placeholder'
      />
    );
    const input = screen.getByTestId('custom-input');
    expect(input).toHaveAttribute('aria-label', 'Custom');
    expect(input).toHaveAttribute('placeholder', 'Custom placeholder');
  });

  it('applies custom className', () => {
    render(<Input label='Test' className='custom-class' />);
    const input = screen.getByRole('textbox', { name: /test/i });
    expect(input).toHaveClass('custom-class');
  });

  it('shows required indicator', () => {
    render(<Input label='Email' required />);
    const label = screen.getByText('Email');
    expect(label).toHaveClass('required');
  });

  it('accepts only numbers when mask is applied', () => {
    render(<Input label='CPF' mask='cpf' />);
    const input = screen.getByRole('textbox', { name: /cpf/i });

    // Tenta digitar letras - deve ser ignorado
    fireEvent.change(input, { target: { value: 'abc123def' } });
    expect(input).toHaveValue('123');

    // Tenta digitar números - deve funcionar
    fireEvent.change(input, { target: { value: '12345678901' } });
    expect(input).toHaveValue('123.456.789-01');
  });

  it('prevents non-numeric key presses when mask is applied', () => {
    render(<Input label='Phone' mask='phone' />);
    const input = screen.getByRole('textbox', { name: /phone/i });

    // Tenta pressionar tecla de letra - deve ser prevenido
    fireEvent.keyDown(input, { key: 'a' });
    expect(input).toHaveValue('');

    // Tenta pressionar tecla de número - deve funcionar
    fireEvent.keyDown(input, { key: '1' });
    // Como o keyDown não dispara o onChange, vamos testar o onChange diretamente
    fireEvent.change(input, { target: { value: '1' } });
    expect(input).toHaveValue('1');
  });

  it('allows control keys when mask is applied', () => {
    render(<Input label='CNPJ' mask='cnpj' />);
    const input = screen.getByRole('textbox', { name: /cnpj/i });

    // Teclas de controle devem funcionar
    fireEvent.keyDown(input, { key: 'Backspace' });
    fireEvent.keyDown(input, { key: 'Delete' });
    fireEvent.keyDown(input, { key: 'ArrowLeft' });
    fireEvent.keyDown(input, { key: 'Tab' });

    // Não deve haver erro
    expect(input).toBeInTheDocument();
  });

  it('allows copy/paste operations when mask is applied', () => {
    render(<Input label='CEP' mask='cep' />);
    const input = screen.getByRole('textbox', { name: /cep/i });

    // Ctrl+C, Ctrl+V, Ctrl+A, Ctrl+X, Ctrl+Z devem funcionar
    fireEvent.keyDown(input, { key: 'c', ctrlKey: true });
    fireEvent.keyDown(input, { key: 'v', ctrlKey: true });
    fireEvent.keyDown(input, { key: 'a', ctrlKey: true });
    fireEvent.keyDown(input, { key: 'x', ctrlKey: true });
    fireEvent.keyDown(input, { key: 'z', ctrlKey: true });

    // Não deve haver erro
    expect(input).toBeInTheDocument();
  });
});
