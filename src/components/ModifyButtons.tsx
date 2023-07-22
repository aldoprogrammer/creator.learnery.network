import { FiRefreshCcw } from 'react-icons/fi'
import { PiPencilSimpleLineThin, PiTrashLight } from 'react-icons/pi'

const ModifyButtons = () => {
  const buttonContainerClass = 'flex items-start gap-x-3 lg:gap-x-2'

  const circularButtonClass =
    'h-7 w-7 rounded-full hover:border-primary bg-white border border-gray flex justify-center items-center p-0 text-gray-500'

  const iconClass = 'w-5 text-gray lg:w-4 lg:h-4 h-5'

  return (
    <div className={buttonContainerClass}>
      <button className={circularButtonClass}>
        <FiRefreshCcw className={iconClass} />
      </button>
      <button className={circularButtonClass}>
        <PiPencilSimpleLineThin className={iconClass} />
      </button>
      <button className={circularButtonClass}>
        <PiTrashLight className={iconClass} />
      </button>
    </div>
  )
}

export default ModifyButtons
