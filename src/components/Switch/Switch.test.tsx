import { render, screen } from '@testing-library/react';
import Switch from './Switch';

describe('Switch', () => {
  it('renders with default props', () => {
    render(<Switch label='Notifications' />);
    const switchElement = screen.getByRole('switch', {
      name: /notifications/i,
    });
    expect(switchElement).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Switch label='Switch label' />);
    const label = screen.getByText('Switch label');
    expect(label).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<Switch label='Switch' description='Additional info' />);
    const description = screen.getByText('Additional info');
    expect(description).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Switch label='Test' size='small' />);
    let switchElement = screen.getByRole('switch', { name: /test/i });
    expect(switchElement).toHaveClass('nan-switch--small');

    rerender(<Switch label='Test' size='large' />);
    switchElement = screen.getByRole('switch', { name: /test/i });
    expect(switchElement).toHaveClass('nan-switch--large');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Switch label='Test' variant='error' />);
    let switchElement = screen.getByRole('switch', { name: /test/i });
    expect(switchElement).toHaveClass('nan-switch--error');

    rerender(<Switch label='Test' variant='success' />);
    switchElement = screen.getByRole('switch', { name: /test/i });
    expect(switchElement).toHaveClass('nan-switch--success');
  });

  it('can be toggled', () => {
    render(<Switch label='Test' />);
    const switchElement = screen.getByRole('switch', { name: /test/i });

    expect(switchElement).not.toBeChecked();

    switchElement.click();
    expect(switchElement).toBeChecked();

    switchElement.click();
    expect(switchElement).not.toBeChecked();
  });

  it('can be disabled', () => {
    render(<Switch label='Test' disabled />);
    const switchElement = screen.getByRole('switch', { name: /test/i });
    expect(switchElement).toBeDisabled();
  });

  it('forwards additional props', () => {
    render(
      <Switch
        label='Test'
        data-testid='custom-switch'
        aria-label='Custom'
        name='test-switch'
      />
    );
    const switchElement = screen.getByTestId('custom-switch');
    expect(switchElement).toHaveAttribute('aria-label', 'Custom');
    expect(switchElement).toHaveAttribute('name', 'test-switch');
  });

  it('applies custom className', () => {
    render(<Switch label='Test' className='custom-class' />);
    const switchElement = screen.getByRole('switch', { name: /test/i });
    expect(switchElement).toHaveClass('custom-class');
  });

  it('shows required indicator', () => {
    render(<Switch label='Terms' required />);
    const label = screen.getByText('Terms');
    expect(label).toHaveClass('required');
  });

  it('can be controlled', () => {
    const handleChange = jest.fn();
    const { rerender } = render(
      <Switch label='Test' checked onChange={handleChange} />
    );
    let switchElement = screen.getByRole('switch', { name: /test/i });
    expect(switchElement).toBeChecked();

    rerender(<Switch label='Test' checked={false} onChange={handleChange} />);
    switchElement = screen.getByRole('switch', { name: /test/i });
    expect(switchElement).not.toBeChecked();
  });

  it('has correct role attribute', () => {
    render(<Switch label='Test' />);
    const switchElement = screen.getByRole('switch', { name: /test/i });
    expect(switchElement).toHaveAttribute('role', 'switch');
  });
});
