import * as React from 'react';
import styles from './index.module.less';
import Banner from './Banner';
import Contact from './Contact';
import Phrase from '../common/Pharse';
import { IPharseInfo } from '../common/PharseInformation';

interface IMyInfo {
  info: IPharseInfo[];
  title?: string;
  bottomGap?: string;
}
const myInfo: IMyInfo[] = [
  {
    title: 'EDUCATION',
    info: [
      {
        title: [
          'Industrial Design, College of Design and Innovation, Tongji University',
          'Candidate for Bachelor of Engineering | Cumulative GPA: 4.46'
        ],
        time: ['09.2015 - 06.2020']
      }
    ]
  },
  {
    title: 'DESIGN INTERNSHIP EXPERIENCE',
    info: [
      {
        title: ['Capgemini'],
        subtitle: ['UX/UI Design Intern'],
        desc: [
          'Co-created with clients to identify the opportunity and develop the service through design strategy',
          'Collaborated with front-end engineers to improve user interface of digital products'
        ],
        time: ['11.2019 - Present']
      },
      {
        title: ['Volvo Car Asia Pacific'],
        subtitle: ['Design Color & Material Intern'],
        desc: [
          'Completed benchmark and trend research on car exterior and interior color & material',
          'Created pattern and color propasals for interior deco and leather monthly'
        ],
        time: ['02.2019 - 07.2019']
      },
      {
        title: ['Neuni Group, Shanghai'],
        subtitle: ['Creative and Visual Design Intern'],
        desc: [
          'Proposed creative plans for products and installations adopting new materials',
          'Led visual design for local exhibitions'
        ],
        time: ['05.2018 - 08.2018']
      }
    ]
  },
  {
    title: 'RESEARCH EXPERIENCE',
    info: [
      {
        title: [
          '“Next Mobility” Laboratory, College of Design and Innovation, Tongji University'
        ],
        subtitle: ['Researcher'],
        desc: [
          `Composed paper on “Industrial Design Knowledge for Additive Manufacturing”`,
          `Composed paper on “Study on the Pedestrian Signage System in International Megacities”`
        ],
        time: ['08.2018 - 12.2018']
      }
    ]
  },
  {
    title: 'COMPETITION EXPERIENCE',
    info: [
      {
        title: [
          'Closing the Loop on Food Packaging | ExxonMobil Challenge Reality Hackathon'
        ],
        subtitle: ['Gold Prize'],
        time: ['2019']
      },
      {
        title: [
          'EMO Robot Product Design | Shanghai Industry Design Competition'
        ],
        subtitle: ['First Prize'],
        time: ['2018']
      },
      {
        title: [
          'Bamboo Stool Design | The Second ‘Think Youth’ Shanghai Design Competition '
        ],
        subtitle: ['Second Prize'],
        time: ['2017']
      },
      {
        title: [
          'Unmanned Aerial Vehicle Design | Honeywell Internal Competition'
        ],
        subtitle: ['Third Prize'],
        time: ['2017']
      },
      {
        title: [
          '15% Academic Achievement Scholarship | College of Design and Innovation'
        ],
        time: ['2017']
      }
    ],
    // 由于上下margin 重叠的规则，最后的Gap不会影响到存在大于 42 marginTop的下一个元素的margin展示，比如下一个是80，那么结果还是 42 & 80 = 80 而不会变成 122
    bottomGap: '42rem'
  },
  {
    title: 'MANAGEMENT EXPERIENCE',
    info: [
      {
        title: ['The First China Industry Design Exhibition, Wuhan, China'],
        subtitle: ['Exhibition Designer for Tongji University’s field'],
        desc: [
          'Planned exhibition design, including showing forms and lighting design',
          'Arranged exhibits’ collection and logistics from Shanghai to Wuhan'
        ],
        time: ['11.2017']
      },
      {
        title: ['Tongji Design Week'],
        subtitle: ['Best Performance Core Volunteer'],
        desc: [
          'Communicated with 10 designers and artists to align exhibition plans',
          'Coordinated with other volunteers to meet requests on space and activities '
        ],
        time: ['10.2016 & 2017']
      },
      {
        title: ['Tongji University Student Union'],
        subtitle: ['Deputy Minister of Human Resources Department'],
        desc: [
          'Ran department to operate 12 events for more than 400 student union members',
          'Met with administrators to address development of internal regulations weekly'
        ],
        time: ['09.2015 - 08.2016']
      }
    ]
  }
];

const Profile: React.FC<{}> = () => {
  return (
    <div style={{
      width: '1600rem'
    }}>
      <Banner />
      <Contact />
      {myInfo.map(info => (
        <Phrase info={info.info} title={info.title} key={info.title}/>
      ))}
    </div>
  );
};

export default Profile;
