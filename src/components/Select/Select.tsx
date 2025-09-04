import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Select.css';

interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  error?: string;
  touched?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'error' | 'success';
  helpText?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  name?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  error,
  touched,
  size = 'medium',
  variant = 'default',
  helpText,
  placeholder,
  className = '',
  disabled = false,
  required = false,
  id,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >(value);
  const [selectedLabel, setSelectedLabel] = useState<string>('');
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Atualiza o valor selecionado quando o prop value muda
  useEffect(() => {
    setSelectedValue(value);
    if (value !== undefined) {
      const option = options.find(opt => opt.value === value);
      setSelectedLabel(option ? option.label : '');
    } else {
      setSelectedLabel('');
    }
  }, [value, options]);

  // Fecha o dropdown quando clica fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Fecha o dropdown com ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (option: SelectOption) => {
    if (!option.disabled) {
      setSelectedValue(option.value);
      setSelectedLabel(option.label);
      setIsOpen(false);
      onChange?.(option.value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
        break;
    }
  };

  const baseClass = 'nan-select';
  const sizeClass = size !== 'medium' ? `nan-select--${size}` : '';
  const variantClass = variant !== 'default' ? `nan-select--${variant}` : '';
  const disabledClass = disabled ? 'nan-select--disabled' : '';
  const openClass = isOpen ? 'nan-select--open' : '';

  const selectClasses = [
    baseClass,
    sizeClass,
    variantClass,
    disabledClass,
    openClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const labelClasses = ['nan-select-label', required ? 'required' : '']
    .filter(Boolean)
    .join(' ');

  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  // Calcula a posição do dropdown
  const getDropdownPosition = () => {
    if (!selectRef.current) return { top: 0, left: 0, width: 0 };

    const rect = selectRef.current.getBoundingClientRect();
    return {
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
    };
  };

  const dropdownPosition = isOpen
    ? getDropdownPosition()
    : { top: 0, left: 0, width: 0 };

  return (
    <div className='nan-form-group'>
      {label && (
        <label htmlFor={selectId} className={labelClasses}>
          {label}
        </label>
      )}

      <div className='nan-select-wrapper'>
        <div
          ref={selectRef}
          id={selectId}
          className={selectClasses}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          role='combobox'
          aria-expanded={isOpen}
          aria-haspopup='listbox'
          aria-label={label}
          aria-required={required}
          aria-invalid={!!error && touched}
        >
          <span className='nan-select-value'>
            {selectedLabel || placeholder || 'Selecione uma opção'}
          </span>
          <span className='nan-select-arrow'>
            <svg
              width='12'
              height='8'
              viewBox='0 0 12 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 1.5L6 6.5L11 1.5'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
        </div>

        {/* Hidden input para formulários */}
        <input
          type='hidden'
          name={name}
          value={selectedValue || ''}
          required={required}
        />
      </div>

      {!!error && touched && <div className='nan-select-error'>{error}</div>}

      {helpText && !error && <div className='nan-select-help'>{helpText}</div>}

      {/* Dropdown com Portal */}
      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className='nan-select-dropdown'
            style={{
              position: 'absolute',
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              width: dropdownPosition.width,
              zIndex: 9999,
            }}
            role='listbox'
          >
            <div className='nan-select-dropdown-content'>
              {placeholder && (
                <div
                  className={`nan-select-option ${
                    selectedValue === undefined
                      ? 'nan-select-option--selected'
                      : ''
                  }`}
                  onClick={() =>
                    handleOptionClick({ value: '', label: placeholder })
                  }
                  role='option'
                  aria-selected={selectedValue === undefined}
                >
                  {placeholder}
                </div>
              )}
              {options.map(option => (
                <div
                  key={option.value}
                  className={`nan-select-option ${
                    selectedValue === option.value
                      ? 'nan-select-option--selected'
                      : ''
                  } ${option.disabled ? 'nan-select-option--disabled' : ''}`}
                  onClick={() => handleOptionClick(option)}
                  role='option'
                  aria-selected={selectedValue === option.value}
                  aria-disabled={option.disabled}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Select;
