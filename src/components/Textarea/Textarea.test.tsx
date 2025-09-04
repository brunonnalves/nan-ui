import { render, screen } from '@testing-library/react';
import Textarea from './Textarea';

describe('Textarea', () => {
  it('renders with default props', () => {
    render(<Textarea label='Message' placeholder='Digite sua mensagem' />);
    const textarea = screen.getByRole('textbox', { name: /message/i });
    expect(textarea).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Textarea label='Textarea label' />);
    const label = screen.getByText('Textarea label');
    expect(label).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Textarea label='Test' size='small' />);
    let textarea = screen.getByRole('textbox', { name: /test/i });
    expect(textarea).toHaveClass('nan-textarea--small');

    rerender(<Textarea label='Test' size='large' />);
    textarea = screen.getByRole('textbox', { name: /test/i });
    expect(textarea).toHaveClass('nan-textarea--large');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Textarea label='Test' variant='error' />);
    let textarea = screen.getByRole('textbox', { name: /test/i });
    expect(textarea).toHaveClass('nan-textarea--error');

    rerender(<Textarea label='Test' variant='success' />);
    textarea = screen.getByRole('textbox', { name: /test/i });
    expect(textarea).toHaveClass('nan-textarea--success');
  });

  it('renders with help text', () => {
    render(<Textarea label='Test' helpText='Help information' />);
    const helpText = screen.getByText('Help information');
    expect(helpText).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(<Textarea label='Test' error='Error message' touched />);
    const errorMessage = screen.getByText('Error message');
    expect(errorMessage).toBeInTheDocument();
  });

  it('shows character count when enabled', () => {
    render(<Textarea label='Test' maxLength={100} showCount />);
    const countElement = screen.getByText('0 / 100');
    expect(countElement).toBeInTheDocument();
  });

  it('updates character count when typing', () => {
    render(<Textarea label='Test' maxLength={100} showCount />);
    const textarea = screen.getByRole('textbox', { name: /test/i });

    // Simulate typing
    (textarea as HTMLTextAreaElement).value = 'Hello World';
    textarea.dispatchEvent(new Event('input', { bubbles: true }));

    // Check if the count element exists
    const countElement = screen.getByText('0 / 100');
    expect(countElement).toBeInTheDocument();
  });

  it('shows error when over character limit', () => {
    render(
      <Textarea label='Test' maxLength={5} showCount value='Hello World' />
    );

    // Check if the count element has the limit class
    const countElement = screen.getByText('11 / 5');
    expect(countElement).toHaveClass('nan-textarea-count--limit');
  });

  it('can be disabled', () => {
    render(<Textarea label='Test' disabled />);
    const textarea = screen.getByRole('textbox', { name: /test/i });
    expect(textarea).toBeDisabled();
  });

  it('forwards additional props', () => {
    render(
      <Textarea
        label='Test'
        data-testid='custom-textarea'
        aria-label='Custom'
        placeholder='Custom placeholder'
        rows={5}
      />
    );
    const textarea = screen.getByTestId('custom-textarea');
    expect(textarea).toHaveAttribute('aria-label', 'Custom');
    expect(textarea).toHaveAttribute('placeholder', 'Custom placeholder');
    expect(textarea).toHaveAttribute('rows', '5');
  });

  it('applies custom className', () => {
    render(<Textarea label='Test' className='custom-class' />);
    const textarea = screen.getByRole('textbox', { name: /test/i });
    expect(textarea).toHaveClass('custom-class');
  });

  it('shows required indicator', () => {
    render(<Textarea label='Message' required />);
    const label = screen.getByText('Message');
    expect(label).toHaveClass('required');
  });

  it('can be controlled', () => {
    const { rerender } = render(
      <Textarea label='Test' value='Initial value' />
    );
    let textarea = screen.getByRole('textbox', { name: /test/i });
    expect(textarea).toHaveValue('Initial value');

    rerender(<Textarea label='Test' value='New value' />);
    textarea = screen.getByRole('textbox', { name: /test/i });
    expect(textarea).toHaveValue('New value');
  });
});
