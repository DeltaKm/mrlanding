import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PartyPopper } from "lucide-react"

export function CTA() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
       {/* Background patterns */}
       <div className="absolute inset-0 opacity-10 pattern-dots" />
       

      <div className="container-custom text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight drop-shadow-md flex items-center justify-center gap-4">
          Pronto a Fare <span className="text-secondary">Festa?</span> 
        </h2>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Non aspettare l'ultimo minuto! Le date migliori vanno a ruba più velocemente delle caramelle alle feste.
        </p>
        <Link href="#contact">
          <Button size="lg" variant="secondary" className="text-xl px-12 py-8 rounded-full font-black shadow-[0_10px_0_rgb(0,0,0,0.2)] hover:shadow-[0_5px_0_rgb(0,0,0,0.2)] hover:translate-y-[5px] transition-all bg-secondary text-secondary-foreground border-4 border-white/20">
            PRENOTA ORA!
          </Button>
        </Link>
      </div>
      

    </section>
  )
}
