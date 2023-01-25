import { Link } from 'react-router-dom';
import './Dashboard.scss'
import { Row, Col } from 'react-bootstrap';
import SideBar from '../../components/sidebar/Sidebar';
import { BsArrowUp } from 'react-icons/bs';
import ChartCard from '../../components/chartCard/ChartCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { getBalance } from '../redux/actions/profile';
import nominalFormat from '../../helpers/nominalFormat';

const Dashboard = () => {



  return (
    <>
    <div className=''>

    </div>
      <main className=''>
        <Row className=''>
          <aside className='col-lg-4'>
            <SideBar />
          </aside>
          <section className='col-lg-8'>
            <div className='card p-4 bg-primary'>
              <Row className='text-dark'>
                <Col xs={12} md={6} className='d-flex justify-content-between flex-column'>
                  <div className='text-light'>Balance</div>
                  <h2 className='text-light'>Rp {nominalFormat}</h2>
                  
                </Col>
                <Col xs={12} md={6} className='d-flex justify-content-end'>
                  <div className='d-flex flex-column'>
                    <Link href='/transfer' className=' d-flex flex-row align-items-center my-2'>
                      <a className='text-decoration-none text-white my-2 py-3 px-5 bg-secondary btn'>
                        <BsArrowUp className='fs-5 me-2 text-dark'/>
                        <span className='text-dark'>Transfer</span>
                      </a>
                    </Link>
                    <Link href='/top-up' className=' d-flex flex-row align-items-center my-2'>
                      <a className='text-decoration-none text-white my-2 py-3 px-5 bg-secondary btn'>
                        <BsArrowUp className='fs-5 me-2 text-dark'/>
                        <span className='text-dark'>Top Up</span>
                      </a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col xs={12} lg={6} className='mt-3'>
                <div className='card bg-white py-3 h-100'>
                  <ChartCard dataChart={[120, 50, 70, 80, 65, 100, 90]} labels={['Sat','Sun','Mon','Tue', 'Wed', 'Thu', 'Fri']} income={1800000} expense={1200000} />
                </div>
              </Col>
              <Col xs={12} lg={6} className='mt-3'>
                <div className='card bg-white p-3 h-100'>
                  <h4>Transaction History</h4>
                </div>
              </Col>
            </Row>
          </section>
        </Row>
      </main>
    </>
  )
}

export default Dashboard
