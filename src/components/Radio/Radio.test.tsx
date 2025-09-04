import { render, screen } from '@testing-library/react';
import Radio from './Radio';

describe('Radio', () => {
  it('renders with default props', () => {
    render(<Radio label='Option 1' name='options' value='1' />);
    const radio = screen.getByRole('radio', { name: /option 1/i });
    expect(radio).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Radio label='Radio label' name='test' value='test' />);
    const label = screen.getByText('Radio label');
    expect(label).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(
      <Radio
        label='Option'
        description='Additional info'
        name='test'
        value='test'
      />
    );
    const description = screen.getByText('Additional info');
    expect(description).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <Radio label='Test' size='small' name='test' value='test' />
    );
    let radio = screen.getByRole('radio', { name: /test/i });
    expect(radio).toHaveClass('nan-radio--small');

    rerender(<Radio label='Test' size='large' name='test' value='test' />);
    radio = screen.getByRole('radio', { name: /test/i });
    expect(radio).toHaveClass('nan-radio--large');
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <Radio label='Test' variant='error' name='test' value='test' />
    );
    let radio = screen.getByRole('radio', { name: /test/i });
    expect(radio).toHaveClass('nan-radio--error');

    rerender(<Radio label='Test' variant='success' name='test' value='test' />);
    radio = screen.getByRole('radio', { name: /test/i });
    expect(radio).toHaveClass('nan-radio--success');
  });

  it('can be selected', () => {
    render(<Radio label='Option 1' name='options' value='1' />);
    const radio = screen.getByRole('radio', { name: /option 1/i });

    expect(radio).not.toBeChecked();

    radio.click();
    expect(radio).toBeChecked();
  });

  it('can be disabled', () => {
    render(<Radio label='Test' disabled name='test' value='test' />);
    const radio = screen.getByRole('radio', { name: /test/i });
    expect(radio).toBeDisabled();
  });

  it('forwards additional props', () => {
    render(
      <Radio
        label='Test'
        name='test'
        value='test'
        data-testid='custom-radio'
        aria-label='Custom'
      />
    );
    const radio = screen.getByTestId('custom-radio');
    expect(radio).toHaveAttribute('aria-label', 'Custom');
    expect(radio).toHaveAttribute('name', 'test');
    expect(radio).toHaveAttribute('value', 'test');
  });

  it('applies custom className', () => {
    render(
      <Radio label='Test' className='custom-class' name='test' value='test' />
    );
    const radio = screen.getByRole('radio', { name: /test/i });
    expect(radio).toHaveClass('custom-class');
  });

  it('shows required indicator', () => {
    render(<Radio label='Terms' required name='test' value='test' />);
    const label = screen.getByText('Terms');
    expect(label).toHaveClass('required');
  });

  it('can be controlled', () => {
    const handleChange = jest.fn();
    const { rerender } = render(
      <Radio
        label='Test'
        checked
        name='test'
        value='test'
        onChange={handleChange}
      />
    );
    let radio = screen.getByRole('radio', { name: /test/i });
    expect(radio).toBeChecked();

    rerender(
      <Radio
        label='Test'
        checked={false}
        name='test'
        value='test'
        onChange={handleChange}
      />
    );
    radio = screen.getByRole('radio', { name: /test/i });
    expect(radio).not.toBeChecked();
  });

  it('works in radio group', () => {
    render(
      <div>
        <Radio label='Option 1' name='group' value='1' />
        <Radio label='Option 2' name='group' value='2' />
      </div>
    );

    const option1 = screen.getByRole('radio', { name: /option 1/i });
    const option2 = screen.getByRole('radio', { name: /option 2/i });

    expect(option1).toHaveAttribute('name', 'group');
    expect(option2).toHaveAttribute('name', 'group');

    // Selecting one should not affect the other
    option1.click();
    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();
  });
});
