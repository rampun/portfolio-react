import React from 'react'
import Layout from '../../components/Layout/Layout'
import WorkTile from '../../components/WorkTile/WorkTile'
import {Helmet} from 'react-helmet'

const WorksView = ({works}) => {
  return <>
  <Layout>
  
        <Helmet>
            <meta charSet="utf-8" />
            <title>Works</title>
        </Helmet>

  <div className='max-w-5xl mx-auto grid px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6'>
    {
      works.map((work, index)=> (
        <WorkTile work={work} key={index}/>
      ))
    }
    </div>
  </Layout>
  </>
}

export default WorksView