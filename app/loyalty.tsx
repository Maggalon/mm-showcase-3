import { ChevronRight, Gift, Star, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

export function Loyalty() {
  return (
    <div className="flex flex-col h-full">
      <header className="p-4 bg-purple-600 text-white">
        <h1 className="text-xl font-bold">Loyalty Program</h1>
        <p className="text-sm opacity-90">Track your points and rewards</p>
      </header>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <Card className="rounded-xl border-none shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4 text-white">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold text-lg">Silver Member</h2>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-1 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">1,250</span>
                </div>
              </div>

              <div className="mb-1 flex justify-between text-xs">
                <span>Silver</span>
                <span>Gold</span>
                <span>Platinum</span>
              </div>

              <div className="relative h-2 bg-white/30 rounded-full">
                <div className="absolute left-0 top-0 h-full bg-yellow-400 rounded-full" style={{ width: "62%" }}></div>
                <div className="absolute left-[33%] top-0 h-full w-[1px] bg-white"></div>
                <div className="absolute left-[66%] top-0 h-full w-[1px] bg-white"></div>
              </div>

              <p className="text-xs mt-2">750 more points to reach Gold status</p>
            </div>

            <CardContent className="p-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">5%</div>
                  <div className="text-xs text-gray-600">Cashback</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">2x</div>
                  <div className="text-xs text-gray-600">Points Multiplier</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">3</div>
                  <div className="text-xs text-gray-600">Free Raffles</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold">Points History</h2>
              <Button variant="ghost" size="sm" className="text-purple-600 p-0 h-auto">
                See all <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <Card className="rounded-xl border-none shadow-md">
              <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Purchase at Store XYZ</h3>
                    <p className="text-xs text-gray-500">April 15, 2025</p>
                  </div>
                  <div className="text-green-600 font-bold">+125 pts</div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Weekly Check-in Bonus</h3>
                    <p className="text-xs text-gray-500">April 12, 2025</p>
                  </div>
                  <div className="text-green-600 font-bold">+50 pts</div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Raffle Entry</h3>
                    <p className="text-xs text-gray-500">April 10, 2025</p>
                  </div>
                  <div className="text-red-600 font-bold">-100 pts</div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Purchase at Store ABC</h3>
                    <p className="text-xs text-gray-500">April 5, 2025</p>
                  </div>
                  <div className="text-green-600 font-bold">+75 pts</div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold">Your Achievements</h2>
              <Button variant="ghost" size="sm" className="text-purple-600 p-0 h-auto">
                See all <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-1">
                  <Trophy className="h-8 w-8 text-purple-600" />
                </div>
                <span className="text-xs text-center">First Purchase</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-1">
                  <Star className="h-8 w-8 text-orange-500" />
                </div>
                <span className="text-xs text-center">5 Purchases</span>
              </div>

              <div className="flex flex-col items-center opacity-50">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                  <Gift className="h-8 w-8 text-gray-400" />
                </div>
                <span className="text-xs text-center">First Reward</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Membership Tiers</h2>

            <div className="space-y-3">
              <Card className="rounded-xl border-none shadow-md overflow-hidden">
                <div className="bg-gray-200 h-1">
                  <div className="bg-purple-600 h-full" style={{ width: "100%" }}></div>
                </div>
                <CardContent className="p-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <Star className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Silver</h3>
                      <p className="text-xs text-gray-500">0 - 2,000 points</p>
                    </div>
                    <Badge className="ml-auto bg-purple-600">Current</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl border-none shadow-md overflow-hidden">
                <div className="bg-gray-200 h-1">
                  <div className="bg-yellow-400 h-full" style={{ width: "0%" }}></div>
                </div>
                <CardContent className="p-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <Star className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Gold</h3>
                      <p className="text-xs text-gray-500">2,000 - 5,000 points</p>
                    </div>
                    <div className="ml-auto text-xs text-gray-500">750 points away</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl border-none shadow-md overflow-hidden">
                <div className="bg-gray-200 h-1">
                  <div className="bg-blue-600 h-full" style={{ width: "0%" }}></div>
                </div>
                <CardContent className="p-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <Star className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Platinum</h3>
                      <p className="text-xs text-gray-500">5,000+ points</p>
                    </div>
                    <div className="ml-auto text-xs text-gray-500">3,750 points away</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </ScrollArea>
    </div>
  )
}
