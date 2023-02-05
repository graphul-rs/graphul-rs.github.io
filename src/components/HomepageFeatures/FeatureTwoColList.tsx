import React from 'react'

import FeatureItem from "@site/src/models/FeatureItem";
import Ecofriendly from '@site/static/img/ecofriendly.svg'
import Performance from '@site/static/img/performance.svg'

const FeatureTwoCols: FeatureItem[] = [
    {
      title: 'Low Memory Footprint',
      Svg: Ecofriendly,
      description: (
        <>
          Graphul's low memory footprint without a GC allows you to implement features without worrying about how much memory your application will use. This allows you to focus on your application and its business logic, rather than technical particularities.
        </>
      ),
    },
    {
      title: 'Rapid Programming',
      Svg: Performance,
      description: (
        <>
          Take your idea and turn it into reality in no time! Thanks to the well-designed and easy-to-learn API, you can develop your application in record speed (especially if you're coming from an Express.js background).
        </>
      ),
    }
  ];

  export default FeatureTwoCols;