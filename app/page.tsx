"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home } from "./home"
import { Raffles } from "./raffles"
import { Loyalty } from "./loyalty"
import { Rewards } from "./rewards"
import { Gift, HomeIcon, Ticket, Trophy } from "lucide-react"
import { ConfettiEffect } from "./confetti-effect"

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false)

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  return (
    <div className="flex flex-col h-[844px] max-w-md mx-auto overflow-hidden bg-gray-50 relative">
      {showConfetti && <ConfettiEffect />}

      <Tabs defaultValue="home" className="flex flex-col h-full">
        <TabsContent
          value="home"
          className="flex-1 overflow-auto p-0 m-0 data-[state=active]:flex data-[state=active]:flex-col"
        >
          <Home onWin={triggerConfetti} />
        </TabsContent>

        <TabsContent
          value="raffles"
          className="flex-1 overflow-auto p-0 m-0 data-[state=active]:flex data-[state=active]:flex-col"
        >
          <Raffles onWin={triggerConfetti} />
        </TabsContent>

        <TabsContent
          value="loyalty"
          className="flex-1 overflow-auto p-0 m-0 data-[state=active]:flex data-[state=active]:flex-col"
        >
          <Loyalty />
        </TabsContent>

        <TabsContent
          value="rewards"
          className="flex-1 overflow-auto p-0 m-0 data-[state=active]:flex data-[state=active]:flex-col"
        >
          <Rewards />
        </TabsContent>

        <TabsList className="fixed bottom-0 w-full h-16 grid grid-cols-4 bg-white border-t">
          <TabsTrigger
            value="home"
            className="flex flex-col items-center justify-center data-[state=active]:text-purple-600"
          >
            <HomeIcon className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </TabsTrigger>
          <TabsTrigger
            value="raffles"
            className="flex flex-col items-center justify-center data-[state=active]:text-purple-600"
          >
            <Ticket className="h-5 w-5" />
            <span className="text-xs mt-1">Raffles</span>
          </TabsTrigger>
          <TabsTrigger
            value="loyalty"
            className="flex flex-col items-center justify-center data-[state=active]:text-purple-600"
          >
            <Trophy className="h-5 w-5" />
            <span className="text-xs mt-1">Loyalty</span>
          </TabsTrigger>
          <TabsTrigger
            value="rewards"
            className="flex flex-col items-center justify-center data-[state=active]:text-purple-600"
          >
            <Gift className="h-5 w-5" />
            <span className="text-xs mt-1">Rewards</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
