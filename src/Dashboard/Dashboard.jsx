import { Helmet } from "react-helmet";
import SectionTitle from "../Components/SectionTitle";
import DHChart from "./Charts/DHChart";
import GrowthAnalytics from "./Charts/GrowthAnalytics";

const Dashboard = () => {

    
  return (
    <div className="font-josefin">
      <Helmet> <title>Fitnex-Fitness || Dashboard</title></Helmet>
      <div className="mt-12 w-11/12 mx-auto">
        <SectionTitle
          heading={"Personalized Plans, Real-time Metrics, and Motivation Await on Our Dashboard!"}
          subHeading={
            '"Welcome to your fitness journey! Our dashboard offers real-time insights, personalized workout plans, and health metrics. Track your progress, set goals, and stay motivated on your path to a healthier you."'
          }
        />
      </div>
      <section className="w-10/12 mx-auto mt-20 space-y-14">
        <GrowthAnalytics />
        <DHChart />
      </section>
    </div>
  );
};

export default Dashboard;
