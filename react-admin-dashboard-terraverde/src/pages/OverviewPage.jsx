import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import SalesOverviewChart2 from "../components/overview/SalesOverviewChart2";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import CategoryDistributionChart2 from "../components/overview/CategoryDistributionChart2";
//import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Cultivos"
            icon={ShoppingBag}
            value="8500"
            color="#EC4899"
          />
          <StatCard
            name="Cultivos Sanos"
            icon={BarChart2}
            value="81.5%"
            color="#10B981"
          />
        </motion.div>

        {/* CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <SalesOverviewChart2 />
          <CategoryDistributionChart />
          <CategoryDistributionChart2 />
        </div>
      </main>
    </div>
  );
};
export default OverviewPage;