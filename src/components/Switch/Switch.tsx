import React, { InputHTMLAttributes } from 'react';
import './Switch.css';

interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'error' | 'success';
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  label,
  description,
  size = 'medium',
  variant = 'default',
  className = '',
  ...props
}) => {
  const baseClass = 'nan-switch';
  const sizeClass = size !== 'medium' ? `nan-switch--${size}` : '';
  const variantClass = variant !== 'default' ? `nan-switch--${variant}` : '';

  const switchClasses = [baseClass, sizeClass, variantClass, className]
    .filter(Boolean)
    .join(' ');

  const labelClasses = ['nan-switch-label', props.required ? 'required' : '']
    .filter(Boolean)
    .join(' ');

  const inputId =
    props.id || `switch-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className='nan-switch-wrapper'>
      <input
        id={inputId}
        type='checkbox'
        role='switch'
        className={switchClasses}
        {...props}
      />
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
        </label>
      )}
      {description && (
        <div className='nan-switch-description'>{description}</div>
      )}
    </div>
  );
};

export default Switch;
