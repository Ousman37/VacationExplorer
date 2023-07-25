'use client';
import React, { useEffect, useState } from 'react';
import EmptyState from './components/EmptyState';

interface ErrorStateProps {
  error: Error | null;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (error) {
      console.error(error);
      // Check error type
      switch (error.name) {
        case 'TypeError':
          setErrorMessage(
            'An unexpected type error has occurred. Please check your input and try again.'
          );
          break;
        case 'ReferenceError':
          setErrorMessage(
            'An unexpected reference error has occurred. We are working to fix this as soon as possible.'
          );
          break;
        // Add more error types as required
        default:
          setErrorMessage(
            'An error has occurred. We are working to fix this as soon as possible.'
          );
      }
    }
  }, [error]);

  if (!error) {
    return null; // render nothing if there is no error
  }

  return <EmptyState title="Error" subtitle={errorMessage} />;
};

export default ErrorState;
