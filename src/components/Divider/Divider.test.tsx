import { render, screen } from '@testing-library/react';
import Divider from './Divider';

describe('Divider', () => {
  it('renders with default props', () => {
    render(<Divider />);
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Divider variant='dashed' />);
    let divider = screen.getByRole('separator');
    expect(divider).toHaveClass('nan-divider--dashed');

    rerender(<Divider variant='dotted' />);
    divider = screen.getByRole('separator');
    expect(divider).toHaveClass('nan-divider--dotted');
  });

  it('renders with different orientations', () => {
    const { rerender } = render(<Divider orientation='vertical' />);
    let divider = screen.getByRole('separator');
    expect(divider).toHaveClass('nan-divider--vertical');

    rerender(<Divider orientation='horizontal' />);
    divider = screen.getByRole('separator');
    expect(divider).toHaveClass('nan-divider--horizontal');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Divider size='thin' />);
    let divider = screen.getByRole('separator');
    expect(divider).toHaveClass('nan-divider--horizontal-thin');

    rerender(<Divider size='thick' />);
    divider = screen.getByRole('separator');
    expect(divider).toHaveClass('nan-divider--horizontal-thick');
  });

  it('renders with different colors', () => {
    const { rerender } = render(<Divider color='primary' />);
    let divider = screen.getByRole('separator');
    expect(divider).toHaveClass('nan-divider--primary');

    rerender(<Divider color='success' />);
    divider = screen.getByRole('separator');
    expect(divider).toHaveClass('nan-divider--success');

    rerender(<Divider color='error' />);
    divider = screen.getByRole('separator');
    expect(divider).toHaveClass('nan-divider--error');
  });

  it('renders with text', () => {
    render(<Divider text='or' />);
    const text = screen.getByText('or');
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('nan-divider-text');
  });

  it('renders as div when has text', () => {
    render(<Divider text='or' />);
    const divider = screen.getByText('or').closest('div');
    expect(divider).toHaveClass('nan-divider--with-text');
  });

  it('renders as hr when no text', () => {
    render(<Divider />);
    const divider = screen.getByRole('separator');
    expect(divider.tagName).toBe('HR');
  });

  it('applies custom className', () => {
    render(<Divider className='custom-class' />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('custom-class');
  });

  it('combines multiple props correctly', () => {
    render(
      <Divider
        variant='dashed'
        orientation='vertical'
        size='thick'
        color='primary'
        text='separator'
        className='custom-class'
      />
    );

    const divider = screen.getByText('separator').closest('div');
    expect(divider).toHaveClass('nan-divider--dashed');
    expect(divider).toHaveClass('nan-divider--vertical');
    expect(divider).toHaveClass('nan-divider--vertical-thick');
    expect(divider).toHaveClass('nan-divider--primary');
    expect(divider).toHaveClass('nan-divider--with-text');
    expect(divider).toHaveClass('custom-class');
  });

  it('renders with all default classes when no props', () => {
    render(<Divider />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('nan-divider');
    expect(divider).toHaveClass('nan-divider--solid');
    expect(divider).toHaveClass('nan-divider--horizontal');
    expect(divider).toHaveClass('nan-divider--horizontal-medium');
  });

  it('forwards additional props', () => {
    render(<Divider role='separator' />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveAttribute('role', 'separator');
  });
});
