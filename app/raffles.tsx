"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, Clock, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface RafflesProps {
  onWin: () => void
}

export function Raffles({ onWin }: RafflesProps) {
  const [activeRaffle, setActiveRaffle] = useState<string | null>(null)

  const handleEnterRaffle = (id: string) => {
    setActiveRaffle(id)
    onWin()
  }

  const handleBackToList = () => {
    setActiveRaffle(null)
  }

  if (activeRaffle) {
    return <RaffleDetail id={activeRaffle} onBack={handleBackToList} />
  }

  return (
    <div className="flex flex-col h-full">
      <header className="p-4 bg-purple-600 text-white">
        <h1 className="text-xl font-bold">Raffles & Giveaways</h1>
        <p className="text-sm opacity-90">Enter for a chance to win amazing prizes</p>
      </header>

      <Tabs defaultValue="active" className="flex-1 flex flex-col">
        <div className="px-4 pt-4">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="active">Active Raffles</TabsTrigger>
            <TabsTrigger value="entered">My Entries</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="active" className="flex-1 p-0 m-0 data-[state=active]:block">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
              <RaffleCard
                id="raffle1"
                title="$500 Shopping Spree"
                image="/placeholder.svg?height=150&width=400"
                endDate="2 days"
                entries={1243}
                maxEntries={2000}
                onEnter={handleEnterRaffle}
              />

              <RaffleCard
                id="raffle2"
                title="Weekend Getaway"
                image="/placeholder.svg?height=150&width=400"
                endDate="5 days"
                entries={876}
                maxEntries={1500}
                onEnter={handleEnterRaffle}
              />

              <RaffleCard
                id="raffle3"
                title="Tech Gadget Bundle"
                image="/placeholder.svg?height=150&width=400"
                endDate="1 week"
                entries={2156}
                maxEntries={3000}
                onEnter={handleEnterRaffle}
              />

              <RaffleCard
                id="raffle4"
                title="Luxury Dining Experience"
                image="/placeholder.svg?height=150&width=400"
                endDate="3 days"
                entries={543}
                maxEntries={1000}
                onEnter={handleEnterRaffle}
              />
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="entered" className="flex-1 p-0 m-0 data-[state=active]:block">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
              <RaffleCard
                id="raffle5"
                title="VIP Concert Tickets"
                image="/placeholder.svg?height=150&width=400"
                endDate="1 day"
                entries={1876}
                maxEntries={2000}
                onEnter={handleEnterRaffle}
                entered={true}
                entriesUsed={3}
              />

              <RaffleCard
                id="raffle6"
                title="Home Makeover"
                image="/placeholder.svg?height=150&width=400"
                endDate="4 days"
                entries={765}
                maxEntries={1200}
                onEnter={handleEnterRaffle}
                entered={true}
                entriesUsed={1}
              />
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface RaffleCardProps {
  id: string
  title: string
  image: string
  endDate: string
  entries: number
  maxEntries: number
  onEnter: (id: string) => void
  entered?: boolean
  entriesUsed?: number
}

function RaffleCard({
  id,
  title,
  image,
  endDate,
  entries,
  maxEntries,
  onEnter,
  entered = false,
  entriesUsed = 0,
}: RaffleCardProps) {
  const percentage = (entries / maxEntries) * 100

  return (
    <Card className="overflow-hidden rounded-xl border-none shadow-md">
      <CardContent className="p-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg">{title}</h3>
            <Badge className="bg-orange-500">
              <Clock className="h-3 w-3 mr-1" />
              {endDate}
            </Badge>
          </div>

          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span>{entries} entries</span>
              <span>{Math.round(percentage)}% full</span>
            </div>
            <Progress value={percentage} className="h-2 bg-gray-200" indicatorClassName="bg-purple-600" />
          </div>

          {entered ? (
            <div className="flex justify-between items-center">
              <div className="flex items-center text-green-600">
                <Ticket className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">
                  {entriesUsed} {entriesUsed === 1 ? "entry" : "entries"} used
                </span>
              </div>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
                onClick={() => onEnter(id)}
              >
                View Details
              </Button>
            </div>
          ) : (
            <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => onEnter(id)}>
              Enter Raffle
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

interface RaffleDetailProps {
  id: string
  onBack: () => void
}

function RaffleDetail({ id, onBack }: RaffleDetailProps) {
  const [entries, setEntries] = useState(1)

  const increaseEntries = () => {
    if (entries < 5) setEntries(entries + 1)
  }

  const decreaseEntries = () => {
    if (entries > 1) setEntries(entries - 1)
  }

  return (
    <div className="flex flex-col h-full">
      <header className="p-4 bg-purple-600 text-white flex items-center">
        <Button variant="ghost" size="icon" className="mr-2 text-white" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold">Raffle Details</h1>
      </header>

      <ScrollArea className="flex-1">
        <div className="p-4">
          <img
            src="/placeholder.svg?height=200&width=400"
            alt="Raffle Prize"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />

          <h2 className="text-xl font-bold mb-1">$500 Shopping Spree</h2>

          <div className="flex items-center text-sm text-gray-600 mb-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Drawing on June 30, 2025</span>
          </div>

          <div className="space-y-4">
            <Card className="rounded-xl border-none shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Prize Details</h3>
                <p className="text-sm text-gray-600">
                  Win a $500 shopping spree at any participating store! The winner will receive a digital gift card that
                  can be used online or in-store.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-none shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">How to Enter</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Use your loyalty points to enter this raffle. More entries = higher chance to win!
                </p>

                <div className="bg-purple-50 p-3 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Number of Entries</span>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={decreaseEntries}
                        disabled={entries <= 1}
                      >
                        -
                      </Button>
                      <span className="mx-3 font-bold">{entries}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={increaseEntries}
                        disabled={entries >= 5}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Cost per entry: 50 points</span>
                    <span className="font-medium">Total: {entries * 50} points</span>
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">Confirm Entries</Button>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-none shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Rules & Eligibility</h3>
                <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                  <li>Must be 18 years or older to participate</li>
                  <li>One winner will be randomly selected</li>
                  <li>Winner will be notified via email</li>
                  <li>Prize must be claimed within 7 days</li>
                  <li>No purchase necessary</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
