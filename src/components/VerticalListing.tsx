import React from 'react'
import { FiRefreshCcw } from 'react-icons/fi'
import SimpleTitleText from './SimpleTitleText'

type VerticalListingProps = {
  data: { title: string; text: string }[]
}

const VerticalListing: React.FC<VerticalListingProps> = ({ data }) => {
  const container = 'flex flex-col gap-y-4 lg:gap-y-3'

  const circularButtonClass =
    'h-6 w-6 rounded-full hover:border-primary bg-white border border-gray flex justify-center items-center p-0 text-gray-500'

  const iconClass = 'w-4 text-gray lg:w-3 lg:h-3 h-3'

  const input =
    'p-3 text-[1rem] font-primary rounded-[10px] text-[#151515] border-lightgray shadow-sm leading-6 font-semibold border'

  const paragraph = 'font-primary font-medium text-[15px] text-[#A8A8A8]'

  const header = 'text-fontgray font-primary font-medium text-[14px] m-0 p-0'

  return (
    <div className={container}>
      <div className="flex justify-between">
        <p className={header}>Select a title to continue</p>

        {/* Refresh button */}
        <button className={circularButtonClass}>
          <FiRefreshCcw className={iconClass} />
        </button>
      </div>
      <input type="text" placeholder="Enter your custom title" className={input} />
      <div className="border-b border-[#F4F4F4]"></div>
      <p className={paragraph}>Suggested by AI</p>
      <div className={container}>
        {/* Render each child component based on the data */}
        {data.map((item, index) => (
          <SimpleTitleText key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default VerticalListing
