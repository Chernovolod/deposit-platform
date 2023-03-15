import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppContent, AppHeader, AppSidebar } from '../components/index'

const DefaultLayout = ({ isLoggedIn, ...rest }) => {
  return (
    <div>
      <AppHeader />
      {!isLoggedIn && <Redirect to="/login" />}
      <AppSidebar {...rest} />
      <div className="wrapper d-flex flex-column min-vh-100">
        <div className="body flex-grow-1 px-md-5 py-4">
          <AppContent />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn
})

export default connect(mapStateToProps)(DefaultLayout)
