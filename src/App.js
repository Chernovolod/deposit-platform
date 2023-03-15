import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './scss/style.scss'
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { getUserInfo } from './services'
import { logout, setUser } from './store'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Landing = React.lazy(() => import('./views/pages/landing'))
const ForgotPassword = React.lazy(() => import('./views/pages/forgotPassword'))
const NewPassword = React.lazy(() => import('./views/pages/newPassword'))
const Login = React.lazy(() => import('./views/pages/login'))
const BankLogin = React.lazy(() => import('./views/pages/bankLogin'))
const Register = React.lazy(() => import('./views/pages/register'))
const BankRegister = React.lazy(() => import('./views/pages/bankRegister'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Conditions = React.lazy(() => import('./views/pages/conditions'))
const PrivacyPolicy = React.lazy(() => import('./views/pages/conditions'))
const Verification = React.lazy(() => import('./views/pages/verification'))

class App extends Component {
  async componentDidMount() {
    window.scrollTo(0, 0)

    if (this.props.isLoggedIn) {
      try {
        const data = await getUserInfo()
        this.props.setUser(data)
      } catch (e) {
        console.log(e)
      }
    } else {
      this.props.logout()
    }
    if (process.env.NODE_ENV !== 'development') {
      const jivo = document.createElement('script')
      jivo.setAttribute('src', '//code-ya.jivosite.com/widget/s3Y4kbwggN')
      jivo.setAttribute('async', '')

      document.body.appendChild(jivo)
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevProps.isLoggedIn && this.props.isLoggedIn) {
      try {
        const data = await getUserInfo()
        this.props.setUser(data)
      } catch (e) {
        console.log(e)
      }
    }
  }

  render() {
    const { isBankUserType, isBusinessUserType, isLoggedIn } = this.props

    return (
      <BrowserRouter>
        <React.Suspense fallback={ loading }>
          <I18nextProvider i18n={ i18n }>
            <Switch>
              <Route exact path="/verification" name="Verification Page" render={ (props) => <Verification { ...props } /> }/>
              <Route exact path="/forgot" name="Forgot Password Page" render={ (props) => <ForgotPassword { ...props } /> }/>
              <Route exact path="/password/reset" name="Reset Password Page" render={ (props) => <NewPassword { ...props } /> }/>
              <Route exact path="/login" name="Login Page" render={ (props) => <Login { ...props } /> }/>
              <Route exact path="/bank/login" name="Bank Login Page" render={ (props) => <BankLogin { ...props } /> }/>
              <Route
                exact
                path="/register"
                name="Register Page"
                render={ (props) => <Register { ...props } /> }
              />
              <Route
                exact
                path="/bank/register"
                name="Bank Register Page"
                render={ (props) => <BankRegister { ...props } /> }
              />
              <Route path="/conditions" name="Conditions" render={ (props) => <Conditions { ...props } /> }/>
              <Route path="/privacy-policy" name="PrivacyPolicy" render={ (props) => <PrivacyPolicy { ...props } /> }/>
              <Route exact path="/404" name="Page 404" render={ (props) => <Page404 { ...props } /> }/>
              <Route exact path="/500" name="Page 500" render={ (props) => <Page500 { ...props } /> }/>
              <Route exact path="/landing" name="Landing" render={ (props) => <Landing { ...props } /> }/>
              { !isLoggedIn && isBusinessUserType && <Redirect to="/login"/> }
              { !isLoggedIn && isBankUserType && <Redirect to="/bank/login"/> }
              { !isLoggedIn && <Redirect to="/login"/> }
              <Route path="/" name="DefaultLayout" render={ (props) => <DefaultLayout { ...props } /> }/>
            </Switch>
          </I18nextProvider>
        </React.Suspense>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = ({ isLoggedIn, isBankUserType, isBusinessUserType }) => ({
  isLoggedIn,
  isBankUserType,
  isBusinessUserType
})

const mapDispatchToProps = (dispatch) => ({
  setUser: user => dispatch(setUser(user)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
