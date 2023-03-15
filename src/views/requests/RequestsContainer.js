import React, { Component } from 'react'
import { connect } from 'react-redux'
import RequestsView from './RequestsView'
import { getRequests, getBankRequests, getFilteredBankRequests } from 'src/services/requests'
import { USER_TYPE } from 'src/constants'
import { Helmet } from 'react-helmet'

class RequestsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      createdRequests: [],
      activeRequests: [],
      closedRequests: [],
      specificModeData: {},
      pageMode: 'default',
      tab: undefined
    }
  }

  setTab = (tab) => {
    this.setState({
      ...this.state,
      tab
    })
  }

  getRequests = async () => {
    try {
      this.setState({
        ...this.state,
        isLoading: true
      })
      let createdRequests, activeRequests, closedRequests

      if (this.props.userType === USER_TYPE.BUSINESS || this.props.userType === 'BUSINESS_LINKED') {
        createdRequests = await getRequests('CREATED')
        activeRequests = await getRequests('ACTIVE')
        closedRequests = await getRequests('CLOSED')
      } else {
        createdRequests = await getBankRequests()
        activeRequests = await getFilteredBankRequests('ACTIVE')
        closedRequests = await getFilteredBankRequests('CLOSED')
      }

      if (!createdRequests.message && !activeRequests.message && !closedRequests.message) {
        this.setState({
          ...this.state,
          createdRequests,
          activeRequests,
          closedRequests
        })
      }
    } catch (e) {
      console.log(e)
    } finally {
      this.setState({
        ...this.state,
        isLoading: false
      })
    }
  }

  async componentDidMount() {
    const currentMode = new URLSearchParams(this.props.location.search).get('mode') || this.props.location?.query?.mode
    const tab = this.props.location?.query?.tab

    this.setTab(tab)
    if (currentMode) {
      if (currentMode === 'specific') {
        this.setPageMode('default')
      }
      if (currentMode !== 'specific') {
        this.setPageMode(currentMode, tab)
      }
    }

    await this.getRequests()
  }

  setPageMode = (mode, tab = undefined) => {
    this.props.history.push(`/requests?mode=${mode}`)
    setTimeout(() => this.setState({
      ...this.state,
      pageMode: mode,
      tab
    }), 0)
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    const currentMode = new URLSearchParams(this.props.location.search).get('mode')
    const prevMode = new URLSearchParams(prevProps.location.search).get('mode')

    // if (!prevState.activeRequests.length && this.state.activeRequests.length) this.setPageMode('default', this.state.tab)
    if (currentMode && prevMode && prevMode !== currentMode) {
      this.setPageMode(currentMode)
    }
    if (prevState.pageMode !== this.state.pageMode && this.state.pageMode === 'default') {
      await this.getRequests()
    }
  }

  setSpecificModeData = (id, shouldRedirect = false) => {
    if (this.state.createdRequests.filter((request) => request.id === id).length) {
      if(shouldRedirect) {
        this.setState(() => ({
          ...this.state,
          specificModeData: this.state.createdRequests.filter((request) => request.id === id)[0]
        }))
      } else {
        this.props.history.push('/requests?mode=specific')
        this.setState(() => ({
            ...this.state,
            pageMode: 'specific',
            specificModeData: this.state.createdRequests.filter((request) => request.id === id)[0]
          }))
      }
      return
    }
    if (this.state.activeRequests.filter((request) => request.id === id)) {
      this.props.history.push('/requests?mode=specific')
      this.setState(() => ({
        ...this.state,
        pageMode: 'specific',
        specificModeData: this.state.activeRequests.filter((request) => request.id === id)[0]
      }))
      return
    }
  }

  render() {
    const { userType } = this.props
    const { createdRequests, closedRequests, activeRequests, pageMode, isLoading, specificModeData } = this.state
    const propsData = {
      userType,
      specificModeData,
      setSpecificModeData: this.setSpecificModeData,
      isLoading,
      createdRequests,
      activeRequests,
      closedRequests,
      pageMode,
      tab: this.state.tab,
      setTab: this.setTab,
      setPageMode: this.setPageMode,
      ...this.props
    }
    return (
      <>
        <Helmet>
          <title>Заявки | Deposit Platform</title>
        </Helmet>
        <RequestsView { ...propsData } />
      </>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  userType: user.type
})

export default connect(mapStateToProps, null)(RequestsContainer)
