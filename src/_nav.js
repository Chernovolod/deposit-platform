import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'
import i18n from 'i18next'
const BUSINESS_ADMIN = (status) => [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: i18n.t('dashboard.title.default'),
    to: '/dashboard?mode=default',
    icon: <CIcon name="home" customClasses="nav-icon no-events" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: i18n.t('nav.BUSINESS_ADMIN.anchor.requests'),
    to: '/requests?mode=default',
    icon: <CIcon name="document" customClasses="nav-icon no-events" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: i18n.t('nav.BUSINESS_ADMIN.anchor.offers'),
    to: '/offers',
    icon: <CIcon name="offers" customClasses="nav-icon no-events" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: i18n.t('nav.BUSINESS_ADMIN.anchor.questionsAndAnswers'),
    to: '/faq',
    icon: <CIcon name="faq" customClasses="nav-icon no-events" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: status === 'VERIFIED' ? i18n.t('profile') : i18n.t('verification'),
    to: '/profile',
    icon: <CIcon name={ status === 'VERIFIED' ? 'user' : 'verification' } customClasses="nav-icon no-events" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  }
]
const BANK_ADMIN = () => [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: i18n.t('nav.BANK_ADMIN.anchor.main'),
    to: '/dashboard',
    icon: <CIcon name="home" customClasses="nav-icon no-events"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: i18n.t('nav.BANK_ADMIN.anchor.requests'),
    to: '/requests?mode=default',
    icon: <CIcon name="document" customClasses="nav-icon no-events"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: i18n.t('nav.BANK_ADMIN.anchor.deposits'),
    to: '/deposits',
    icon: <CIcon name="deposits" customClasses="nav-icon no-events"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: i18n.t('nav.BANK_ADMIN.anchor.questionsAndAnswers'),
    to: '/faq',
    icon: <CIcon name="faq" customClasses="nav-icon no-events"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: i18n.t('nav.BANK_ADMIN.anchor.profile'),
    to: '/profile',
    icon: <CIcon name="user" customClasses="nav-icon no-events"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  }
]

export const navigation = (status) => {
  return {
    BUSINESS_LINKING_CANDIDATE: () => BUSINESS_ADMIN(status),
    BUSINESS_LINKED: () => BUSINESS_ADMIN(status),
    BUSINESS_ADMIN: () => BUSINESS_ADMIN(status),
    BANK_ADMIN: () => BANK_ADMIN()
  }
}

