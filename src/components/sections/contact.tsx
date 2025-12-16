import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute -left-20 top-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl blob" />
      <div className="absolute -right-20 bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl blob" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 flex items-center gap-3">Parliamone! <MessageCircle className="h-10 w-10 text-primary" /></h2>
            <p className="text-xl text-muted-foreground mb-10 font-medium">
              Hai un'idea folle? O cerchi qualcosa di classico? In ogni caso, siamo tutt'orecchi! Scrivici o chiamaci.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <div className="font-bold text-xl mb-1">Telefono</div>
                  <a href="tel:+393271860767" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">+39 327 186 0767</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <div className="font-bold text-xl mb-1">Email</div>
                  <a href="mailto:info@emmerreanimazione.it" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">info@emmerreanimazione.it</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <div className="font-bold text-xl mb-1">Sede</div>
                  <p className="text-muted-foreground text-lg font-medium">Via dei Miracoli, Telese Terme (BN)</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="border-none shadow-2xl bg-white/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold ml-1">Come ti chiami?</label>
                    <Input id="name" placeholder="Mario Rossi" className="rounded-xl h-12 bg-white border-2 border-muted focus-visible:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold ml-1">La tua email</label>
                    <Input id="email" type="email" placeholder="mario@email.com" className="rounded-xl h-12 bg-white border-2 border-muted focus-visible:border-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold ml-1">Che evento è?</label>
                  <Input id="subject" placeholder="Compleanno, Matrimonio, Aziendale..." className="rounded-xl h-12 bg-white border-2 border-muted focus-visible:border-primary" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold ml-1">Raccontaci tutto</label>
                  <Textarea id="message" placeholder="Vorrei organizzare una festa a tema pirati per..." className="min-h-[150px] rounded-xl bg-white border-2 border-muted focus-visible:border-primary resize-none p-4" />
                </div>
                
                <Button type="submit" className="w-full text-lg h-14 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all mt-2">
                  Invia Messaggio <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
