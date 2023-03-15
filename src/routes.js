import React from 'react'

const Landing = React.lazy(() => import('./views/pages/landing'))
const Login = React.lazy(() => import('./views/pages/login'))
const Register = React.lazy(() => import('./views/pages/register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Conditions = React.lazy(() => import('./views/pages/conditions'))
const PrivacyPolicy = React.lazy(() => import('./views/pages/privacyPolicy'))

const Dashboard = React.lazy(() => import('./views/dashboard'))
const Profile = React.lazy(() => import('./views/profile'))
const Faq = React.lazy(() => import('./views/faq/Faq'))
const Requests = React.lazy(() => import('./views/requests'))
const Offers = React.lazy(() => import('./views/offers'))
const Deposits = React.lazy(() => import('./views/deposits'))

const routes = [
  // { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register, exact: true },
  { path: '/404', name: '404', component: Page404 },
  { path: '/500', name: '500', component: Page500 },
  { path: '/requests', name: 'Requests', component: Requests },
  { path: '/offers', name: 'Offers', component: Offers },
  { path: '/faq', name: 'Faq', component: Faq },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/conditions', name: 'Conditions', component: Conditions },
  { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy },
  { path: '/deposits', name: 'Deposits', component: Deposits },
]

export default routes
