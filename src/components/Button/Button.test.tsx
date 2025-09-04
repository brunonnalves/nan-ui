import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with primary variant by default', () => {
    render(<Button>Primary Button</Button>);
    const button = screen.getByRole('button', { name: /primary button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('nan-button--primary');
    expect(button).toHaveClass('nan-button--medium');
  });

  it('renders with secondary variant', () => {
    render(<Button variant='secondary'>Secondary Button</Button>);
    const button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('nan-button--secondary');
    expect(button).toHaveClass('nan-button--medium');
  });

  it('renders with outline variant', () => {
    render(<Button variant='outline'>Outline Button</Button>);
    const button = screen.getByRole('button', { name: /outline button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('nan-button--outline');
    expect(button).toHaveClass('nan-button--medium');
  });

  it('renders with icon variant', () => {
    render(<Button variant='icon'>🔍</Button>);
    const button = screen.getByRole('button', { name: /🔍/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('nan-button--icon');
    expect(button).toHaveClass('nan-button--medium');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size='small'>Small</Button>);
    let button = screen.getByRole('button', { name: /small/i });
    expect(button).toHaveClass('nan-button--small');
    expect(button).toHaveClass('nan-button--primary');

    rerender(<Button size='large'>Large</Button>);
    button = screen.getByRole('button', { name: /large/i });
    expect(button).toHaveClass('nan-button--large');
    expect(button).toHaveClass('nan-button--primary');
  });

  it('renders disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  it('forwards additional props', () => {
    render(
      <Button data-testid='custom-button' aria-label='Custom'>
        Custom
      </Button>
    );
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveAttribute('aria-label', 'Custom');
  });

  it('applies custom className', () => {
    render(<Button className='custom-class'>Custom Class</Button>);
    const button = screen.getByRole('button', { name: /custom class/i });
    expect(button).toHaveClass('custom-class');
  });
});
