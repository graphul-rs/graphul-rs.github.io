import React from 'react'
import MagicWand from '@site/static/img/magic-wand.svg'
import Extensible from '@site/static/img/extensible.svg'
import Robot from '@site/static/img/robot-free.svg'
import Sun from '@site/static/img/sun.svg'
import FeatureItem from '@site/src/models/FeatureItem';

const FeatureCardList: FeatureItem[] = [
    {
      title: 'EXTENSIBLE',
      Svg: Extensible,
      description: (
        <>
          Gives you true flexibility by allowing use of any other libraries thanks to modular architecture.
        </>
      ),
    },
    {
      title: "Easy To Use",
      Svg: Robot,
      description: (<>Simple, intuitive APIs make Graphul approachable, no matter your background.</>)
    },
    {
      title: "Boilerplate Free",
      Svg: Sun,
      description: (<>Spend your time writing code that really matters, and let Graphul generate the rest.</>)
    },
    {
      title: 'VERSATILE',
      Svg: MagicWand,
      description: (
        <>
          An adaptable ecosystem that is a fully-fledged backbone for all kinds of server-side applications.
        </>
      ),
    }
  ];


  export default FeatureCardList;