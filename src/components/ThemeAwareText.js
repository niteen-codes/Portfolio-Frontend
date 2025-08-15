import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeAwareText = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  as = 'div',
  style = {},
  ...props 
}) => {
  const { isDark } = useTheme();
  
  const getTextColor = () => {
    if (isDark) {
      switch (variant) {
        case 'primary':
          return 'var(--text-primary)';
        case 'secondary':
          return 'var(--text-secondary)';
        case 'tertiary':
          return 'var(--text-tertiary)';
        case 'white':
          return '#ffffff';
        case 'muted':
          return 'var(--text-tertiary)';
        default:
          return 'var(--text-primary)';
      }
    } else {
      switch (variant) {
        case 'primary':
          return '#0f172a';
        case 'secondary':
          return '#334155';
        case 'tertiary':
          return '#64748b';
        case 'white':
          return '#ffffff';
        case 'muted':
          return '#94a3b8';
        default:
          return '#0f172a';
      }
    }
  };

  const Component = as;
  
  return (
    <Component
      className={className}
      style={{
        color: getTextColor(),
        ...style
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default ThemeAwareText;