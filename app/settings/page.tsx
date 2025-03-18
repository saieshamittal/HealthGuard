import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { SettingsTabs } from "@/components/settings/settings-tabs"

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" description="Manage your account and system preferences." />
      <SettingsTabs />
    </DashboardShell>
  )
}

