import React, { Component } from 'react'
import DepositsView from './DepositsView'
import { createDeposit, getDeposits } from 'src/services'
import { Helmet } from 'react-helmet'

class DepositsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isCreatingOffer: false,
      visible: false,
      pageMode: 'default',
      activeDeposits: [],
      closedDeposits: [],
      specificModeData: {},
      newDepositData: {
        type: 'IRREVOCABLE',
        percentage: 0,
        currency: 'BYN',
        days: 90,
        minAmount: 0,
        maxAmount: 0
      }
    }
  }

  getDepositsHandler = async () => {
    try {
      this.setState({
        ...this.state,
        isLoading: true
      })
      const activeDeposits = await getDeposits('ACTIVE')
      const closedDeposits = await getDeposits('CLOSED')

      if (!activeDeposits.message && !closedDeposits.message) {
        this.setState({
          ...this.state,
          activeDeposits,
          closedDeposits
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
    await this.getDepositsHandler()
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.pageMode !== this.state.pageMode && this.state.pageMode === 'default') {
      await this.getDepositsHandler()
    }
  }

  componentWillUnmount() {
    this.setState({
      pageMode: 'default'
    })
  }

  setPageMode = (mode) => this.setState({
    pageMode: mode
  })

  setSpecificModeData = (id, isHistoryDeposit = false) => {
    const [specificModeData] = this.state[isHistoryDeposit ? 'closedDeposits' : 'activeDeposits'].filter((request) => request.id === id)
    this.setState({
      specificModeData
    })
  }

  setVisible = (state) => {
    this.setState({
      visible: state
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
    const { isCreatingOffer, closedDeposits, activeDeposits, pageMode, isLoading, specificModeData, visible } = this.state
    const propsData = {
      isCreatingOffer,
      createDepositHandler: this.createDepositHandler,
      onChange: this.onChangeNewOfferHandler,
      setVisible: this.setVisible,
      visible,
      specificModeData,
      setSpecificModeData: this.setSpecificModeData,
      isLoading,
      activeDeposits,
      closedDeposits,
      pageMode,
      setPageMode: this.setPageMode,
      ...this.props
    }
    return (
      <>
        <Helmet>
          <title>Вклады | Deposit Platform</title>
        </Helmet>
        <DepositsView { ...propsData } />
      </>
    )
  }
}

export default DepositsContainer
