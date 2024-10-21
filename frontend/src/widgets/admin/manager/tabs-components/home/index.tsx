import AreaChart from "@widgets/statics-dashboard/charts/area-chart";
import LineChart from "@widgets/statics-dashboard/charts/line-chart";

const TabHome = () => {
  return (
    <>
      <h1>home</h1>
      <div className=" w-[700px] h-fit bg-[#fff] p-8 rounded-2xl ">
        <LineChart />
      </div>
      <AreaChart data={undefined} />
    </>
  );
};
export default TabHome;
