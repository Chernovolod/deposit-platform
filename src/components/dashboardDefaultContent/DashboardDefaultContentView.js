import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Bar, Chart, Pie, Doughnut } from 'react-chartjs-2'
import { Link } from 'react-router-dom'
import { CChart, CChartBar } from '@coreui/react-chartjs'
import { ProfileTitle } from '../../views/components/titles/profileTitle'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow
} from '@coreui/react'
import Loader from '../../views/components/loaders/intermittent'
import { DepositCard } from '../DepositCard'
import RegularLoader from '../../views/components/loaders/regular'

const DashboardDefaultContentView = ({
                                       barStatistics, donutBankStatistics,
                                       setPageMode,
                                       setSpecificModeData,
                                       requestsSummary,
                                       isLoading,
                                       isBankUser
                                     }) => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (donutBankStatistics?.totalRevenueSum) setTotal(donutBankStatistics?.totalRevenueSum)
  }, [donutBankStatistics?.totalRevenueSum])
  const doughnutPlugins = [{
    beforeDraw: function(chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 260).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "top";
      var text = document.createElement('div').innerText = t('total'),
        textX = Math.round((width - ctx.measureText(text).width) / 2.6),
        textY = height / 2.2;
      var value = document.createElement('div').innerText = donutBankStatistics?.activeOffers + donutBankStatistics?.closedOffers,
        valueX = Math.round((width - ctx.measureText(value).width) / 2.55),
        valueY = height / 1.85;
      ctx.fillText(text, textX, textY);
      ctx.fillText(value, valueX, valueY);
      ctx.save();
    }
  }]

  const doughnutSecondPlugins = [{
    afterEvent: function(evt) {
      this.beforeDraw(evt.$context.chart)
    },
    beforeDraw: function(chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 260).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "top";
      var text = document.createElement('div').innerText = t('total'),
        textX = Math.round((width - ctx.measureText(text).width) / 2.5),
        textY = height / 2.2;
      var value = document.createElement('div').innerText = `${ total } ${t('BYN')}`,
        valueX = Math.round((width - ctx.measureText(value).width) / 2.5),
        valueY = height / 1.85;
      ctx.fillText(text, textX, textY);
      ctx.fillText(value, valueX, valueY);
      ctx.save();
    }
  }]
  const firstDoughnutData = {
    labels: [`${ donutBankStatistics.activeOffers } активных`, `${ donutBankStatistics.closedOffers } закрытых`],
    datasets: [{
      data: [donutBankStatistics.activeOffers, donutBankStatistics.closedOffers],
      backgroundColor: [
        '#2F80ED',
        '#82B3F4',
      ],
      hoverOffset: 1
    }]
  }
  const secondDoughnutData = {
    labels: Object.keys(donutBankStatistics?.totalRevenue).map((key, index) => {
      return `${ donutBankStatistics?.totalRevenue[key] } ${ key }`
    }),
    datasets: [{
      data: Object.values(donutBankStatistics?.totalRevenue),
      backgroundColor: [
        '#2F80ED',
        '#82B3F4',
        '#C1D9FA',
      ],
      hoverOffset: 4
    }]
  }

  const doughnutOptions = {
    cutout: 95,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          borderRadius: 50,
          usePointStyle: true,
          pointStyle: 'circle',
        },
        onClick: function(e, item, legend) {
          Chart.overrides.doughnut.plugins.legend.onClick(e, item, legend)
          // setTotal(total - Number(item.text))
          },
        position: 'right',
        align: 'center'
      }
    },
    scales: {
      x: {
        ticks: {
          display: false
        },
        beginAtZero: true,
        grid: {
          drawBorder: false,
          display: false
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false,
          borderDash: [4, 2]
        }
      }
    }
  }
  const data = canvas => {
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 200)
    gradient.addColorStop(0, '#82B3F4')
    gradient.addColorStop(1, '#2F80ED')

    return {
      labels: barStatistics?.map(el => el.name),
      datasets: [
        {
          // label: '',
          data: barStatistics?.map(el => el.profit),
          backgroundColor: gradient,
          lineTension: 3,
          borderColor: '#3181ED',
          borderWidth: 1,
          borderRadius: 2,
          barThickness: 8,
          // barPercentage: .5
        },
      ],
    }
  }

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          display: false
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          margin: -30,
          callback: (value, index, values) => `${ value } BYN`
        },
        grid: {
          drawBorder: false,
          borderDash: [4, 2]
        }
      }
    }
  };

  const { t } = useTranslation()
  const onDepositCardClick = (id) => {
    setPageMode('specific')
    setSpecificModeData(id)
  }
  const setRequestsContent = () => {
    if (isLoading) return <Loader/>
    if (!isLoading && !requestsSummary.length) return (<div className="mb-5">{ t('dashboard.deposits.empty') }</div>)
    if (!isLoading && requestsSummary.length) {
      return requestsSummary.map((el, index) => <DepositCard onClick={ () => onDepositCardClick(el.id) }
                                                             setPageMode={ setPageMode } key={ el.id }
                                                             data={ { ...el, index } }/>)
    }
  }

  return (
    <>
      { !isBankUser && <CCol className="mt-4 mb-3 d-flex justify-content-between align-items-stretch">
        <h4>{ t('deposits.default.title') }</h4>
        <Link to="/requests" className="text-decoration-none pe-2">{ t('watchAll') }</Link>
      </CCol> }
      { !isBankUser && <CRow className="d-flex flex-wrap">
        { setRequestsContent() }
      </CRow> }
      { isBankUser &&
      <CRow className="mb-3">
        <CCol xl={ 6 }>
          <div>
            <h4 className="mb-3">{ t('dashboard.deals.title') }</h4>
          </div>
          <CCard>
            <CCardBody>
              <div style={ { height: '290px' } }>
                { !!Object.keys(donutBankStatistics.totalRevenue).length &&
                <Doughnut data={ firstDoughnutData } options={ doughnutOptions } plugins={ doughnutPlugins }/> }
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="pt-4 pt-md-0" xl={ 6 }>
          <h4 className="mb-3">{ t('dashboard.TotalTurnover.title') }</h4>
          <CCard>
            <CCardBody>
              <div style={ { height: '290px' } }>
                { !!Object.keys(donutBankStatistics.totalRevenue).length &&
                <Doughnut data={ secondDoughnutData } options={ doughnutOptions } plugins={ doughnutSecondPlugins }/> }
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      }
      <h4>{ isBankUser ? t('circulation') : t('income') }</h4>
      <CCard>
        <CCardBody>
          <div style={ { height: '350px' } }>
            <Bar data={ data } options={ options }/>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default DashboardDefaultContentView
