import React from 'react'
import { Link } from 'react-router-dom'
import Works from '../../assets/images/works.png'

const WorkTile = ({work}) => {

  return <>
    <div className='relative text-center'>
        <Link to={ '/work/'+work.slug}>
        <img className='w-full' src={Works} alt={work.image.alt}/>
        </Link>
        <Link to={ '/work/'+work.slug}>
          <p className='absolute top-1/4 left-1/2 -translate-y-1/2 -translate-x-1/2 w-11/12 text-lg dark:text-white'>{work.title}</p>
        </Link>
    </div>

    </>
}

export default WorkTile