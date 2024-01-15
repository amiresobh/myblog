'use client'
import { useState } from "react";
import { ConnectPopoverContext } from "./ConnectPopoverContext";

export default function Providers({children}:{children: React.ReactNode}){
    const [isConnectPopoverOpen, setIsConnectPopoverOpen] = useState(false)
    return(
        <ConnectPopoverContext.Provider value={{isConnectPopoverOpen,setIsConnectPopoverOpen}}>
            {children}
        </ConnectPopoverContext.Provider>
    )
}