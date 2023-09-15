import React from 'react';
import PayComponent from './PayComponent';
function checkout() {
  return (
    <div>
      <PayComponent money="100$" address="123 Main St" item="Laptop" />
    </div>
  );
}
export default checkout;