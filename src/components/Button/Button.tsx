import React, {FC} from 'react'

interface ButtonProps {
  label: string
  variant?: 'default' | 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = (args: ButtonProps) => {
  const variantClasses: Record<ButtonProps['variant'], string> = {
    default:
      'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 focus:outline-none',
    primary:
      'text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none',
    secondary:
      'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5',
  }

  return (
    <button
      type="button"
      className={variantClasses[args.variant]}>
      {args.label}
    </button>
  )
}

export default Button
