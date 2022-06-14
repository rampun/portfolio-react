import React from 'react'
import HomeView from './home-view'

const HomeController = () => {


  const works = [
    {
      'image': {
        'url': 'https://picsum.photos/400/300?random=1',
        'alt': 'Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text',
      },
      'title': 'Lorem Ipsum 1',
      'slug': 'work1',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
    },
    {
      'image': {
        'url': 'https://picsum.photos/400/300?random=2',
        'alt': 'Lorem Ipsum is simply dummy text 2',
      },
      'title': 'Lorem Ipsum 2',
      'slug': 'work2',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
    },
    {
      'image': {
        'url': 'https://picsum.photos/400/300?random=3',
        'alt': 'Lorem Ipsum is simply dummy text 3',
      },
      'title': 'Lorem Ipsum 3',
      'slug': 'work3',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
    },
    {
      'image': {
        'url': 'https://picsum.photos/400/300?random=4',
        'alt': 'Lorem Ipsum is simply dummy text 4',
      },
      'title': 'Lorem Ipsum 4',
      'slug': 'work4',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
    },
    {
      'image': {
        'url': 'https://picsum.photos/400/300?random=5',
        'alt': 'Lorem Ipsum is simply dummy text 5',
      },
      'title': 'Lorem Ipsum 5',
      'slug': 'work5',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
    },
    {
      'image': {
        'url': 'https://picsum.photos/400/300?random=6',
        'alt': 'Lorem Ipsum is simply dummy text 6',
      },
      'title': 'Lorem Ipsum 6',
      'slug': 'work6',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
    }
  ];



  return (
    <HomeView works= {works}/>
  )
}

export default HomeController