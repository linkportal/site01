import Sidebar from '../components/dashboard/Sidebar'
import DashboardHeader from '../components/dashboard/Header'
import StatCard from '../components/dashboard/StatCard'
import ChartWidget from '../components/dashboard/ChartWidget'
import RecentDeployments from '../components/dashboard/RecentDeployments'
import ActivityFeed from '../components/dashboard/ActivityFeed'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-deep-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 pl-64">
        <DashboardHeader />

        <main className="p-6">
          {/* Stats grid */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Total Projects"
              value="12"
              subtitle="3 in staging"
              trend={{ value: '+2', positive: true }}
              gradient="from-cyber-cyan to-cyber-blue"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              }
            />
            <StatCard
              label="Active Deployments"
              value="8"
              subtitle="2 queued"
              trend={{ value: '+5', positive: true }}
              gradient="from-emerald-400 to-cyan-400"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              }
            />
            <StatCard
              label="API Calls (24h)"
              value="2.4M"
              subtitle="Avg 1.2s response"
              trend={{ value: '+12%', positive: true }}
              gradient="from-neon to-neon-pink"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              }
            />
            <StatCard
              label="Uptime"
              value="99.99%"
              subtitle="Last 30 days"
              trend={{ value: '+0.01%', positive: true }}
              gradient="from-ember to-ember-dark"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              }
            />
          </div>

          {/* Charts row */}
          <div className="mb-6 grid gap-6 lg:grid-cols-2">
            <ChartWidget
              title="Traffic Overview"
              subtitle="Weekly API requests"
            />
            <ChartWidget
              title="Error Rate"
              subtitle="Errors per 1k requests"
              data={[2, 5, 3, 8, 4, 6, 3, 5, 2, 4, 3, 1]}
            />
          </div>

          {/* Bottom row: Deployments + Activity */}
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RecentDeployments />
            </div>
            <div>
              <ActivityFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
