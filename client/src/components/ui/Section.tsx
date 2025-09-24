import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'white' | 'gray' | 'dark' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  containerSize = 'lg',
  background = 'white',
  padding = 'lg',
  id
}) => {
  const backgroundClasses = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    dark: 'bg-gray-900 dark:bg-black',
    gradient: 'bg-gradient-to-br from-space-blue-900 via-space-blue-800 to-space-blue-700'
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 sm:py-20',
    xl: 'py-24 sm:py-32'
  };

  return (
    <section
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export default Section;