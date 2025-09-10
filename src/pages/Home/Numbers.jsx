import React from 'react'
import LiquidEther from '../../components/aurora/LiquidEther'

function Numbers() {
  return (
    <div className='section'>
       <div className=" pointer-events-none absolute inset-0 z-0">
        <LiquidEther
          colors={["#3d4699", "#5d6fa1", "#769cb6"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.65}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={1.2}
          takeoverDuration={0.25}
          autoResumeDelay={500}
          autoRampDuration={0.6}
          sideBias={0.8}
          emitCount={5}
          emitRadius={0.12}
        />
      </div>  
      <div className='relative mx-auto h-full z-10 w-6/7 flex items-center flex-col justify-center'>

      </div>
    </div>
  )
}

export default Numbers