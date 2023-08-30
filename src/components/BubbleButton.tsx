import { Children, ComponentProps, ReactNode } from "react";

export interface BubbleButtonProps extends ComponentProps<'button'> {
    children: ReactNode
}

export function BubbleButton(props: BubbleButtonProps) {
    return (
        <button className="p-2 text-zinc-600 text-sm flex gap-1.5 items-center font-medium leading-none hover:text-zinc-450 hover:bg-zinc-200 data[active=true]:text-violet-400"{...props}
        
        />
        
)
}