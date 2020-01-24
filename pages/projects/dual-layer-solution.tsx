import React, { FC } from 'react';
import styles from './dual-layer-solution.less';
import ReactFullpage from '@fullpage/react-fullpage';
import AutoBackGroundColorSliderPage from '../../components/Projects/AutoBackGroundColorSliderPage';
interface IProps {}

const DualLayerSolution: FC<IProps> = (props: IProps) => {
  return (
    <div className={styles['solution-layout']}>
      <ReactFullpage //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        navigation={true}
        scrollingSpeed={600} /* Options here */
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <AutoBackGroundColorSliderPage
                preview_src={'/static/images/dualLayerSolution/1-preview.jpg'}
                src={'/static/images/dualLayerSolution/1.jpg'}
                alt={'slide1'}
              />
              <AutoBackGroundColorSliderPage
                preview_src={'/static/images/dualLayerSolution/2-preview.jpg'}
                src={'/static/images/dualLayerSolution/2.jpg'}
                alt={'slide2'}
              />
              <AutoBackGroundColorSliderPage
                preview_src={'/static/images/dualLayerSolution/3-preview.jpg'}
                src={'/static/images/dualLayerSolution/3.jpg'}
                alt={'slide3'}
              />
              <AutoBackGroundColorSliderPage
                preview_src={'/static/images/dualLayerSolution/4-preview.jpg'}
                src={'/static/images/dualLayerSolution/4.jpg'}
                alt={'slide4'}
              />
              <AutoBackGroundColorSliderPage
                preview_src={'/static/images/dualLayerSolution/5-preview.jpg'}
                src={'/static/images/dualLayerSolution/5.jpg'}
                alt={'slide5'}
              />
              <AutoBackGroundColorSliderPage
                preview_src={'/static/images/dualLayerSolution/6-preview.jpg'}
                src={'/static/images/dualLayerSolution/6.jpg'}
                alt={'slide6'}
              />
              <AutoBackGroundColorSliderPage
                preview_src={'/static/images/dualLayerSolution/7-preview.jpg'}
                src={'/static/images/dualLayerSolution/7.jpg'}
                alt={'slide7'}
              />
              <AutoBackGroundColorSliderPage
                preview_src={'/static/images/dualLayerSolution/8-preview.jpg'}
                src={'/static/images/dualLayerSolution/8.jpg'}
                alt={'slide8'}
              />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default DualLayerSolution;
