import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders with default props', () => {
    render(<Checkbox label='Aceito os termos' />);
    const checkbox = screen.getByRole('checkbox', {
      name: /aceito os termos/i,
    });
    expect(checkbox).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Checkbox label='Checkbox label' />);
    const label = screen.getByText('Checkbox label');
    expect(label).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<Checkbox label='Terms' description='Read carefully' />);
    const description = screen.getByText('Read carefully');
    expect(description).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Checkbox label='Test' size='small' />);
    let checkbox = screen.getByRole('checkbox', { name: /test/i });
    expect(checkbox).toHaveClass('nan-checkbox--small');

    rerender(<Checkbox label='Test' size='large' />);
    checkbox = screen.getByRole('checkbox', { name: /test/i });
    expect(checkbox).toHaveClass('nan-checkbox--large');
  });

  it('can be checked and unchecked', () => {
    render(<Checkbox label='Test' />);
    const checkbox = screen.getByRole('checkbox', { name: /test/i });

    expect(checkbox).not.toBeChecked();

    checkbox.click();
    expect(checkbox).toBeChecked();

    checkbox.click();
    expect(checkbox).not.toBeChecked();
  });

  it('can be disabled', () => {
    render(<Checkbox label='Test' disabled />);
    const checkbox = screen.getByRole('checkbox', { name: /test/i });
    expect(checkbox).toBeDisabled();
  });

  it('forwards additional props', () => {
    render(
      <Checkbox
        label='Test'
        data-testid='custom-checkbox'
        aria-label='Custom'
        name='test-checkbox'
      />
    );
    const checkbox = screen.getByTestId('custom-checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Custom');
    expect(checkbox).toHaveAttribute('name', 'test-checkbox');
  });

  it('applies custom className', () => {
    render(<Checkbox label='Test' className='custom-class' />);
    const checkbox = screen.getByRole('checkbox', { name: /test/i });
    expect(checkbox).toHaveClass('custom-class');
  });

  it('shows required indicator', () => {
    render(<Checkbox label='Terms' required />);
    const label = screen.getByText('Terms');
    expect(label).toHaveClass('required');
  });

  it('can be controlled', () => {
    const { rerender } = render(<Checkbox label='Test' checked />);
    let checkbox = screen.getByRole('checkbox', { name: /test/i });
    expect(checkbox).toBeChecked();

    rerender(<Checkbox label='Test' checked={false} />);
    checkbox = screen.getByRole('checkbox', { name: /test/i });
    expect(checkbox).not.toBeChecked();
  });
});
