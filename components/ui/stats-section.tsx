'use client';

import { MoveUpRight, Zap, Gauge, Clock, DollarSign, TrendingUp } from 'lucide-react';

function Stats() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col justify-between gap-0 rounded-md border border-purple-700/50 bg-gradient-to-br from-purple-900/20 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
            <Zap className="mb-10 h-4 w-4 text-purple-400" />
            <h2 className="flex flex-row items-end gap-4 text-left text-4xl font-regular tracking-tighter text-white max-w-xl">
              487
              <span className="text-sm tracking-normal text-purple-400">
                pages
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
              Automated service pages
            </p>
          </div>

          <div className="flex flex-col justify-between gap-0 rounded-md border border-purple-700/50 bg-gradient-to-br from-purple-900/20 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
            <Gauge className="mb-10 h-4 w-4 text-purple-400" />
            <h2 className="flex flex-row items-end gap-4 text-left text-4xl font-regular tracking-tighter text-white max-w-xl">
              1ms
              <span className="text-sm tracking-normal text-purple-400">
                response
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
              Server response time
            </p>
          </div>

          <div className="flex flex-col justify-between gap-0 rounded-md border border-purple-700/50 bg-gradient-to-br from-purple-900/20 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
            <MoveUpRight className="mb-10 h-4 w-4 text-purple-400" />
            <h2 className="flex flex-row items-end gap-4 text-left text-4xl font-regular tracking-tighter text-white max-w-xl">
              100
              <span className="text-sm tracking-normal text-purple-400">
                /100
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
              PageSpeed score
            </p>
          </div>

          <div className="flex flex-col justify-between gap-0 rounded-md border border-purple-700/50 bg-gradient-to-br from-purple-900/20 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
            <Clock className="mb-10 h-4 w-4 text-purple-400" />
            <h2 className="flex flex-row items-end gap-4 text-left text-4xl font-regular tracking-tighter text-white max-w-xl">
              90%
              <span className="text-sm tracking-normal text-purple-400">
                saved
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
              Content creation time
            </p>
          </div>

          <div className="flex flex-col justify-between gap-0 rounded-md border border-purple-700/50 bg-gradient-to-br from-purple-900/20 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
            <DollarSign className="mb-10 h-4 w-4 text-purple-400" />
            <h2 className="flex flex-row items-end gap-4 text-left text-4xl font-regular tracking-tighter text-white max-w-xl">
              $73K-230K
              <span className="text-sm tracking-normal text-purple-400">
                value
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
              Development equivalent
            </p>
          </div>

          <div className="flex flex-col justify-between gap-0 rounded-md border border-purple-700/50 bg-gradient-to-br from-purple-900/20 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
            <TrendingUp className="mb-10 h-4 w-4 text-purple-400" />
            <h2 className="flex flex-row items-end gap-4 text-left text-4xl font-regular tracking-tighter text-white max-w-xl">
              $50K-100K
              <span className="text-sm tracking-normal text-purple-400">
                /year
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
              Annual SEO value
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Stats };
