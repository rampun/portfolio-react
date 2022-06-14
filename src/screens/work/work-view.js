import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import {Helmet} from 'react-helmet'

const WorkView = ({workSingle}) => {


    console.log(workSingle)
  return <>
  <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{workSingle.title}</title>
        </Helmet>
      <div className='max-w-7xl m-auto px-4'>
          <div className=''>
              <Link to='/works'> Back to Works</Link>
          </div>
          <div className='text-left md:text-center mt-8 max-w-xl m-auto'>
            <h2>{workSingle.title}</h2>
            <p className='mt-2'>{workSingle.description}</p>
          </div>

          <div className='flex gap-10 my-8 md:my-16'>
              <div className='w-full max-w-5xl m-auto flex flex-col md:flex-row gap-16'>
                  <div className='w-full md:w-8/12'>
                    <p>{workSingle.overview}</p>
                  </div>
                  <div className='w-full md:w-4/12'>
                      <div className='border border-grey p-8'>
                          <div className='py-6 pt-0 border-b border-grey'>
                          <h6 className='dark:text-white'>Type</h6>
                          <p>{workSingle.type}</p>
                          </div>
                          <div className='py-6  border-b border-grey'>
                          <h6 className='dark:text-white'>Development</h6>
                          <p>{workSingle.development}</p>
                          </div>
                          <div className='py-6  border-b border-grey'>
                          <h6 className='dark:text-white'>Technology</h6>
                          <p>{workSingle.technology}</p>
                          </div>
                          <div className='py-6 pb-0'>
                          <h6 className='dark:text-white'>Credit</h6>
                          <p>{workSingle.credit}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </Layout>
  </>
}

export default WorkView