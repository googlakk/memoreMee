import { FC } from "react";
import StaticsDashboard from "@widgets/statics-dashboard";
import { compose } from "ramda";
import { withAuthMiddleware } from "@app/hocs";
import { withMainLayout } from "@app/hocs/withMainLayout";

const StaticsPage: FC = () => {
  return (
    <>
      <StaticsDashboard />
    </>
  );
};

export default compose(withMainLayout, withAuthMiddleware)(StaticsPage);
