"use client"

import { useState } from "react"
import { Bell, ChevronRight, Star, Ticket } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { NotificationCard } from "./notification-card"

interface HomeProps {
  onWin: () => void
}

export function Home({ onWin }: HomeProps) {
  const [showNotification, setShowNotification] = useState(false)

  const toggleNotification = () => {
    setShowNotification(!showNotification)
  }

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between p-4 bg-purple-600 text-white">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-bold">Hi, Jessica!</h1>
            <div className="flex items-center text-xs">
              <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
              <span>1,250 points</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="relative" onClick={toggleNotification}>
          <Bell className="h-6 w-6" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-orange-500">
            3
          </Badge>
        </Button>
      </header>

      {showNotification && (
        <div className="absolute top-16 right-4 z-10 w-[90%] max-w-[300px]">
          <NotificationCard onClose={toggleNotification} />
        </div>
      )}

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold">Featured Promotions</h2>
              <Button variant="ghost" size="sm" className="text-purple-600 p-0 h-auto">
                See all <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="space-y-3">
              <Card className="overflow-hidden rounded-xl border-none shadow-md">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg?height=150&width=400"
                    alt="Summer Sale"
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-bold">Summer Mega Sale</h3>
                    <p className="text-sm text-gray-600">Get up to 50% off on selected items</p>
                    <Button className="mt-2 w-full bg-purple-600 hover:bg-purple-700" onClick={onWin}>
                      Shop Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-xl border-none shadow-md">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg?height=150&width=400"
                    alt="Weekly Raffle"
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">Weekly Raffle</h3>
                      <Badge className="bg-orange-500">Ends in 2 days</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Win a $500 shopping spree!</p>
                    <Button className="mt-2 w-full bg-orange-500 hover:bg-orange-600" onClick={onWin}>
                      Enter Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Your Loyalty Status</h2>
            <Card className="rounded-xl border-none shadow-md">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Silver Member</span>
                  <span className="text-sm font-bold">1,250 / 2,000</span>
                </div>
                <Progress value={62} className="h-2 bg-gray-200" indicatorClassName="bg-purple-600" />
                <p className="text-xs text-gray-500 mt-2">750 more points to reach Gold status</p>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-1">
                      <Star className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-xs">5 Rewards</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-1">
                      <Ticket className="h-6 w-6 text-orange-500" />
                    </div>
                    <span className="text-xs">3 Raffles</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                      <Badge className="h-6 w-6 text-blue-500 bg-transparent p-0" />
                    </div>
                    <span className="text-xs">2 Badges</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </ScrollArea>
    </div>
  )
}
