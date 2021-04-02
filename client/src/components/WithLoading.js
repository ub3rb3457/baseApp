import React from 'react';
function WithLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <WrappedComponent {...props} />;
    return <p>Hold on, fetching data might take some time.</p>;
  };
}
export default WithLoading;