import React from 'react'
import ModifyButtons from './ModifyButtons'

export interface SimpleTitleTextProps {
  title: string
  text: string
}

const SimpleTitleText: React.FC<SimpleTitleTextProps> = ({ title, text }) => {
  const containerClass =
    'flex flex-col w-full lg:py-4 lg:px-[18px] border-gray border-1 rounded-[10px] py-5 px-6 xl:p-5 gap-y-4 lg:gap-y- hover:shadow-primary bg-white shadow-sm'

  const headerClass = 'text-black font-primary leading-6 text-[1rem] font-semibold'

  const paragraphClass = 'text-fontgray font-primary text-[13px]'

  return (
    <div style={{ border: '1px solid #EAEAEA' }} className={containerClass}>
      <h6 className={headerClass}>{title}</h6>
      <p className={paragraphClass}>{text}</p>
      <ModifyButtons />
    </div>
  )
}

export default SimpleTitleText
