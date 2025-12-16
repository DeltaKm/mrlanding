import { ShieldCheck, UserCheck, Heart, Clock, Tent, PartyPopper } from "lucide-react"

const features = [
  {
    title: "Esperienza Pluriennale",
    description: "Oltre 10 anni di attività nel settore dell'intrattenimento e dell'organizzazione eventi.",
    icon: Clock,
  },
  {
    title: "Staff Qualificato",
    description: "Tutti i nostri animatori sono formati, assicurati e selezionati per garantire la massima professionalità.",
    icon: UserCheck,
  },
  {
    title: "Passione e Cuore",
    description: "Mettiamo il cuore in quello che facciamo perché amiamo vedere i sorrisi sui volti dei nostri clienti.",
    icon: Heart,
  },
  {
    title: "Sicurezza Garantita",
    description: "Utilizziamo solo attrezzature certificate e materiali sicuri per la tranquillità di tutti.",
    icon: ShieldCheck,
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Perché Scegliere <span className="text-secondary">Noi?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 font-medium">
              Siamo un team di pazzi scatenati (ma super professionali!) pronti a trasformare la noia in pura allegria.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-3 p-4 rounded-2xl hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3 font-bold text-xl text-foreground">
                    <div className="p-2 rounded-full bg-secondary/20 text-secondary-foreground">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    {feature.title}
                  </div>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Main blob image placeholder */}
              <div className="absolute inset-0 bg-primary/10 blob flex items-center justify-center overflow-hidden border-4 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]">
                 <div className="w-full h-full bg-primary/5 blob rotate-45" />
              </div>
              
              <div className="absolute inset-4 bg-white rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden z-10 rotate-3 transition-transform hover:rotate-0 duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center gap-2">
                  <span className="text-primary font-bold text-2xl">Team Fantastico</span>
                  <Tent className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Heart className="h-6 w-6 text-yellow-600 fill-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-xs text-muted-foreground font-bold">Passione</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
