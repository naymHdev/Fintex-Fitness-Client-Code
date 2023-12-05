import { Helmet } from "react-helmet";
import SectionTitle from "../../Components/SectionTitle";
import { BarChart } from "@mui/x-charts";

const Balance = () => {
  return (
    <>
      <div className="font-josefin">
        <div className="mt-16 mb-20">
          <SectionTitle
            heading={"Members Remaining Balance and total payment"}
            subHeading={
              "Dashboard displays members' remaining balances and total payments, offering a concise overview of financial transactions and current account statuses."
            }
          />
        </div>
        <Helmet>
          <title>Fintex-Fitness || Balance</title>
        </Helmet>
        <section>
          <BarChart
            xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            width={800}
            height={400}
          />
        </section>
      </div>
    </>
  );
};

export default Balance;
