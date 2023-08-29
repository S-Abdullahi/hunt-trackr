import React from "react";
import { GrBug } from "react-icons/gr";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlinePendingActions } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllStats } from "../Features/users/allJobs/allJobsSlice";
import BarChartDisplay from "../components/charts/BarChart";
import AreaChartDisplay from "../components/charts/AreaChart";

const Home = () => {
  const dispatch = useDispatch();
  const { defaultStat } = useSelector((store) => store.allJobs);
  const { declined, pending, interview } = defaultStat;
  const statDetail = [
    {
      title: "Pending Applications",
      icon: <MdOutlinePendingActions />,
      value: pending,
      color: "bg-yellow-200",
    },
    {
      title: "Interview Applications",
      icon: <BsBagCheck />,
      value: interview,
      color: "bg-green-200",
    },
    {
      title: "Declined Applications",
      icon: <GrBug />,
      value: declined,
      color: "bg-red-200",
    },
  ];

  React.useEffect(() => {
    dispatch(getAllStats());
  }, []);

  return (
    <div className="m-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statDetail.map((item) => {
          const { title, icon, value, color } = item;
          return (
            <div className="bg-white p-3 rounded flex flex-col gap-6">
              <div className="flex justify-between item-center">
                <span
                  className={`text-2xl ${color} p-1 rounded-full w-10 h-10 flex justify-center items-center`}
                >
                  {icon}
                </span>
                <span className="text-3xl font-bold text-gray-600 ">
                  {value}
                </span>
              </div>
              <div className="flex justify-end text-gray-600 text-sm">
                {title}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-3 text-center rounded ">
          <p>Area Chart</p>
          <AreaChartDisplay />
        </div>
        <div className="bg-white p-3 text-center rounded-[2px] shadow w-full h-72">
          <p className="mb-2">Bar Chart</p>
          <div>
            <BarChartDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
