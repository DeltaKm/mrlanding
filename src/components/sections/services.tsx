import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PartyPopper, Users, Baby, Music, Sparkles, Mic2 } from "lucide-react"

const services = [
  {
    title: "Animazione Eventi",
    description: "Intrattenimento coinvolgente per matrimoni, compleanni e celebrazioni speciali con professionisti qualificati.",
    icon: PartyPopper,
  },
  {
    title: "Feste per Bambini",
    description: "Giochi, truccabimbi, baby dance e laboratori creativi per rendere indimenticabile il compleanno dei più piccoli.",
    icon: Baby,
  },
  {
    title: "Eventi Aziendali",
    description: "Team building, presentazioni e cene aziendali gestite con professionalità per garantire il successo del tuo brand.",
    icon: Users,
  },
  {
    title: "Mascotte e Show",
    description: "Personaggi amati dai bambini e spettacoli tematici completi per centri commerciali e piazze.",
    icon: Sparkles,
  },
  {
    title: "DJ Set & Musica",
    description: "Selezione musicale personalizzata e service audio/luci professionale per ogni tipo di atmosfera.",
    icon: Music,
  },
  {
    title: "Presentatori",
    description: "Speaker e presentatori esperti per condurre il tuo evento con ritmo, eleganza e simpatia.",
    icon: Mic2,
  },
]

export function Services() {
  return (
    <section id="services" className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl blob" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl blob" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Cosa Possiamo Fare <span className="text-accent">Per Te?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Non importa l'occasione, abbiamo la formula magica per renderla speciale! 
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6 ${
                  index % 3 === 0 ? 'bg-primary/10 text-primary' : index % 3 === 1 ? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent'
                }`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
