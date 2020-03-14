import React, { FC } from 'react';
import styles from './index.module.less';
import ProjectIndexItem, { ProjectInfoProps } from './ProjectIndexItem';

interface IProps {}

const COMMON_STATIC_PATH = '/static/images/projectIndex/';
const PROJECT_INFO: ProjectInfoProps[] = [
  {
    title: 'Stringboard',
    desc: ['an input tool and', 'an electronic instrument'],
    tags: ['Integrated product development'],
    href: 'string-board',
    images: [
      {
        src: COMMON_STATIC_PATH + '1.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '1.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '1-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '1-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'String board'
      },
      {
        src: COMMON_STATIC_PATH + '2.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '2.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '2-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '2-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'String board'
      }
    ]
  },
  {
    title: 'EndlessForm',
    href: 'endless-form',
    desc: ['a digital creator and designer', 'based on ACO algorithm study'],
    tags: ['Creative Digital Product'],
    images: [
      {
        src: COMMON_STATIC_PATH + '3.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '3.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '3-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '3-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'String board'
      },
      {
        src: COMMON_STATIC_PATH + '4.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '4.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '4-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '4-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'Endless Form'
      }
    ]
  },
  {
    title: 'EMO',
    href: 'emo',
    desc: ['a programming education robot and', 'an online education platform'],
    tags: ['Integrated product development'],
    images: [
      {
        src: COMMON_STATIC_PATH + '5.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '5.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '5-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '5-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'EMO'
      },
      {
        src: COMMON_STATIC_PATH + '6.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '6.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '6-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '6-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'EMO'
      }
    ]
  },
  {
    title: 'xixi4rhino',
    href: 'xixi4rhino',
    desc: [
      'a website for rhino protection',
      'by impacting potential consumers directly'
    ],
    tags: ['Sustainable Consciousness'],
    images: [
      {
        src: COMMON_STATIC_PATH + '7.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '7.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '7-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '7-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'String board'
      },
      {
        src: COMMON_STATIC_PATH + '8.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '8.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '8-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '8-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'String board'
      }
    ]
  },
  {
    title: 'Flyro',
    href: 'flyro',
    desc: ['an inspiring spinning and', 'a mobile free zone'],
    tags: ['Integrated Product development'],
    images: [
      {
        src: COMMON_STATIC_PATH + '9.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '9.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '9-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '9-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'Flyro'
      },
      {
        src: COMMON_STATIC_PATH + '10.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '10.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '10-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '10-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'Flyro'
      }
    ]
  },
  {
    title: 'Dual-layer Solution',
    href: 'dual-layer',
    desc: ['a solution for closing the loop', 'on plastic food packaging'],
    tags: ['Sustainable Consciousness'],
    images: [
      {
        src: COMMON_STATIC_PATH + '11.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '11.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '11-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '11-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'String board'
      },
      {
        src: COMMON_STATIC_PATH + '12.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '12.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '12-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '12-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'String board'
      }
    ]
  },
  {
    title: 'Bamboo Stool',
    href: 'bamboo',
    desc: ['an exploration of bamboo craft', 'in modern aesthetic'],
    tags: ['Integrated product development'],
    images: [
      {
        src: COMMON_STATIC_PATH + '13.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '13.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '13-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '13-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'String board'
      },
      {
        src: COMMON_STATIC_PATH + '14.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '14.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '14-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '14-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'String board'
      }
    ]
  },
  {
    title: 'Internship Work',
    href: 'internship',
    desc: [
      'as UX/UI Design Intern as Capgemini',
      'and Creative Graphic Designer at Neuni Group'
    ],
    tags: [''],
    images: [
      {
        src: COMMON_STATIC_PATH + '15.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '15.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '15-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '15-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'Internship Work'
      },
      {
        src: COMMON_STATIC_PATH + '16.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '16.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '16-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '16-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'Internship Work'
      }
    ]
  },
  {
    title: 'Cultural Jewelry',
    href: 'cultural-jewelry',
    desc: [
      'a set of jewelry design inspired by',
      'Chinese Bronze in Shanghai Museum'
    ],
    tags: ['Integrated product development'],
    images: [
      {
        src: COMMON_STATIC_PATH + '17.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '17.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '17-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '17-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'String board'
      },
      {
        src: COMMON_STATIC_PATH + '18.jpg',
        sources: [
          {
            src: COMMON_STATIC_PATH + '18.webp',
            type: 'image/webp'
          }
        ],
        preview_src: COMMON_STATIC_PATH + '18-preview.jpg',
        preview_sources: [
          {
            src: COMMON_STATIC_PATH + '18-preview.webp',
            type: 'image/webp'
          }
        ],
        alt: 'String board'
      }
    ]
  }
].map(p => {
  (p as ProjectInfoProps).mainColor = '#000';
  return p as ProjectInfoProps;
});

const Projects: FC<IProps> = (props: IProps) => {
  return (
    <div className={styles['main']}>
      {/*<h1>Under Construction</h1>*/}
      {/*<h2 onClick={()=>Router.push('/projects/dual-layer-solution')}>Click here to see One of My Project</h2>*/}
      {}
      {PROJECT_INFO.map(info => (
        <ProjectIndexItem {...info} />
      ))}
    </div>
  );
};

export default Projects;
