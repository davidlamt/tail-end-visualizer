interface PerYearStatistic {
  noun: string;
  perYearCount: number;
}

const perYearStatistics: PerYearStatistic[] = [
  { noun: 'breath', perYearCount: 8000000 },
  { noun: 'day', perYearCount: 365 },
  { noun: 'heartbeat', perYearCount: 42000000 },
  { noun: 'laugh', perYearCount: 6000 },
  { noun: 'word', perYearCount: 2555000 },
];

export default perYearStatistics;
