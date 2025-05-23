'use client';

import { useUser } from '@/context/UserContext';
// import { metaService } from "@/services/MetaServices";
import { Leaf, Sparkles, User2Icon } from 'lucide-react';
import BarChartComp from '../MetaChart/BarChartComp';
import AdminPieChart from '../MetaChart/AdminChart/AdminPieChart';
import FreeIdeaCount from '../MetaChart/AdminChart/FreeIdeaCount';
import { useEffect, useState } from 'react';
import { metaService } from '@/services/MetaServices';
import MemberPie from '../MetaChart/MemberChart/PieMember';
import MemberBar from '../MetaChart/MemberChart/MemberBar';

export interface UsageStats {
  data: {
    barChartData?: Array<Record<string, any>>;
    freeIdeaCount?: number;
    paidIdeaCount?: number;
    paymentCount?: number;
    pieChartData?: Array<Record<string, any>>;
    totalIdeaCount?: number;
    totalRevenue?: number;
    underReviewIdeaCount?: number;
    userCount?: number;
    formattedIdeaStatusDistribution?: Array<Record<string, any>>;
  };
}
const CommonDashboard = () => {
  const { user } = useUser();

  const [data, setData] = useState<UsageStats | null>(null);

  useEffect(() => {
    const getMeta = async () => {
      const res = await metaService();
      setData(res);
    };

    getMeta();
  }, []);

  return (
    <div className="my-12 mx-4 md:mx-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <Leaf className="text-green-500" size={32} />
          <span>Welcome back, {user?.name ? user.name : 'Eco-Champion'}</span>
          <Sparkles className="text-yellow-400" size={32} />
        </h2>

        <p className="text-lg text-muted-foreground">
          Your green ideas are shaping a better tomorrow
        </p>
        <div>
          {user?.role === 'ADMIN' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-sm font-medium text-blue-600">
                  Total Users
                </h2>
                <p className="text-2xl flex justify-center items-center gap-3 font-bold text-blue-900 mt-1">
                  {data?.data.userCount ?? 0} <User2Icon />
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-sm font-medium text-green-600">
                  Total Revenue
                </h2>
                <p className="text-2xl font-bold text-green-900 mt-1">
                  {data?.data.totalRevenue?.toFixed(2) ?? '0.00'} Tk.
                </p>
              </div>
            </div>
          )}
        </div>
        <div>
          {user?.role === 'MEMBER' && (
            <div className=" border mt-6 border-green-400 rounded-xl p-6 shadow-sm">
              <h2 className="text-sm font-medium text-green-200">
                Total Revenue
              </h2>
              <p className="text-2xl font-bold text-green-100 mt-1">
                {data?.data.totalRevenue?.toFixed(2) ?? '0.00'} Tk.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-8 border border-green-100 dark:border-green-800">
        <div className="flex items-start gap-4">
          <Lightbulb
            className="text-green-600 dark:text-green-300 mt-1 flex-shrink-0"
            size={24}
          /> */}
      {/* <div>
            <h3 className="text-xl font-semibold mb-2">
              Welcome to ThinkGreenly! 🌱
            </h3>
            <p className="text-justify">
              We&apos;re excited to have you join our community of
              sustainability innovators. At ThinkGreenly, we believe every green
              idea counts - from small daily habits to large-scale environmental
              projects. Share your eco-friendly solutions, collaborate with
              like-minded individuals, and help accelerate the transition to a
              sustainable future.
            </p>
          </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-3">
            <Globe className="text-blue-600 dark:text-blue-300" size={20} />
            <h4 className="font-medium">Quick Start</h4>
          </div>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <Sparkles
                className="text-blue-400 mt-0.5 flex-shrink-0"
                size={16}
              />
              <span>Share your first sustainability idea</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles
                className="text-blue-400 mt-0.5 flex-shrink-0"
                size={16}
              />
              <span>Explore ideas in trending categories</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles
                className="text-blue-400 mt-0.5 flex-shrink-0"
                size={16}
              />
              <span>Connect with other eco-innovators</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-100 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-3">
            <HeartHandshake
              className="text-purple-600 dark:text-purple-300"
              size={20}
            />
            <h4 className="font-medium">Community Impact</h4>
          </div>
          <p className="text-sm">
            Your participation has helped the ThinkGreenly community reduce an
            estimated
            <span className="font-bold text-purple-600 dark:text-purple-300">
              {' '}
              12,450 kg{' '}
            </span>
            of CO₂ emissions this month alone. Keep up the amazing work!
          </p>
        </div>
      </div> */}

      {/* <div className="text-center mt-8">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          <Leaf size={16} className="text-green-500" />
          Together, we&apos;re growing a greener future
          <Leaf size={16} className="text-green-500" />
        </p>
      </div> */}

      {user?.role === 'ADMIN' && (
        <div>
          <div className="space-y-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-content-center gap-10 items-stretch ">
            <BarChartComp />
            <FreeIdeaCount />
            <AdminPieChart />
          </div>

        </div>
      )}
      {user?.role === 'MEMBER' && (
        <div className="flex gap-20">
          <MemberPie />
          <MemberBar />
        </div>
      )}
    </div>
  );
};

export default CommonDashboard;
