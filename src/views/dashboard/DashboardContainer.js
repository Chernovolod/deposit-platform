import React, { Component } from 'react'

import { connect } from 'react-redux'
import DashboardView from './DashboardView'
import { createDeposit, getRequests } from '../../services'
import { Helmet } from 'react-helmet'

class DashboardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requests: [],
      specificModeData: {},
      isCreatingOffer: false,
      visible: false,
      newDepositData: {
        type: 'IRREVOCABLE',
        percentage: 0,
        currency: 'BYN',
        days: 90,
        minAmount: 0,
        maxAmount: 0
      },
      isLoading: false,
      pageMode: 'default'
    }
  }

  async componentDidMount () {
    const currentMode = new URLSearchParams(this.props.location.search).get('mode')
    if (currentMode) {
      this.setPageMode(currentMode)
    }
    if (this.props.userType !== 'BANK_ADMIN') {
      await this.getRequestsHandler()
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextState.newDepositData === this.state.newDepositData || !this.state.visible
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    const currentMode = new URLSearchParams(this.props.location.search).get('mode')
    const prevMode = new URLSearchParams(prevProps.location.search).get('mode')
    if (currentMode && prevMode && prevMode !== currentMode) {
      this.setPageMode(currentMode)
    }
    if ((prevState.pageMode === 'specific' || prevState.pageMode === 'create') && prevState.pageMode !== this.state.pageMode && this.state.pageMode === 'default') {
      await this.getRequestsHandler()
    }
  }

  setSpecificModeData = (id, isHistoryRequest = false) => {
    const [specificModeData] = this.state.requests.filter((request) => request.id === id)
    this.setState({
      specificModeData
    })
  }

  getRequestsHandler = async () => {
    try {
      this.setState({
        isLoading: true
      })
      let createdRequests, activeRequests, closedRequests

      createdRequests = await getRequests('CREATED')
      activeRequests = await getRequests('ACTIVE')
      closedRequests = await getRequests('CLOSED')

      if (!createdRequests.message && !activeRequests.message && !closedRequests.message) {
        const [created1, created2] = createdRequests.reverse()
        const [active1, active2] = activeRequests.reverse()
        const [closed1, closed2] = closedRequests
        const requestsSummaryData = [created1, created2, active1, active2, closed1, closed2].filter(Boolean)
        this.setRequests(requestsSummaryData)
      }
    } catch (e) {
      console.log(e)
    } finally {
      this.setState({
        isLoading: false
      })
    }
  }

  setRequests = (reqData) => {
    this.setState({
      ...this.state,
      requests: reqData
    })
  }

  setSpecificModeData = (id) => {
    const [specificModeData] = this.state.requests.filter((request) => request.id === id)
    this.setState({
      specificModeData
    })
  }

  setPageMode = (mode) => {
    this.props.history.push(`/dashboard?mode=${mode}`)
    this.setState({
      pageMode: mode
    })
  }

  onChangeNewOfferHandler = ({ target: {name, value}}) => {
    this.setState({
      newDepositData: {
        ...this.state.newDepositData,
        [name]: value
      }
    })
  }

  setVisible = (state) => {
    this.setState({
      visible: state
    })
  }

  createDepositHandler = async () => {
    try {
      this.setState({
        isCreatingOffer: true
      })
      const data = await createDeposit(this.state.newDepositData)
      if (!data.message) {
        this.setState({
          visible: false
        })
        await this.getDepositsHandler()
      }
    } catch (e) {

    } finally {
      this.setState({
        isCreatingOffer: false
      })
    }
  }

  render() {
    const { isCreatingOffer, pageMode, isLoading, visible, requests, specificModeData } = this.state
    const propsData = {
      requestsSummary: requests,
      isCreatingOffer,
      specificModeData,
      setSpecificModeData: this.setSpecificModeData,
      createDepositHandler: this.createDepositHandler,
      onChange: this.onChangeNewOfferHandler,
      setVisible: this.setVisible,
      visible,
      userType: this.props.userType,
      isLoading,
      pageMode,
      setPageMode: this.setPageMode,
      ...this.props
    }
    return (
      <>
        <Helmet>
          <title>Главная страница | Deposit Platform</title>
        </Helmet>
        <DashboardView { ...propsData } />
      </>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  userType: user.type
})

export default connect(mapStateToProps, null)(DashboardContainer)
