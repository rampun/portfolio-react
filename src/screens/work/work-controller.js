import React from 'react'
import WorkView from './work-view'
// import { useParams } from 'react-router-dom'

const WorkController = () => {

  // let {slug} = useParams();
  /*****
   * make work detail api call here using {slug}
  *****/
  const work = 
    {
      'image': {
        'url': 'https://picsum.photos/400/300?random=1',
        'alt': 'Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text',
      },
      'gallery': 
      [
        {
          'url': 'https://picsum.photos/400/300?random=2',
          'alt': 'Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text',
        },
        {
          'url': 'https://picsum.photos/400/300?random=3',
          'alt': 'Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text',
        },
        {
          'url': 'https://picsum.photos/400/300?random=4',
          'alt': 'Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text',
        },
        {
          'url': 'https://picsum.photos/400/300?random=5',
          'alt': 'Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text',
        },
        {
          'url': 'https://picsum.photos/400/300?random=6',
          'alt': 'Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text',
        },
      ],
      'title': 'Work 1',
      'slug': 'work1',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'overview': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      'type': 'Food',
      'development': 'Frontend & Backend',
      'technology': 'Wordpress, Custom Theme, PHP, HTML, Woocommerce',
      'credit': 'Big Tech'
    };

  return <>
  {/* get the matching work here and send it to view */}
    <WorkView workSingle={work}/>
  </>
}

export default WorkController