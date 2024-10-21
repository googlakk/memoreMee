import AdminBoard from "@widgets/admin/manager";
import { withAuthMiddleware } from "@app/hocs";
import { withMainLayout } from "@app/hocs/withMainLayout";

const ManagerPage = () => {
  return (
    <>
      <AdminBoard />
    </>
  );
};
export default withAuthMiddleware(withMainLayout(ManagerPage));
