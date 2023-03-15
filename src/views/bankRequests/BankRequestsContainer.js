import React, { Component } from 'react'
import BankRequestsView from './BankRequestsView'
import { getRequests } from 'src/services/requests'

class BankRequestsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      pageMode: 'default',
      createdRequests: [],
      activeRequests: [],
      closedRequests: [],
      specificModeData: {}
    }
  }

  getRequests = async () => {
    try {
      this.setState({
        ...this.state,
        isLoading: true
      })
      const createdRequests = await getRequests('CREATED')
      const activeRequests = await getRequests('ACTIVE')
      const closedRequests = await getRequests('CLOSED')

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
    await this.getRequests()
  }

  componentWillUnmount() {
    this.setState({
      pageMode: 'default'
    })
  }

  setPageMode = (mode) => this.setState({
    pageMode: mode
  })

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.pageMode !== this.state.pageMode && this.state.pageMode === 'default') {
      await this.getRequests()
    }
  }

  setSpecificModeData = (id) => {
    const [specificModeData] = this.state.createdRequests.filter((request) => request.id === id)
    this.setState({
      specificModeData
    })
  }

  render() {
    const { createdRequests, closedRequests, activeRequests, pageMode, isLoading, specificModeData } = this.state
    const propsData = {
      specificModeData,
      setSpecificModeData: this.setSpecificModeData,
      isLoading,
      createdRequests,
      activeRequests,
      closedRequests,
      pageMode,
      setPageMode: this.setPageMode,
      ...this.props
    }
    return (
      <>
        <title>Заявки | Deposit Platform</title>
        <BankRequestsView { ...propsData } />
      </>
    )
  }
}

export default BankRequestsContainer
