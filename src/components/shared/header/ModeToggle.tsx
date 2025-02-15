"use client"

import * as React from "react"

import { useTheme } from "next-themes"



import { Switch } from "@/components/ui/switch"

export function ModeToggle() {
  const { theme,setTheme } = useTheme()


  return (

    <div className="flex items-center space-x-2">
    <Switch onClick={()=>setTheme(theme=== 'dark'? 'light':'dark')}/>
   
  </div>

  )
}