
import React from 'react';
import { Calendar, Clock, Users, Award, Table2, Siren } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const BookNow = () => {
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
              
              {/* Zoho Bookings iframe with theme matching */}
              <div className="w-full flex-grow rounded-lg overflow-hidden border border-neon-blue/30 bg-gaming-darker/50">
                <iframe 
                  width="100%" 
                  height="600px" 
                  src="https://cuephoria.zohobookings.in/portal-embed#/300085000000042084" 
                  frameBorder="0" 
                  allowFullScreen
                  className="w-full h-[600px] rounded-lg"
                  title="Cuephoria Booking System"
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
                            <div className="text-2xl font-bold text-gray-400 line-through mr-3">₹300</div>
                            <div className="text-2xl font-bold text-white">₹225</div>
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
                            <div className="text-2xl font-bold text-gray-400 line-through mr-3">₹150</div>
                            <div className="text-2xl font-bold text-white">₹113</div>
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
                          <TableCell className="py-4 text-right text-neon-blue font-semibold">₹199</TableCell>
                        </TableRow>
                        <TableRow className="border-b border-gaming-accent hover:bg-gaming-accent/10">
                          <TableCell className="py-4">
                            <div>
                              <h5 className="text-lg font-semibold text-gray-300">🌟 Gold Membership</h5>
                              <p className="text-sm text-gray-400">Up to 4 players • Priority bookings</p>
                            </div>
                          </TableCell>
                          <TableCell className="py-4 text-right text-neon-pink font-semibold">₹349</TableCell>
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
