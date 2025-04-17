"use client"

import { X } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface NotificationCardProps {
  onClose: () => void
}

export function NotificationCard({ onClose }: NotificationCardProps) {
  return (
    <Card className="rounded-xl border-none shadow-lg overflow-hidden">
      <CardHeader className="p-3 bg-purple-600 text-white flex flex-row items-center justify-between">
        <h3 className="font-bold">New Notifications</h3>
        <Button variant="ghost" size="icon" className="h-6 w-6 text-white" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-3 border-b">
          <h4 className="font-medium">New Raffle Available!</h4>
          <p className="text-xs text-gray-600">Enter now for a chance to win a $500 shopping spree.</p>
          <div className="flex justify-end mt-2">
            <Button variant="ghost" size="sm" className="h-7 text-xs text-purple-600">
              View
            </Button>
          </div>
        </div>
        <div className="p-3 border-b">
          <h4 className="font-medium">Points Bonus!</h4>
          <p className="text-xs text-gray-600">You've earned 2x points on your recent purchase.</p>
          <div className="flex justify-end mt-2">
            <Button variant="ghost" size="sm" className="h-7 text-xs text-purple-600">
              View
            </Button>
          </div>
        </div>
        <div className="p-3">
          <h4 className="font-medium">New Reward Available</h4>
          <p className="text-xs text-gray-600">Exclusive reward just for Silver members.</p>
          <div className="flex justify-end mt-2">
            <Button variant="ghost" size="sm" className="h-7 text-xs text-purple-600">
              View
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
