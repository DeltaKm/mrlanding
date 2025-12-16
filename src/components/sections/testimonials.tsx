import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote, Smile } from "lucide-react"

const testimonials = [
  {
    name: "Giulia Rossi",
    role: "Mamma di Sofia (5 anni)",
    content: "Hanno organizzato la festa di compleanno di mia figlia ed è stato tutto perfetto! Animatori bravissimi e bambini super contenti. Consigliatissimi!",
    rating: 5
  },
  {
    name: "Marco Bianchi",
    role: "Direttore Marketing",
    content: "Professionalità e creatività per il nostro evento aziendale. Hanno saputo coinvolgere tutti i dipendenti con garbo e simpatia. Ottimo lavoro.",
    rating: 5
  },
  {
    name: "Elena Verdi",
    role: "Organizzatrice Matrimoni",
    content: "Collaboro con questa agenzia da anni per l'intrattenimento dei bambini durante i matrimoni. Una garanzia di affidabilità e divertimento.",
    rating: 4
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-background relative">
       <Quote className="absolute top-10 left-10 h-24 w-24 text-primary/5 rotate-12" />
       <Quote className="absolute bottom-10 right-10 h-24 w-24 text-secondary/5 rotate-12 scale-x-[-1]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Dicono di <span className="text-secondary">Noi</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Le parole di chi ha già festeggiato con noi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col justify-between border-2 border-muted bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'fill-secondary text-secondary' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                <p className="text-lg text-foreground/80 italic leading-relaxed">"{testimonial.content}"</p>
              </CardHeader>
              <CardContent className="pt-4 border-t border-muted/50 mt-4 mx-6 px-0">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white ${
                    index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-accent'
                  }`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
