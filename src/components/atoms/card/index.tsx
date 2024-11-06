import * as React from 'react'


type Props = {
    children?: React.ReactNode,
    rowSpan?: number,
}

const Card = (props: Props) => (
    <div className={`relative max-lg:row-start-${props.rowSpan} lg:row-start-${props.rowSpan}`}>
        <div className="absolute inset-px rounded-lg bg-white "></div>
        <div className="relative flex h-full flex-col overflow-hidden">
            <div className="px-8 pb-3 pt-4 sm:px-10 sm:pb-0 sm:pt-4">
                {props.children}
            </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
    </div>
)

Card.defaultProps = {
    children: '',
    rowSpan: 1,
}

export default Card
