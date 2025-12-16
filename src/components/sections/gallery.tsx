import { Camera, PartyPopper, Gift, Palette } from "lucide-react"

export function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm mb-4">
            <Camera className="h-4 w-4" /> Album dei Ricordi
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">I Nostri Momenti <span className="text-primary">Wow!</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Sfoglia la galleria per vedere come trasformiamo ogni evento in un'esplosione di gioia.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i} 
              className={`rounded-3xl overflow-hidden bg-white relative group shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : 
                i === 5 ? 'md:col-span-2 md:row-span-1' : ''
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                <div>
                  <span className="text-white font-bold text-lg block translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Evento #{i + 1}</span>
                  <span className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Telese Terme, 2025</span>
                </div>
              </div>
              <div className="w-full h-full bg-gray-100 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-muted-foreground relative">
                <div className={`absolute inset-0 opacity-20 ${
                  i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-secondary' : 'bg-accent'
                }`} />
                <span className="sr-only">Immagine Gallery {i + 1}</span>
                <span className="opacity-50">
                  {i % 3 === 0 ? <PartyPopper className="h-16 w-16" /> : i % 3 === 1 ? <Gift className="h-16 w-16" /> : <Palette className="h-16 w-16" />}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
