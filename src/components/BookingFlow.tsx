import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format, addDays, differenceInDays } from "date-fns";
import { Calendar, Users, CreditCard, Check, ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import { Room } from "@/data/rooms";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface BookingFlowProps {
  room: Room;
  isOpen: boolean;
  onClose: () => void;
}

type Step = "dates" | "guests" | "payment" | "confirmation";

const BookingFlow = ({ room, isOpen, onClose }: BookingFlowProps) => {
  const [currentStep, setCurrentStep] = useState<Step>("dates");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [guestEmail, setGuestEmail] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const totalPrice = nights * room.price;

  const steps: { id: Step; label: string; icon: typeof Calendar }[] = [
    { id: "dates", label: "Dates", icon: Calendar },
    { id: "guests", label: "Details", icon: Users },
    { id: "payment", label: "Payment", icon: CreditCard },
    { id: "confirmation", label: "Done", icon: Check },
  ];

  const handleNext = () => {
    const stepOrder: Step[] = ["dates", "guests", "payment", "confirmation"];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      if (currentStep === "payment") {
        handlePayment();
      } else {
        setCurrentStep(stepOrder[currentIndex + 1]);
      }
    }
  };

  const handleBack = () => {
    const stepOrder: Step[] = ["dates", "guests", "payment", "confirmation"];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const generateBookingRef = () => {
    return `645-${Date.now().toString(36).toUpperCase()}`;
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    const ref = generateBookingRef();
    setBookingRef(ref);

    // Simulate payment processing
    // In production, this would integrate with Paystack/Flutterwave
    // and your backend would send email confirmation via Resend
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Booking data ready for backend integration
    const bookingData = {
      reference: ref,
      room: room.name,
      roomId: room.id,
      checkIn: checkIn?.toISOString(),
      checkOut: checkOut?.toISOString(),
      nights,
      guests,
      guestName,
      guestEmail,
      guestPhone,
      totalPrice: Math.round(totalPrice * 1.05),
      timestamp: new Date().toISOString(),
    };

    console.log("Booking data for backend:", bookingData);
    // TODO: When backend is ready, send this data to your API
    // await fetch('/api/bookings', { method: 'POST', body: JSON.stringify(bookingData) });

    setIsProcessing(false);
    setBookingComplete(true);
    setCurrentStep("confirmation");
  };

  const canProceed = () => {
    switch (currentStep) {
      case "dates":
        return checkIn && checkOut && nights > 0;
      case "guests":
        return guests >= 1 && guests <= room.capacity && guestName.trim() && guestEmail.trim() && guestPhone.trim();
      case "payment":
        return true;
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-lg bg-card border border-border rounded-3xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5 text-foreground/60" />
          </button>

          {/* Header */}
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-display font-medium text-foreground mb-1">
              Book {room.name}
            </h2>
            <p className="text-sm text-foreground/50">₦{room.price.toLocaleString()} per night</p>
          </div>

          {/* Progress Steps */}
          <div className="px-6 py-4 border-b border-border">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const isActive = step.id === currentStep;
                const isPast = steps.findIndex((s) => s.id === currentStep) > index;
                return (
                  <div key={step.id} className="flex items-center">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                        isActive ? "bg-primary text-primary-foreground" : isPast ? "bg-primary/20 text-primary" : "bg-muted text-foreground/40"
                      )}
                    >
                      {isPast ? <Check className="w-4 h-4" /> : <step.icon className="w-4 h-4" />}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={cn("w-8 h-0.5 mx-1", isPast ? "bg-primary" : "bg-muted")} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 min-h-[320px]">
            <AnimatePresence mode="wait">
              {/* Dates Step */}
              {currentStep === "dates" && (
                <motion.div
                  key="dates"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-display font-medium text-foreground mb-4">Select your dates</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Popover>
                      <PopoverTrigger asChild>
                        <button className="w-full p-4 rounded-xl border border-border hover:border-primary/50 text-left transition-colors">
                          <span className="text-xs text-foreground/50 uppercase tracking-wider block mb-1">Check-in</span>
                          <span className="text-foreground font-medium">
                            {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                          </span>
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={checkIn}
                          onSelect={(date) => {
                            setCheckIn(date);
                            if (date && (!checkOut || checkOut <= date)) {
                              setCheckOut(addDays(date, 1));
                            }
                          }}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <button className="w-full p-4 rounded-xl border border-border hover:border-primary/50 text-left transition-colors">
                          <span className="text-xs text-foreground/50 uppercase tracking-wider block mb-1">Check-out</span>
                          <span className="text-foreground font-medium">
                            {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
                          </span>
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          disabled={(date) => date <= (checkIn || new Date())}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {nights > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl glass-gold text-center"
                    >
                      <span className="text-foreground/70">{nights} night{nights > 1 ? "s" : ""}</span>
                      <span className="mx-2 text-foreground/30">·</span>
                      <span className="text-primary font-medium">₦{totalPrice.toLocaleString()}</span>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Guests Step */}
              {currentStep === "guests" && (
                <motion.div
                  key="guests"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-display font-medium text-foreground">Guest Details</h3>
                  
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full p-4 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-foreground/40 focus:border-primary/50 focus:outline-none transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full p-4 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-foreground/40 focus:border-primary/50 focus:outline-none transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full p-4 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-foreground/40 focus:border-primary/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-6 pt-2">
                    <button
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      className="w-10 h-10 rounded-full border border-border hover:border-primary/50 flex items-center justify-center transition-colors"
                    >
                      <span className="text-lg text-foreground">−</span>
                    </button>
                    <div className="text-center">
                      <span className="text-3xl font-display font-medium text-gradient-gold">{guests}</span>
                      <p className="text-xs text-foreground/50">guests</p>
                    </div>
                    <button
                      onClick={() => setGuests((g) => Math.min(room.capacity, g + 1))}
                      className="w-10 h-10 rounded-full border border-border hover:border-primary/50 flex items-center justify-center transition-colors"
                    >
                      <span className="text-lg text-foreground">+</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Payment Step */}
              {currentStep === "payment" && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-display font-medium text-foreground mb-4">Payment Summary</h3>
                  
                  <div className="space-y-3 p-4 rounded-xl bg-muted/50">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">₦{room.price.toLocaleString()} × {nights} nights</span>
                      <span className="text-foreground">₦{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Service fee</span>
                      <span className="text-foreground">₦{Math.round(totalPrice * 0.05).toLocaleString()}</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between font-medium">
                      <span className="text-foreground">Total</span>
                      <span className="text-gradient-gold text-lg">₦{Math.round(totalPrice * 1.05).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
                    <p className="text-sm text-foreground/70 text-center">
                      Click "Confirm Booking" to proceed with payment via Paystack
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Confirmation Step */}
              {currentStep === "confirmation" && bookingComplete && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-10 h-10 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-display font-medium text-foreground mb-2">
                    Booking Confirmed!
                  </h3>
                  <p className="text-foreground/60 mb-6">
                    A confirmation has been sent to your WhatsApp
                  </p>

                  <div className="p-4 rounded-xl glass-gold text-sm space-y-2">
                    <p><span className="text-foreground/60">Reference:</span> <span className="font-mono text-primary">645-{Date.now().toString(36).toUpperCase()}</span></p>
                    <p><span className="text-foreground/60">Suite:</span> {room.name}</p>
                    <p><span className="text-foreground/60">Check-in:</span> {checkIn && format(checkIn, "MMM dd, yyyy")}</p>
                    <p><span className="text-foreground/60">Check-out:</span> {checkOut && format(checkOut, "MMM dd, yyyy")}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Actions */}
          {currentStep !== "confirmation" && (
            <div className="p-6 border-t border-border flex items-center justify-between">
              <button
                onClick={handleBack}
                disabled={currentStep === "dates"}
                className="flex items-center gap-2 text-foreground/60 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={handleNext}
                disabled={!canProceed() || isProcessing}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all"
              >
                {isProcessing ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>{currentStep === "payment" ? "Confirm Booking" : "Continue"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}

          {/* Close on Confirmation */}
          {currentStep === "confirmation" && (
            <div className="p-6 border-t border-border">
              <button
                onClick={onClose}
                className="w-full py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingFlow;
