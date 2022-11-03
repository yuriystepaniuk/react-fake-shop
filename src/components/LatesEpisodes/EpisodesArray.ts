type Episode = {
    id: number
    category: string
    episodeNumber: number
    title: string
    description: string
    image: string
}

const episodesArray: Episode[] = [
  { 
    id:1,
    category:"Gear",
    episodeNumber: 1,
    title: "Should you get outboard audio gear?",
    description: "Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.",
    image: "images/episode-1.png",
  },
  { id:2,
    category:"Tips & Tricks",
    episodeNumber: 2,
    title: "Mic tricks to take you to the next level",
    description: "Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.",
    image: "images/episode-2.png",
  },
  { id:3,
    category:"Gear",
    episodeNumber: 3,
    title: "The best microphone under $200",
    description: "With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.",
    image: "images/episode-3.png",
  }
]

export default episodesArray
