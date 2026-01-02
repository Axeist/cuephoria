
import React from 'react';
import { Calendar, Clock, Users, Award, Table2, Siren, Percent, Gift, Zap, Sparkles, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const BookNow = () => {
  const { toast } = useToast();

  const copyCouponCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Coupon Copied!",
      description: `${code} has been copied to clipboard`,
    });
  };

  const couponCodes = [
    {
      code: "CUEPHORIA20",
      discount: "20% OFF",
      icon: <Percent className="h-5 w-5 text-neon-blue" />,
      textColor: "text-neon-blue",
      bgColor: "bg-neon-blue/20",
      bgGradient: "from-neon-blue/15 via-purple-500/10 to-neon-blue/15",
      borderColor: "border-neon-blue/30 hover:border-neon-blue/60",
      shadowColor: "hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]",
      details: [
        { type: "PS5/VR", original: "₹150", discounted: "₹120", savings: "₹30" },
        { type: "Pool", original: "₹300", discounted: "₹240", savings: "₹60" }
      ],
      requirement: null
    },
    {
      code: "CUEPHORIA35",
      discount: "35% OFF",
      icon: <Gift className="h-5 w-5 text-purple-400" />,
      textColor: "text-purple-400",
      bgColor: "bg-purple-500/20",
      bgGradient: "from-purple-500/15 via-pink-500/10 to-purple-500/15",
      borderColor: "border-purple-500/30 hover:border-purple-500/60",
      shadowColor: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
      details: [
        { type: "PS5/VR", original: "₹150", discounted: "₹97.50", savings: "₹52.50" },
        { type: "Pool", original: "₹300", discounted: "₹195", savings: "₹105" }
      ],
      requirement: "Student ID Required"
    },
    {
      code: "HH99",
      discount: "₹99 FIXED",
      icon: <Zap className="h-5 w-5 text-amber-400" />,
      textColor: "text-amber-400",
      bgColor: "bg-amber-500/20",
      bgGradient: "from-amber-500/15 via-orange-500/10 to-amber-500/15",
      borderColor: "border-amber-500/30 hover:border-amber-500/60",
      shadowColor: "hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
      details: [
        { type: "PS5", original: "₹150", discounted: "₹99", savings: "₹51" },
        { type: "Pool", original: "₹300", discounted: "₹99", savings: "₹201" }
      ],
      requirement: "Mon-Fri, 11 AM-4 PM",
      animate: true
    },
    {
      code: "NIT35",
      discount: "35% OFF",
      icon: <Sparkles className="h-5 w-5 text-green-400" />,
      textColor: "text-green-400",
      bgColor: "bg-green-500/20",
      bgGradient: "from-green-500/15 via-teal-500/10 to-green-500/15",
      borderColor: "border-green-500/30 hover:border-green-500/60",
      shadowColor: "hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]",
      details: [
        { type: "PS5/VR", original: "₹150", discounted: "₹97.50", savings: "₹52.50" },
        { type: "Pool", original: "₹300", discounted: "₹195", savings: "₹105" }
      ],
      requirement: null
    }
  ];

  return (
    <section id="book-now" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,255,0.15)_0,rgba(15,25,40,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to <span className="neon-text-blue">Play</span>?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Book your gaming or pool session now and prepare for an unforgettable experience at Cuephoria.
          </p>
          
          {/* Fixed alignment for the limited time offer banner */}
          <div className="flex justify-center mt-6 mb-8">
            <div className="inline-flex items-center bg-gaming-darker/80 backdrop-blur-md py-3 px-8 rounded-lg border border-neon-pink/30">
              <Siren className="h-5 w-5 text-red-500 animate-pulse mr-3" />
              <p className="text-lg md:text-xl text-neon-pink font-bold animate-blink-slow">
                50% OFF MONTHLY MEMBERSHIP
              </p>
              <Siren className="h-5 w-5 text-red-500 animate-pulse ml-3" />
            </div>
          </div>
          
          <Link 
            to="/book" 
            className="inline-block px-8 py-3 bg-neon-pink text-white rounded-md hover:bg-neon-pink/80 transition-all duration-300"
          >
            Book on our dedicated booking page
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <div className="w-full lg:w-1/2">
            <div className="glass-card rounded-xl p-8 border border-neon-blue/20 h-full flex flex-col relative">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <Calendar className="h-6 w-6 text-neon-blue mr-2" />
                Book Your Session
              </h3>
              
              {/* Cuephoria Booking Website */}
              <div className="w-full flex-grow rounded-lg overflow-hidden border border-neon-blue/30 bg-gaming-darker/50">
                <iframe 
                  width="100%" 
                  height="750px" 
                  src="https://admin.cuephoria.in/public/booking" 
                  frameBorder="0" 
                  allowFullScreen
                  className="w-full h-[750px] rounded-lg"
                  title="Cuephoria Booking Website"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="glass-card rounded-xl p-8 border border-neon-pink/20 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <Calendar className="h-6 w-6 text-neon-blue mr-2" />
                Pricing & Monthly Memberships
              </h3>
              
              <div className="space-y-6 flex-grow">
                {/* Regular Pricing Table */}
                <div className="rounded-lg overflow-hidden border border-gaming-accent/20">
                  <Table>
                    <TableBody>
                      <TableRow className="border-b border-gaming-accent hover:bg-gaming-accent/10">
                        <TableCell className="py-4">
                          <div>
                            <h4 className="text-xl font-semibold text-neon-blue">Pool Table</h4>
                            <p className="text-gray-400">Per hour rate for billiards</p>
                          </div>
                        </TableCell>
                        <TableCell className="py-4 text-right">
                          <div className="flex items-center justify-end">
                            <div className="text-2xl font-bold text-white">₹300</div>
                          </div>
                        </TableCell>
                      </TableRow>
                      
                      <TableRow className="border-b border-gaming-accent hover:bg-gaming-accent/10">
                        <TableCell className="py-4">
                          <div>
                            <h4 className="text-xl font-semibold text-neon-pink">Gaming Station</h4>
                            <p className="text-gray-400">Per controller rate for PC/Console</p>
                          </div>
                        </TableCell>
                        <TableCell className="py-4 text-right">
                          <div className="flex items-center justify-end">
                            <div className="text-2xl font-bold text-white">₹150</div>
                          </div>
                        </TableCell>
                      </TableRow>
                      
                      <TableRow className="border-b border-gaming-accent hover:bg-gaming-accent/10">
                        <TableCell className="py-4">
                          <div>
                            <h4 className="text-xl font-semibold text-neon-blue">VR Station</h4>
                            <p className="text-gray-400">Per hour rate for VR gaming</p>
                          </div>
                        </TableCell>
                        <TableCell className="py-4 text-right">
                          <div className="flex items-center justify-end">
                            <div className="text-2xl font-bold text-white">₹150</div>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                {/* Monthly Membership Section */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
                    <Award className="h-5 w-5 text-neon-pink mr-2" />
                    Monthly Memberships - 50% OFF
                  </h4>
                  <div className="rounded-lg overflow-hidden border border-gaming-accent/20">
                    <Table>
                      <TableBody>
                        <TableRow className="border-b border-gaming-accent hover:bg-gaming-accent/10">
                          <TableCell className="py-4">
                            <div>
                              <h5 className="text-lg font-semibold text-gray-300">💎 Silver Membership</h5>
                              <p className="text-sm text-gray-400">Up to 2 players • Priority bookings</p>
                            </div>
                          </TableCell>
                          <TableCell className="py-4 text-right text-neon-blue font-semibold">₹299</TableCell>
                        </TableRow>
                        <TableRow className="border-b border-gaming-accent hover:bg-gaming-accent/10">
                          <TableCell className="py-4">
                            <div>
                              <h5 className="text-lg font-semibold text-gray-300">🌟 Gold Membership</h5>
                              <p className="text-sm text-gray-400">Up to 4 players • Priority bookings</p>
                            </div>
                          </TableCell>
                          <TableCell className="py-4 text-right text-neon-pink font-semibold">₹499</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gaming-accent/10">
                          <TableCell className="py-3 text-gray-300">Extra players (per hour)</TableCell>
                          <TableCell className="py-3 text-right text-neon-blue font-semibold">₹49</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                
                {/* Enhanced loyalty points section with table */}
                <div className="pt-4 border-t border-gaming-accent">
                  <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
                    <Award className="h-5 w-5 text-neon-pink mr-2" />
                    Loyalty Program
                  </h4>
                  <div className="rounded-lg overflow-hidden border border-gaming-accent/20">
                    <Table>
                      <TableBody>
                        <TableRow className="border-b border-gaming-accent hover:bg-gaming-accent/10">
                          <TableCell className="py-3">
                            <div className="flex items-center">
                              <div className="h-6 w-6 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2">
                                <Award className="h-4 w-4 text-neon-pink" />
                              </div>
                              <span className="text-gray-300">Non-members earn</span>
                            </div>
                          </TableCell>
                          <TableCell className="py-3 text-right text-neon-blue font-semibold">2 pts per ₹100</TableCell>
                        </TableRow>
                        <TableRow className="border-b border-gaming-accent hover:bg-gaming-accent/10">
                          <TableCell className="py-3">
                            <div className="flex items-center">
                              <div className="h-6 w-6 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                                <Award className="h-4 w-4 text-neon-blue" />
                              </div>
                              <span className="text-gray-300">Members earn</span>
                            </div>
                          </TableCell>
                          <TableCell className="py-3 text-right text-neon-blue font-semibold">5 pts per ₹100</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gaming-accent/10">
                          <TableCell className="py-3">
                            <span className="text-gray-300">Point value</span>
                          </TableCell>
                          <TableCell className="py-3 text-right text-neon-pink font-semibold">₹1 per point</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                
                {/* Coupon Codes Section */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
                    <Sparkles className="h-5 w-5 text-neon-pink mr-2 animate-pulse" />
                    Available Coupon Codes
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {couponCodes.map((coupon, idx) => (
                      <div
                        key={idx}
                        className={`group relative p-4 bg-gradient-to-r ${coupon.bgGradient} rounded-xl border ${coupon.borderColor} transition-all duration-300 ${coupon.shadowColor} overflow-hidden cursor-pointer transform hover:scale-[1.02]`}
                        onClick={() => copyCouponCode(coupon.code)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className={`p-1.5 ${coupon.bgColor} rounded-lg`}>
                                {coupon.icon}
                              </div>
                              <h5 className={`${coupon.textColor} font-bold text-sm`}>{coupon.code}</h5>
                            </div>
                            <span className={`px-2 py-1 ${coupon.bgColor} ${coupon.textColor} text-xs font-bold rounded-full border ${coupon.borderColor} ${coupon.animate ? 'animate-pulse' : ''}`}>
                              {coupon.discount}
                            </span>
                          </div>
                          {coupon.requirement && (
                            <div className="mb-2">
                              <span className="text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                                {coupon.requirement}
                              </span>
                            </div>
                          )}
                          <div className="space-y-1 text-xs">
                            {coupon.details.map((detail, i) => (
                              <div key={i} className="flex items-center gap-2 text-gray-300">
                                <span className="text-gray-500 line-through text-[10px]">{detail.original}</span>
                                <span className={`${coupon.textColor} font-semibold`}>→ {detail.discounted}</span>
                                <span className="text-green-400 text-[10px]">(Save {detail.savings})</span>
                                <span className="text-gray-500 text-[10px]">{detail.type}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-2 flex items-center gap-1 text-[10px] text-gray-400 group-hover:text-gray-300 transition-colors">
                            <Copy className="h-3 w-3" />
                            <span>Click to copy code</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2 text-center">
                  <p className="text-gray-400 text-sm animate-blink-slow">
                    * Online bookings get <span className="text-neon-blue font-bold">25% OFF</span> on your total bill this month!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
