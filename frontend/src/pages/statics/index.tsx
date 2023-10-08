import { FC } from "react";
import StaticsDashboard from "@widgets/statics-dashboard";
import { withMainLayout } from "@app/hocs/withMainLayout";

const StaticsPage: FC = () => {
  return (
    <>
      <StaticsDashboard />
    </>
  );
};

export default withMainLayout(StaticsPage);
