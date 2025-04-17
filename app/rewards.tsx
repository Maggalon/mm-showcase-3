import { ChevronRight, Gift, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Rewards() {
  return (
    <div className="flex flex-col h-full">
      <header className="p-4 bg-purple-600 text-white">
        <h1 className="text-xl font-bold">Rewards Catalog</h1>
        <p className="text-sm opacity-90">Redeem your points for exciting rewards</p>
      </header>

      <div className="p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search rewards..." className="pl-9 bg-gray-100 border-none" />
        </div>

        <Tabs defaultValue="all" className="mb-4">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="exclusive">Exclusive</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold">Featured Rewards</h2>
              <Button variant="ghost" size="sm" className="text-purple-600 p-0 h-auto">
                See all <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="space-y-3">
              <RewardCard
                title="$25 Gift Card"
                image="/placeholder.svg?height=150&width=400"
                points={1000}
                category="Gift Cards"
                isExclusive={true}
              />

              <RewardCard
                title="Free Movie Tickets"
                image="/placeholder.svg?height=150&width=400"
                points={750}
                category="Entertainment"
                isNew={true}
              />
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold">Popular Rewards</h2>
              <Button variant="ghost" size="sm" className="text-purple-600 p-0 h-auto">
                See all <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="space-y-3">
              <RewardCard
                title="Free Coffee"
                image="/placeholder.svg?height=150&width=400"
                points={200}
                category="Food & Drink"
              />

              <RewardCard
                title="10% Off Next Purchase"
                image="/placeholder.svg?height=150&width=400"
                points={500}
                category="Discounts"
              />

              <RewardCard
                title="Premium Subscription"
                image="/placeholder.svg?height=150&width=400"
                points={1500}
                category="Digital"
                isExclusive={true}
              />
            </div>
          </section>
        </div>
      </ScrollArea>
    </div>
  )
}

interface RewardCardProps {
  title: string
  image: string
  points: number
  category: string
  isNew?: boolean
  isExclusive?: boolean
}

function RewardCard({ title, image, points, category, isNew, isExclusive }: RewardCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl border-none shadow-md">
      <CardContent className="p-0">
        <div className="relative">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-32 object-cover" />
          {isNew && <Badge className="absolute top-2 left-2 bg-green-500">New</Badge>}
          {isExclusive && <Badge className="absolute top-2 left-2 bg-orange-500">Exclusive</Badge>}
        </div>
        <div className="p-3">
          <div className="flex items-center text-xs text-gray-500 mb-1">
            <Tag className="h-3 w-3 mr-1" />
            <span>{category}</span>
          </div>

          <h3 className="font-bold mb-2">{title}</h3>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Gift className="h-4 w-4 text-purple-600 mr-1" />
              <span className="font-bold text-purple-600">{points} points</span>
            </div>

            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Redeem
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
