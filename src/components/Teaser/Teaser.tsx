import React, {FC} from 'react'
import Button from '../Button/Button'

interface TeaserProps {
  image?: string
  title: string
  content: string
}

const Teaser: FC<TeaserProps> = (args: TeaserProps) => {
  return (
    <div className="flex flex-col h-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <img
          className="rounded-t-lg w-full"
          src={args.image ? args.image : 'https://placehold.co/600x400'}
          alt="Teaser Image"
        />
      </a>
      <div className="p-5 flex-grow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {args.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {args.content}
        </p>
      </div>
        <div className="p-5 pt-0">
            <Button
                label={'Read more'}
                variant={'primary'}
            />
        </div>
    </div>
  )
}

export default Teaser
