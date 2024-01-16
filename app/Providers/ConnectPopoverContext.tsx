import { createContext } from "react";

interface IConnectPopoverContext {
    isConnectPopoverOpen: boolean
    setIsConnectPopoverOpen: (value: boolean) => void
}

export const ConnectPopoverContext = createContext<IConnectPopoverContext>({isConnectPopoverOpen: false, setIsConnectPopoverOpen: ()=> false})

