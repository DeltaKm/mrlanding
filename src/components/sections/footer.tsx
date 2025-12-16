import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t border-white/10 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 font-black text-2xl text-white mb-6">
            <div className="bg-white/10 p-2 rounded-xl">
              
            </div>
            <span>LOGO</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
            Creiamo sorrisi e ricordi indimenticabili dal 2020. La tua agenzia di fiducia per ogni tipo di evento, dal piccolo compleanno alla grande festa aziendale.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all hover:scale-110">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-5 w-5"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
              <span className="sr-only">TikTok</span>
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500 font-medium flex items-center justify-center gap-1">
          <p>&copy; {new Date().getFullYear()} Emme Erre Animazione e Spettacolo</p>
        </div>
      </div>
    </footer>
  )
}
