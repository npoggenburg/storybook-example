import {Decorator} from '@storybook/react'
import {Story} from "@storybook/blocks";

export const withGrid = (Story) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div>
                <Story/>
            </div>
        </div>
    )
}