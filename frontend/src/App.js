import React, { Suspense } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { NotificationContainer } from "react-notifications"
import { AppLayout } from "./components/layout/app-layout"
import { UserProvider } from "./context/user-context"

export const App = () => (
  <UserProvider>
    <Suspense fallback={null}>
      <div>
        <Router>
          <AppLayout />
          <NotificationContainer />
        </Router>
      </div>
    </Suspense>
  </UserProvider>
)
