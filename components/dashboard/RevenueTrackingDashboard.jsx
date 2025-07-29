'use client';

import { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement);

// Revenue tracking dashboard for million-dollar goal
export default function RevenueTrackingDashboard() {
  const [currentPeriod, setCurrentPeriod] = useState('current_month');
  const [revenueData, setRevenueData] = useState(null);

  // Revenue targets and current performance
  const REVENUE_TARGETS = {
    annual_goal: 1000000,
    monthly_targets: {
      ime: 38000,      // 4.5 cases × $8,500 average
      corelift: 14000, // 7 patients × $2,000
      weight_mgmt: 7500 // 25 patients × $300
    },
    total_monthly_target: 59500
  };

  const SERVICE_METRICS = {
    ime: {
      name: 'ValorView™ IME',
      price: 8500,
      target_monthly: 4.5,
      color: '#dc2626',
      current_month: 3,
      pipeline: 8
    },
    corelift: {
      name: 'CoreLift™ Program', 
      price: 2000,
      target_monthly: 7,
      color: '#059669',
      current_month: 5,
      pipeline: 12
    },
    weight_mgmt: {
      name: 'Nourish & Thrive™',
      price: 300,
      target_monthly: 25,
      color: '#3b82f6',
      current_month: 18,
      pipeline: 35
    }
  };

  const MARKETING_PERFORMANCE = {
    total_budget: 15000,
    spent_this_month: 12500,
    channels: {
      linkedin_ads: { spent: 2500, leads: 8, cost_per_lead: 312.50, revenue: 25500 },
      facebook_ads: { spent: 3500, leads: 23, cost_per_lead: 152.17, revenue: 18000 },
      google_ads: { spent: 3000, leads: 35, cost_per_lead: 85.71, revenue: 10500 },
      content_marketing: { spent: 1500, leads: 12, cost_per_lead: 125.00, revenue: 6000 },
      events_networking: { spent: 2000, leads: 6, cost_per_lead: 333.33, revenue: 17000 }
    }
  };

  useEffect(() => {
    // Simulate loading real-time data
    const loadRevenueData = () => {
      const currentMonthRevenue = Object.entries(SERVICE_METRICS).reduce((total, [key, service]) => {
        return total + (service.current_month * service.price);
      }, 0);

      setRevenueData({
        current_month_revenue: currentMonthRevenue,
        year_to_date: currentMonthRevenue * 8, // Simulate 8 months of data
        goal_progress: (currentMonthRevenue * 12) / REVENUE_TARGETS.annual_goal
      });
    };

    loadRevenueData();
  }, []);

  // Chart configurations
  const monthlyRevenueChart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'IME Revenue',
        data: [25500, 34000, 42500, 38250, 51000, 29750, 46750, 38000, 0, 0, 0, 0],
        backgroundColor: SERVICE_METRICS.ime.color,
        borderColor: SERVICE_METRICS.ime.color,
        borderWidth: 2
      },
      {
        label: 'CoreLift Revenue', 
        data: [8000, 12000, 14000, 10000, 16000, 18000, 14000, 10000, 0, 0, 0, 0],
        backgroundColor: SERVICE_METRICS.corelift.color,
        borderColor: SERVICE_METRICS.corelift.color,
        borderWidth: 2
      },
      {
        label: 'Weight Management Revenue',
        data: [4500, 6000, 7500, 5700, 8100, 7800, 6900, 5400, 0, 0, 0, 0],
        backgroundColor: SERVICE_METRICS.weight_mgmt.color,
        borderColor: SERVICE_METRICS.weight_mgmt.color,
        borderWidth: 2
      }
    ]
  };

  const marketingROIChart = {
    labels: Object.keys(MARKETING_PERFORMANCE.channels).map(key => 
      key.replace('_', ' ').split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    ),
    datasets: [{
      label: 'Marketing ROI (%)',
      data: Object.values(MARKETING_PERFORMANCE.channels).map(channel => 
        ((channel.revenue - channel.spent) / channel.spent * 100).toFixed(1)
      ),
      backgroundColor: [
        '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'
      ],
      borderWidth: 2
    }]
  };

  const pipelineChart = {
    labels: ['IME Pipeline', 'CoreLift Pipeline', 'Weight Mgmt Pipeline'],
    datasets: [{
      data: [
        SERVICE_METRICS.ime.pipeline * SERVICE_METRICS.ime.price,
        SERVICE_METRICS.corelift.pipeline * SERVICE_METRICS.corelift.price,
        SERVICE_METRICS.weight_mgmt.pipeline * SERVICE_METRICS.weight_mgmt.price
      ],
      backgroundColor: [
        SERVICE_METRICS.ime.color,
        SERVICE_METRICS.corelift.color, 
        SERVICE_METRICS.weight_mgmt.color
      ],
      borderWidth: 2
    }]
  };

  if (!revenueData) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="revenue-dashboard">
      <style jsx>{`
        .revenue-dashboard {
          padding: 2rem;
          background: #f8fafc;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .dashboard-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .goal-progress {
          font-size: 1.25rem;
          color: #6b7280;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .metric-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-left: 4px solid;
        }

        .metric-card.revenue { border-left-color: #059669; }
        .metric-card.target { border-left-color: #3b82f6; }
        .metric-card.roi { border-left-color: #f59e0b; }
        .metric-card.pipeline { border-left-color: #8b5cf6; }

        .metric-value {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .metric-label {
          color: #6b7280;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .metric-detail {
          font-size: 0.875rem;
          color: #374151;
        }

        .charts-section {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .chart-container {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .chart-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1.5rem;
        }

        .services-breakdown {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .service-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .service-header {
          display: flex;
          justify-content: between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .service-name {
          font-weight: 600;
          color: #1f2937;
        }

        .service-price {
          font-weight: bold;
          color: #059669;
        }

        .service-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }

        .service-metric {
          text-align: center;
        }

        .service-metric-value {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
        }

        .service-metric-label {
          font-size: 0.75rem;
          color: #6b7280;
          text-transform: uppercase;
        }

        .marketing-performance {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .marketing-channels {
          display: grid;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .channel-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 1rem;
          padding: 0.75rem;
          background: #f8fafc;
          border-radius: 6px;
          align-items: center;
        }

        .channel-name {
          font-weight: 500;
          color: #1f2937;
        }

        .channel-metric {
          text-align: center;
          font-size: 0.875rem;
        }

        .positive { color: #059669; }
        .negative { color: #dc2626; }

        .action-items {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-top: 2rem;
        }

        .action-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          margin: 0.5rem 0;
          background: #f0fdf4;
          border-left: 4px solid #22c55e;
          border-radius: 6px;
        }

        .priority-high { border-left-color: #dc2626; background: #fef2f2; }
        .priority-medium { border-left-color: #f59e0b; background: #fffbeb; }

        @media (max-width: 768px) {
          .charts-section {
            grid-template-columns: 1fr;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          
          .channel-row {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>

      <div className="dashboard-header">
        <h1 className="dashboard-title">Garcia Family Medicine</h1>
        <h2 className="dashboard-title">Million Dollar Revenue Dashboard</h2>
        <div className="goal-progress">
          Progress: {(revenueData.goal_progress * 100).toFixed(1)}% of annual goal
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card revenue">
          <div className="metric-value">${revenueData.current_month_revenue.toLocaleString()}</div>
          <div className="metric-label">Current Month Revenue</div>
          <div className="metric-detail">
            Target: ${REVENUE_TARGETS.total_monthly_target.toLocaleString()}
            ({((revenueData.current_month_revenue / REVENUE_TARGETS.total_monthly_target) * 100).toFixed(1)}% of target)
          </div>
        </div>

        <div className="metric-card target">
          <div className="metric-value">${revenueData.year_to_date.toLocaleString()}</div>
          <div className="metric-label">Year to Date Revenue</div>
          <div className="metric-detail">
            Goal: $1,000,000 | Remaining: ${(REVENUE_TARGETS.annual_goal - revenueData.year_to_date).toLocaleString()}
          </div>
        </div>

        <div className="metric-card roi">
          <div className="metric-value">427%</div>
          <div className="metric-label">Overall Marketing ROI</div>
          <div className="metric-detail">
            Spent: ${MARKETING_PERFORMANCE.spent_this_month.toLocaleString()} | 
            Revenue: ${Object.values(MARKETING_PERFORMANCE.channels).reduce((sum, ch) => sum + ch.revenue, 0).toLocaleString()}
          </div>
        </div>

        <div className="metric-card pipeline">
          <div className="metric-value">${(Object.entries(SERVICE_METRICS).reduce((total, [key, service]) => 
            total + (service.pipeline * service.price), 0)).toLocaleString()}</div>
          <div className="metric-label">Pipeline Value</div>
          <div className="metric-detail">
            {Object.values(SERVICE_METRICS).reduce((sum, service) => sum + service.pipeline, 0)} prospects in pipeline
          </div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h3 className="chart-title">Monthly Revenue by Service</h3>
          <Bar 
            data={monthlyRevenueChart}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: { display: false }
              },
              scales: {
                x: { stacked: true },
                y: { 
                  stacked: true,
                  ticks: {
                    callback: function(value) {
                      return '$' + (value / 1000) + 'K';
                    }
                  }
                }
              }
            }}
          />
        </div>

        <div className="chart-container">
          <h3 className="chart-title">Revenue Pipeline</h3>
          <Doughnut 
            data={pipelineChart}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      return context.label + ': $' + context.raw.toLocaleString();
                    }
                  }
                }
              }
            }}
          />
        </div>
      </div>

      <div className="services-breakdown">
        {Object.entries(SERVICE_METRICS).map(([key, service]) => (
          <div key={key} className="service-card">
            <div className="service-header">
              <div className="service-name">{service.name}</div>
              <div className="service-price">${service.price.toLocaleString()}</div>
            </div>
            <div className="service-metrics">
              <div className="service-metric">
                <div className="service-metric-value">{service.current_month}</div>
                <div className="service-metric-label">This Month</div>
              </div>
              <div className="service-metric">
                <div className="service-metric-value">{service.target_monthly}</div>
                <div className="service-metric-label">Monthly Target</div>
              </div>
              <div className="service-metric">
                <div className="service-metric-value">{service.pipeline}</div>
                <div className="service-metric-label">Pipeline</div>
              </div>
              <div className="service-metric">
                <div className="service-metric-value">
                  {((service.current_month / service.target_monthly) * 100).toFixed(0)}%
                </div>
                <div className="service-metric-label">Target Progress</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="marketing-performance">
        <h3 className="chart-title">Marketing Channel Performance</h3>
        <div className="marketing-channels">
          <div className="channel-row" style={{fontWeight: 'bold', background: '#e5e7eb'}}>
            <div>Channel</div>
            <div>Spent</div>
            <div>Leads</div>
            <div>Cost/Lead</div>
            <div>ROI</div>
          </div>
          {Object.entries(MARKETING_PERFORMANCE.channels).map(([channel, data]) => (
            <div key={channel} className="channel-row">
              <div className="channel-name">
                {channel.replace('_', ' ').split(' ').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </div>
              <div className="channel-metric">${data.spent.toLocaleString()}</div>
              <div className="channel-metric">{data.leads}</div>
              <div className="channel-metric">${data.cost_per_lead.toFixed(2)}</div>
              <div className={`channel-metric ${((data.revenue - data.spent) / data.spent * 100) > 200 ? 'positive' : 'negative'}`}>
                {((data.revenue - data.spent) / data.spent * 100).toFixed(0)}%
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="action-items">
        <h3 className="chart-title">Action Items for Million Dollar Goal</h3>
        <div className="action-item priority-high">
          <div>🎯</div>
          <div>
            <strong>Increase IME case volume:</strong> Current 3/month vs target 4.5/month. 
            Focus on LinkedIn outreach to insurance companies.
          </div>
        </div>
        <div className="action-item priority-medium">
          <div>📈</div>
          <div>
            <strong>Scale Facebook CoreLift ads:</strong> ROI is 414%, increase budget by $1,000/month.
          </div>
        </div>
        <div className="action-item priority-medium">
          <div>🤝</div>
          <div>
            <strong>Convert pipeline prospects:</strong> $178K in pipeline value - focus on closing this month.
          </div>
        </div>
        <div className="action-item">
          <div>💡</div>
          <div>
            <strong>Optimize Google Ads:</strong> Lowest cost per lead at $85.71, test expanding keywords.
          </div>
        </div>
      </div>
    </div>
  );
}