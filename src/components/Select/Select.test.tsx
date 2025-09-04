import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Select from './Select';

const mockOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3', disabled: true },
  { value: '4', label: 'Option 4' },
];

describe('Select', () => {
  it('renders with default props', () => {
    render(<Select label='Country' options={mockOptions} />);
    const select = screen.getByRole('combobox', { name: /country/i });
    expect(select).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Select label='Select label' options={mockOptions} />);
    const label = screen.getByText('Select label');
    expect(label).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <Select label='Test' size='small' options={mockOptions} />
    );
    let select = screen.getByRole('combobox', { name: /test/i });
    expect(select).toHaveClass('nan-select--small');

    rerender(<Select label='Test' size='large' options={mockOptions} />);
    select = screen.getByRole('combobox', { name: /test/i });
    expect(select).toHaveClass('nan-select--large');
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <Select label='Test' variant='error' options={mockOptions} />
    );
    let select = screen.getByRole('combobox', { name: /test/i });
    expect(select).toHaveClass('nan-select--error');

    rerender(<Select label='Test' variant='success' options={mockOptions} />);
    select = screen.getByRole('combobox', { name: /test/i });
    expect(select).toHaveClass('nan-select--success');
  });

  it('renders with placeholder', () => {
    render(
      <Select
        label='Test'
        options={mockOptions}
        placeholder='Select an option'
      />
    );
    const select = screen.getByRole('combobox', { name: /test/i });
    expect(select).toHaveTextContent('Select an option');
  });

  it('shows error message when error and touched are true', () => {
    render(
      <Select
        label='Test'
        options={mockOptions}
        error='This field is required'
        touched={true}
      />
    );
    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
  });

  it('shows help text when no error', () => {
    render(
      <Select label='Test' options={mockOptions} helpText='This is help text' />
    );
    const helpText = screen.getByText('This is help text');
    expect(helpText).toBeInTheDocument();
  });

  it('does not show help text when error is present', () => {
    render(
      <Select
        label='Test'
        options={mockOptions}
        error='This field is required'
        touched={true}
        helpText='This is help text'
      />
    );
    const helpText = screen.queryByText('This is help text');
    expect(helpText).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Select label='Test' options={mockOptions} className='custom-class' />
    );
    const select = screen.getByRole('combobox', { name: /test/i });
    expect(select).toHaveClass('custom-class');
  });

  it('shows required indicator', () => {
    render(<Select label='Email' options={mockOptions} required />);
    const label = screen.getByText('Email');
    expect(label).toHaveClass('required');
  });

  it('opens dropdown when clicked', async () => {
    render(<Select label='Test' options={mockOptions} />);
    const select = screen.getByRole('combobox', { name: /test/i });

    fireEvent.click(select);

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });
  });

  it('closes dropdown when option is selected', async () => {
    const mockOnChange = jest.fn();
    render(
      <Select label='Test' options={mockOptions} onChange={mockOnChange} />
    );

    const select = screen.getByRole('combobox', { name: /test/i });
    fireEvent.click(select);

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    const option = screen.getByText('Option 1');
    fireEvent.click(option);

    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    expect(mockOnChange).toHaveBeenCalledWith('1');
  });

  it('displays selected option', async () => {
    const mockOnChange = jest.fn();
    render(
      <Select label='Test' options={mockOptions} onChange={mockOnChange} />
    );

    const select = screen.getByRole('combobox', { name: /test/i });
    fireEvent.click(select);

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    const option = screen.getByText('Option 2');
    fireEvent.click(option);

    await waitFor(() => {
      expect(select).toHaveTextContent('Option 2');
    });
  });

  it('handles disabled options', async () => {
    const mockOnChange = jest.fn();
    render(
      <Select label='Test' options={mockOptions} onChange={mockOnChange} />
    );

    const select = screen.getByRole('combobox', { name: /test/i });
    fireEvent.click(select);

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    const disabledOption = screen.getByText('Option 3');
    expect(disabledOption).toHaveClass('nan-select-option--disabled');

    fireEvent.click(disabledOption);
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('handles disabled select', () => {
    render(<Select label='Test' options={mockOptions} disabled />);
    const select = screen.getByRole('combobox', { name: /test/i });
    expect(select).toHaveClass('nan-select--disabled');
    expect(select).toHaveAttribute('tabIndex', '-1');
  });

  it('handles keyboard navigation', async () => {
    render(<Select label='Test' options={mockOptions} />);
    const select = screen.getByRole('combobox', { name: /test/i });

    // Press Enter to open
    fireEvent.keyDown(select, { key: 'Enter' });

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    // Press Escape to close
    fireEvent.keyDown(select, { key: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  it('handles controlled value', () => {
    const { rerender } = render(
      <Select label='Test' options={mockOptions} value='2' />
    );

    const select = screen.getByRole('combobox', { name: /test/i });
    expect(select).toHaveTextContent('Option 2');

    rerender(<Select label='Test' options={mockOptions} value='4' />);
    expect(select).toHaveTextContent('Option 4');
  });

  it('renders hidden input for form submission', () => {
    render(
      <Select
        label='Test'
        options={mockOptions}
        name='test-select'
        value='2'
        required
      />
    );

    const hiddenInput = screen.getByDisplayValue('2');
    expect(hiddenInput).toHaveAttribute('name', 'test-select');
    expect(hiddenInput).toHaveAttribute('required');
  });

  it('closes dropdown when clicking outside', async () => {
    render(
      <div>
        <Select label='Test' options={mockOptions} />
        <button>Outside button</button>
      </div>
    );

    const select = screen.getByRole('combobox', { name: /test/i });
    fireEvent.click(select);

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    const outsideButton = screen.getByText('Outside button');
    fireEvent.mouseDown(outsideButton);

    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  it('handles placeholder selection', async () => {
    const mockOnChange = jest.fn();
    render(
      <Select
        label='Test'
        options={mockOptions}
        placeholder='Choose an option'
        onChange={mockOnChange}
      />
    );

    const select = screen.getByRole('combobox', { name: /test/i });
    fireEvent.click(select);

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    const placeholderOption = screen.getByRole('option', {
      name: 'Choose an option',
    });
    fireEvent.click(placeholderOption);

    expect(mockOnChange).toHaveBeenCalledWith('');
  });
});
