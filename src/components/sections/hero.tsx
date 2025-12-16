import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Rocket } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-40 md:pt-40 md:pb-60">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-3xl blob animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/10 rounded-full blur-3xl blob animation-delay-2000" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-3xl blob animation-delay-4000" />
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border-2 border-primary/20 px-6 py-2 text-sm font-bold bg-white/80 backdrop-blur-sm text-primary mb-8 mt-12 md:mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-lg shadow-primary/10 -rotate-2 hover:rotate-0 transition-transform">
          <Sparkles className="mr-2 h-4 w-4 text-secondary fill-secondary" />
          Emme Erre Animazione e Spettacolo
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground max-w-5xl mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 leading-[1.1]">
          Trasformiamo ogni evento in una <span className="text-primary relative inline-block">
            Festa
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span> Indimenticabile!
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 leading-relaxed">
          Dai compleanni ai grandi eventi aziendali, portiamo sorrisi, magia e colori ovunque. Preparati a stupire i tuoi ospiti!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <Link href="#contact">
            <Button size="lg" className="w-full sm:w-auto text-xl px-10 py-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105">
              Voglio un Preventivo! <Rocket className="ml-2 h-6 w-6" />
            </Button>
          </Link>
          <Link href="#services">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-xl px-10 py-8 rounded-full border-2 hover:bg-muted group">
              Scopri cosa facciamo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
