import { withPermission } from '../withPermission';

const CustomersWidget = () => {
  return (
    <div>
      <button>Edit Customer</button>
    </div>
  );
};

export default withPermission(CustomersWidget, {
  requiredPolicy: 'EDIT_CUSTOMERS',
});
