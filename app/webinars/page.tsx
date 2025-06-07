"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock } from "lucide-react"

// Mock data for webinars
const webinars = [
    {
        id: 1,
        title: "Essential Baby Sleep Patterns: A Guide for New Parents",
        speaker: "Dr. Sumitra Meena",
        date: "2024-01-15",
        time: "7:00 PM IST",
        duration: "45 mins",
        category: "Sleep & Development",
    },
    {
        id: 2,
        title: "Nutrition During Pregnancy: What Every Mother Should Know",
        speaker: "Dr. Priya Sharma",
        date: "2024-01-18",
        time: "6:30 PM IST",
        duration: "60 mins",
        category: "Nutrition",
    },
    {
        id: 3,
        title: "Managing Postpartum Depression: Support and Recovery",
        speaker: "Dr. Sumitra Meena",
        date: "2024-01-22",
        time: "8:00 PM IST",
        duration: "50 mins",
        category: "Mental Health",
    },
    {
        id: 4,
        title: "Baby's First Foods: Introduction to Solid Foods",
        speaker: "Dr. Anjali Gupta",
        date: "2024-01-25",
        time: "7:30 PM IST",
        duration: "40 mins",
        category: "Nutrition",
    },
]

function formatDate(dateString: string) {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

function handleViewDetails(webinarId: number) {
    console.log(`Viewing details for webinar ID: ${webinarId}`)
}

export default function WebinarsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/40">
            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl mb-6">
                        <Calendar className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-orange-800 bg-clip-text text-transparent mb-6">
                        Live Webinars
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Join our expert led sessions designed for busy parents. Get valuable insights on parenting, health, and
                        child development from the comfort of your home.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {webinars.map((webinar) => (
                        <Card
                            key={webinar.id}
                            className="group hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-[1.01] rounded-3xl overflow-hidden"
                        >
                            <CardHeader className="pb-6 pt-8 px-8">
                                <div className="flex items-start justify-between gap-4">
                                    <CardTitle className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-900 transition-colors">
                                        {webinar.title}
                                    </CardTitle>
                                    <Badge className="bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700 hover:from-blue-200 hover:to-orange-200 border-0 px-4 py-2 rounded-full font-medium shrink-0">
                                        {webinar.category}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="px-8 pb-6">
                                <div className="space-y-5">
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl flex items-center justify-center">
                                            <User className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span className="font-semibold text-lg">{webinar.speaker}</span>
                                    </div>

                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span className="text-lg">{formatDate(webinar.date)}</span>
                                    </div>

                                    <div className="flex items-center gap-6 text-gray-500 ml-13">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span className="font-medium">{webinar.time}</span>
                                        </div>
                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                        <span className="font-medium">{webinar.duration}</span>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="px-8 pb-8">
                                <Button
                                    onClick={() => handleViewDetails(webinar.id)}
                                    className="w-full h-14 bg-gradient-to-r from-blue-400 to-orange-400 hover:from-blue-500 hover:to-orange-500 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                                >
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-orange-100/50 rounded-3xl blur-3xl"></div>
                    <div className="relative text-center p-12 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl mb-8">
                            <Calendar className="w-10 h-10 text-blue-600" />
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
                            Dont Miss Out
                        </h3>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Register for upcoming webinars and get expert guidance on your parenting journey.
                        </p>
                        <Button
                            size="lg"
                            className="h-16 px-12 bg-gradient-to-r from-orange-400 to-blue-400 hover:from-orange-500 hover:to-blue-500 text-white font-semibold text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                        >
                            View All Upcoming Sessions
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
