import React from 'react'
import Layout  from '../../components/Layout/Layout';
import WorkTile from '../../components/WorkTile/WorkTile';
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'

const HomeView = ({works}) => {
      return <>
       <Layout>

        <Helmet>
            <meta charSet="utf-8" />
            <title>Home - Portfolio Site</title>
        </Helmet>
          {/* Brief intro */}
          <section className='px-4'>
            <div className='max-w-2xl mx-auto flex flex-col space-y-2 items-center mt-6 md:mt-14'>
              <h1 className='dark:text-white text-center'>
                Hello, my name is John Smith<span className='text-green'>.</span>
              </h1>
              <p className='dark:text-white'>
                I'm a Full-Stack Web Developer from Country
              </p>
            </div>
          </section>
    
          {/* Featured work */}
          <section className='px-4'>
            <div className='max-w-2xl mx-auto flex justify-center mt-20'>
              <h2 className='dark:text-white'>Featured &nbsp;<span className="highlight z-10">Work</span></h2>
            </div>
            <div className='max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6'>
              {
                works.map((work,idx) => (
                  <WorkTile work={work} key={idx}/>
                  )
                )
              }
            </div>
            <div className='max-w-2xl mx-auto flex justify-center mt-16'>
              <Link to="/works" className="transparent_button dark:text-white dark:border-white">
              view all
                </Link>
            </div>
          </section>
        </Layout>
      </>
}

export default HomeView