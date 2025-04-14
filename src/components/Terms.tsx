
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import { FileText, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface TermsProps {
  children: React.ReactNode;
}

const Terms = ({ children }: TermsProps) => {
  const isMobile = useIsMobile();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-gaming-darker border border-neon-blue/30 text-white max-h-[90vh] overflow-hidden">
        <DialogHeader className="flex flex-row items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-neon-blue" />
            <DialogTitle className="text-xl font-orbitron text-neon-blue">Terms & Conditions</DialogTitle>
          </div>
          <DialogClose className="p-1 rounded-sm hover:bg-gaming-accent transition-colors">
            <X className="h-4 w-4" />
          </DialogClose>
        </DialogHeader>
        <DialogDescription className="text-gray-400 mb-4">
          Please review Cuephoria's terms and conditions carefully
        </DialogDescription>
        
        <ScrollArea className={`${isMobile ? 'max-h-[60vh]' : 'max-h-[70vh]'} pr-4`}>
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="text-white font-semibold text-lg mb-2">1. General Terms</h3>
              <p className="text-gray-300 mb-2">
                Welcome to Cuephoria Gaming Lounge & Cafe ("Cuephoria"). By accessing our premises, using our services, or participating in any activities offered by Cuephoria, you agree to be bound by these Terms and Conditions.
              </p>
              <p className="text-gray-300">
                These terms constitute a legally binding agreement between you and Cuephoria. If you do not agree with any part of these terms, please refrain from using our services.
              </p>
            </section>
            
            <section>
              <h3 className="text-white font-semibold text-lg mb-2">2. Age Restrictions</h3>
              <p className="text-gray-300 mb-2">
                Cuephoria services are primarily intended for individuals aged 12 and above. Visitors under the age of 18 must be accompanied by a parent or guardian when visiting our premises. Some specific games or activities may have different age restrictions, which will be clearly indicated.
              </p>
              <p className="text-gray-300">
                We reserve the right to request proof of age at any time and deny service to anyone who cannot provide adequate verification.
              </p>
            </section>
            
            <section>
              <h3 className="text-white font-semibold text-lg mb-2">3. Booking & Reservation Policy</h3>
              <p className="text-gray-300 mb-2">
                Reservations can be made through our online booking system, via phone, or in person. A reservation is only confirmed upon receipt of a confirmation from Cuephoria.
              </p>
              <p className="text-gray-300 mb-2">
                <span className="font-medium text-neon-pink">Cancellation Policy:</span> Cancellations must be made at least 4 hours prior to the scheduled time to avoid charges. Last-minute cancellations or no-shows may result in a charge of up to 50% of the booking value.
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-neon-pink">Late Arrival:</span> Reserved facilities will be held for 15 minutes from the scheduled time. After this period, we reserve the right to reallocate the facility to other customers. Late arrivals may result in reduced play time with no reduction in fees.
              </p>
            </section>
            
            <section>
              <h3 className="text-white font-semibold text-lg mb-2">4. Payment & Pricing</h3>
              <p className="text-gray-300 mb-2">
                All prices are inclusive of applicable taxes unless stated otherwise. Payment is accepted in the form of cash, major credit/debit cards, and selected digital payment methods.
              </p>
              <p className="text-gray-300 mb-2">
                Online booking discounts are valid only for reservations made through our official website or app and paid for in advance.
              </p>
              <p className="text-gray-300">
                We reserve the right to modify our pricing at any time without prior notice. However, any confirmed bookings will be honored at the rate quoted at the time of reservation.
              </p>
            </section>
            
            <section>
              <h3 className="text-white font-semibold text-lg mb-2">5. Code of Conduct</h3>
              <p className="text-gray-300 mb-2">
                All visitors must conduct themselves in a respectful manner. The following behaviors are strictly prohibited:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Abusive or threatening language</li>
                <li>Disruptive behavior affecting other patrons</li>
                <li>Damage to equipment or facilities</li>
                <li>Intoxication or substance abuse</li>
                <li>Bringing outside food and beverages</li>
                <li>Smoking inside the premises</li>
              </ul>
              <p className="text-gray-300 mt-2">
                Cuephoria reserves the right to refuse service and ask anyone violating these rules to leave the premises without refund.
              </p>
            </section>
            
            <section>
              <h3 className="text-white font-semibold text-lg mb-2">6. Equipment & Facility Usage</h3>
              <p className="text-gray-300 mb-2">
                All equipment provided by Cuephoria must be used as intended and with care. Any damage to equipment or facilities due to misuse will be charged to the responsible individual.
              </p>
              <p className="text-gray-300">
                Basic instruction on equipment usage will be provided if requested. It is the responsibility of the user to ensure they understand how to use the equipment correctly.
              </p>
            </section>
            
            <section>
              <h3 className="text-white font-semibold text-lg mb-2">7. Personal Belongings</h3>
              <p className="text-gray-300">
                Cuephoria is not responsible for any loss, theft, or damage to personal belongings. We recommend keeping valuable items with you at all times or using the provided storage facilities where available.
              </p>
            </section>
            
            <section>
              <h3 className="text-white font-semibold text-lg mb-2">8. Photography & Video Recording</h3>
              <p className="text-gray-300 mb-2">
                Casual photography for personal use is permitted. However, commercial photography or recording that may disturb other patrons requires prior written permission from management.
              </p>
              <p className="text-gray-300">
                Cuephoria may occasionally take photographs or videos on our premises for promotional purposes. By entering our establishment, you consent to being included in such media. If you wish not to be photographed, please inform our staff.
              </p>
            </section>
            
            <section>
              <h3 className="text-white font-semibold text-lg mb-2">9. Liability Limitation</h3>
              <p className="text-gray-300">
                Visitors participate in games and activities at their own risk. Cuephoria shall not be liable for any injuries, accidents, or health issues arising from the use of our facilities. Participants are advised to consider their physical health and limitations before engaging in any activities.
              </p>
            </section>
            
            <section>
              <h3 className="text-white font-semibold text-lg mb-2">10. Privacy Policy</h3>
              <p className="text-gray-300">
                Your privacy is important to us. Any personal information collected will be used in accordance with our Privacy Policy, which is available upon request or on our website.
              </p>
            </section>
            
            <section>
              <h3 className="text-white font-semibold text-lg mb-2">11. Amendments to Terms</h3>
              <p className="text-gray-300">
                Cuephoria reserves the right to modify these Terms and Conditions at any time without prior notice. The updated terms will be effective immediately upon posting on our website or premises.
              </p>
            </section>
            
            <section>
              <h3 className="text-white font-semibold text-lg mb-2">12. Contact Information</h3>
              <p className="text-gray-300">
                For any questions, concerns, or feedback regarding these terms, please contact us at <a href="mailto:contact@cuephoria.in" className="text-neon-blue hover:underline">contact@cuephoria.in</a> or call us at <a href="tel:+918637625155" className="text-neon-blue hover:underline">+91 86376 25155</a>.
              </p>
            </section>
            
            <div className="pt-4 text-center text-gray-400">
              <p>Last Updated: April 14, 2025</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default Terms;
