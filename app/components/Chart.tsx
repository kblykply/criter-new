'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip);

const labels = [
  'Oca 2019', 'Nis 2019', 'Tem 2019', 'Eki 2019', 'Oca 2020', 'Nis 2020', 'Tem 2020', 'Eki 2020',
  'Oca 2021', 'Nis 2021', 'Tem 2021', 'Eki 2021', 'Oca 2022', 'Nis 2022', 'Tem 2022', 'Eki 2022',
  'Oca 2023', 'Nis 2023', 'Tem 2023', 'Eki 2023', 'Oca 2024', 'Nis 2024', 'Tem 2024', 'Eki 2024',
  'Oca 2025', 'Nis 2025', 'Tem 2025', 'Eki 2025', 'Oca 2026',
];

const datasets = {
  'Birim Fiyat': {
    label: '₺ / m²',
    data: [2500, 2600, 2650, 2700, 2800, 2900, 3000, 3100, 3500, 4000, 5000, 6000, 8000, 10000, 15000, 20000, 25000, 30000, 33000, 36000, 40000, 42000, 45000, 48000, 50000, 52000, 54000, 58000, 62000],
  },
  'Fiyat': {
    label: '₺',
    data: [200000, 210000, 220000, 230000, 250000, 270000, 300000, 320000, 400000, 550000, 750000, 900000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 6500000, 7000000, 7500000, 8000000, 9000000, 9500000, 10000000, 10500000, 11000000, 12000000, 13000000],
  },
  'Amortisman': {
    label: 'Yıl',
    data: [22, 21, 20, 19, 18, 18, 18, 20, 22, 23, 26, 28, 32, 34, 34, 32, 30, 28, 26, 24, 20, 18, 16, 15, 16, 18, 18, 17, 16],
  },
  'Fiyat Endeksi': {
    label: 'Puan',
    data: [100, 120, 130, 140, 160, 180, 200, 220, 280, 350, 450, 580, 700, 850, 1000, 1200, 1350, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2250, 2300, 2350, 2400],
  },
};

const colors = {
  border: '#3A78D4',
  background: 'rgba(93, 165, 241, 0.2)',
};

export default function InvestmentCharts() {
  const [activeTab, setActiveTab] = useState<'Birim Fiyat' | 'Fiyat' | 'Amortisman' | 'Fiyat Endeksi'>('Birim Fiyat');

  const chartData = {
    labels,
    datasets: [
      {
        label: datasets[activeTab].label,
        data: datasets[activeTab].data,
        borderColor: colors.border,
        backgroundColor: colors.background,
        fill: true,
        tension: 0.3,
        pointRadius: 3,
        pointHoverRadius: 6,
      },
    ],
  };

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Bağlıca Yatırım Analizi</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          Etimesgut / Bağlıca bölgesine ait konut fiyat trendlerini ve amortisman verilerini detaylı inceleyin.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        {Object.keys(datasets).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === tab ? 'bg-gradient-to-r from-[#5DA5F1] to-[#3A78D4] text-white shadow-lg' : 'bg-gray-100 text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg max-w-6xl mx-auto">
        <Line data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
      </div>

      {/* Placeholder for additional icons/designs */}
      <div className="mt-12 flex justify-center gap-10 opacity-40">
        <Image src="/investment-icon-1.png" alt="placeholder" width={60} height={60} />
        <Image src="/investment-icon-2.png" alt="placeholder" width={60} height={60} />
      </div>
    </section>
  );
}
