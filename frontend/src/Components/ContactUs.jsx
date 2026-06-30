import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  User,
  MessageSquare,
  AtSign,
  ArrowRight,
} from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import SEO from '../Components/SEO';

const api=import.meta.env.VITE_JOURNALS_FORM_API
const InputField = ({ label, icon: Icon, type = "text", textarea = false }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative mb-6">
        <SEO title="Contact Us" url="/contact" />
      <motion.div
        animate={{
          borderColor: focused
            ? "rgba(99, 102, 241, 0.5)"
            : "rgba(226, 232, 240, 1)",
          backgroundColor: focused
            ? "rgba(255, 255, 255, 1)"
            : "rgba(248, 250, 252, 0.5)",
        }}
        className="relative rounded-2xl border transition-colors duration-300 overflow-hidden group"
      >
        <div className="absolute top-4 left-4 text-slate-400 group-hover:text-indigo-500 transition-colors duration-300">
          <Icon className="w-5 h-5" />
        </div>
        {textarea ? (
          <textarea
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => setValue(e.target.value)}
            className="w-full bg-transparent border-none outline-none py-4 pl-12 pr-4 text-slate-700 min-h-[120px] resize-none placeholder-transparent relative z-10"
            placeholder={label}
          />
        ) : (
          <input
            type={type}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => setValue(e.target.value)}
            className="w-full bg-transparent border-none outline-none py-4 pl-12 pr-4 text-slate-700 placeholder-transparent relative z-10"
            placeholder={label}
          />
        )}

        <motion.label
          initial={false}
          animate={{
            y: focused || value ? -24 : 0,
            x: focused || value ? -4 : 0,
            scale: focused || value ? 0.85 : 1,
            opacity: focused || value ? 0.7 : 0.5,
          }}
          className="absolute top-4 left-12 text-slate-500 pointer-events-none origin-left"
        >
          {label}
        </motion.label>

        {/* Glowing bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 origin-left"
        />
      </motion.div>
    </div>
  );
};

const ContactUs = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
try {
      const form = e.target;

      const payload = {
        name: form[0].value,
        email: form[1].value,
        message: form[2].value,
      };

      await axios.post(`${api}/form/journalsform`, payload);

      setSending(false);
      setSent(true);
      toast.success("Message sent successfully!");

      form.reset();
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      setSending(false);
      toast.error("Failed to send message!");
      console.error(error);
    }
  };
  // 3D Tilt Logic for the form card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 overflow-hidden relative selection:bg-indigo-100 selection:text-indigo-900">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl mix-blend-multiply animate-blob" />
        <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            We'd love to hear from you
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 font-display">
            Let's Start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">
              Conversation
            </span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-lg">
            Have a question about submissions, ethics, or just want to say
            hello? We're here to help.
          </p>

          <div className="space-y-8">
            {[
              {
                icon: Mail,
                title: "Email Us",
                text: "info.helixjournals@gmail.com",
              },
              { icon: Phone, title: "Call Us", text: "+91 7075-782-798" },
              {
                icon: MapPin,
                title: "Visit Us",
                text: "Mahaveer Radiance Near Madhapur metro station, CBI Colony, Hyderabad, Telangana 500081",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 group-hover:text-indigo-600 transition-colors">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Form Card */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative perspective-1000"
        >
          <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50">
            <form onSubmit={handleSubmit}>
              <InputField label="Your Name" icon={User} />
              <InputField label="Email Address" icon={AtSign} type="email" />
              <InputField
                label="How can we help?"
                icon={MessageSquare}
                textarea
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-3 transition-all duration-300 ${sent ? "bg-emerald-500" : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/25"}`}
                disabled={sending || sent}
              >
                <AnimatePresence mode="wait">
                  {sending ? (
                    <motion.div
                      key="sending"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin cursor-pointer" />
                    </motion.div>
                  ) : sent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <span >Send Message</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>

            {/* Decorative floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-indigo-200 to-sky-200 rounded-full blur-xl opacity-60 -z-10"
            />
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-xl opacity-60 -z-10"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
