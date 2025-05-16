'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/lib/auth-actions";

// Animation variants for staggered animations
const formItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
    },
  }),
};

export function SignUpForm() {
  const router = useRouter();
  const [state, formAction] = useActionState(register, null);

  useEffect(() => {
    if (!state) return;
    
    if (state.error) {
      toast.error(state.message);
    } else {
      toast.success(state.message);
      router.push('/login');
    }
  }, [state, router]);

  return (
    <div className="animate-fadeIn">
      {/* Logo Header */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div className="bg-[#00A8FF] text-white font-bold text-xl w-12 h-12 rounded-md flex items-center justify-center">
            Dia
          </div>
          <span className="text-[#1E293B] dark:text-white text-2xl font-bold ml-2">DiaMate</span>
        </div>
      </div>
      
      <Card className="mx-auto max-w-sm backdrop-blur-sm border-none shadow-xl overflow-hidden relative">
        {/* Gradient background and effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00A8FF]/20 to-[#0086CC]/30 opacity-50" />
        <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-[#00A8FF] filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-[#0086CC] filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
        
        <CardHeader className="space-y-1 relative">
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#00A8FF] to-[#0086CC] bg-clip-text text-transparent animate-gradient">
              Daftar Akun
            </CardTitle>
          </motion.div>
          
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CardDescription className="text-gray-500 dark:text-gray-400 mt-2">
              Masukkan informasi Anda untuk membuat akun baru
            </CardDescription>
          </motion.div>
        </CardHeader>
        
        <CardContent className="relative pb-6">
          <form action={formAction}>
            <div className="grid gap-4">
              <motion.div 
                className="grid grid-cols-2 gap-4"
                custom={0}
                initial="hidden"
                animate="visible"
                variants={formItemVariants}
              >
                <div className="grid gap-2">
                  <Label htmlFor="first-name" className="text-sm font-medium">Nama Depan</Label>
                  <div className="relative group">
                    <Input
                      name="first-name"
                      id="first-name"
                      placeholder="Jon"
                      required
                      minLength={2}
                      className="bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 rounded-xl transition-all duration-300 
                      focus:ring-2 focus:ring-[#00A8FF] focus:border-transparent 
                      group-hover:border-[#00A8FF]/50 pl-4 h-11"
                    />
                    <div className="absolute inset-0 rounded-xl border border-[#00A8FF]/0 group-hover:border-[#00A8FF]/20 pointer-events-none transition-all duration-500" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name" className="text-sm font-medium">Nama Belakang</Label>
                  <div className="relative group">
                    <Input
                      name="last-name"
                      id="last-name"
                      placeholder="Doe"
                      required
                      minLength={2}
                      className="bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 rounded-xl transition-all duration-300 
                      focus:ring-2 focus:ring-[#00A8FF] focus:border-transparent 
                      group-hover:border-[#00A8FF]/50 pl-4 h-11"
                    />
                    <div className="absolute inset-0 rounded-xl border border-[#00A8FF]/0 group-hover:border-[#00A8FF]/20 pointer-events-none transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="grid gap-2"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={formItemVariants}
              >
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative group">
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 rounded-xl transition-all duration-300 
                    focus:ring-2 focus:ring-[#00A8FF] focus:border-transparent 
                    group-hover:border-[#00A8FF]/50 pl-4 h-11"
                  />
                  <div className="absolute inset-0 rounded-xl border border-[#00A8FF]/0 group-hover:border-[#00A8FF]/20 pointer-events-none transition-all duration-500" />
                </div>
              </motion.div>
              
              <motion.div 
                className="grid gap-2"
                custom={2}
                initial="hidden"
                animate="visible"
                variants={formItemVariants}
              >
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <div className="relative group">
                  <Input
                    name="password"
                    id="password"
                    type="password"
                    required
                    minLength={6}
                    className="bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 rounded-xl transition-all duration-300 
                    focus:ring-2 focus:ring-[#00A8FF] focus:border-transparent 
                    group-hover:border-[#00A8FF]/50 pl-4 h-11"
                  />
                  <div className="absolute inset-0 rounded-xl border border-[#00A8FF]/0 group-hover:border-[#00A8FF]/20 pointer-events-none transition-all duration-500" />
                </div>
              </motion.div>
              
              <motion.div 
                className="grid gap-2"
                custom={3}
                initial="hidden"
                animate="visible"
                variants={formItemVariants}
              >
                <Label htmlFor="confirm-password" className="text-sm font-medium">Konfirmasi Password</Label>
                <div className="relative group">
                  <Input
                    name="confirm-password"
                    id="confirm-password"
                    type="password"
                    required
                    className="bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 rounded-xl transition-all duration-300 
                    focus:ring-2 focus:ring-[#00A8FF] focus:border-transparent 
                    group-hover:border-[#00A8FF]/50 pl-4 h-11"
                  />
                  <div className="absolute inset-0 rounded-xl border border-[#00A8FF]/0 group-hover:border-[#00A8FF]/20 pointer-events-none transition-all duration-500" />
                </div>
              </motion.div>
              
              <motion.div 
                className="grid gap-2"
                custom={4}
                initial="hidden"
                animate="visible"
                variants={formItemVariants}
              >
                <Label htmlFor="age" className="text-sm font-medium">Umur</Label>
                <div className="relative group">
                  <Input 
                    name="age" 
                    id="age" 
                    type="number" 
                    min="1" 
                    max="120" 
                    required 
                    className="bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 rounded-xl transition-all duration-300 
                    focus:ring-2 focus:ring-[#00A8FF] focus:border-transparent 
                    group-hover:border-[#00A8FF]/50 pl-4 h-11"
                  />
                  <div className="absolute inset-0 rounded-xl border border-[#00A8FF]/0 group-hover:border-[#00A8FF]/20 pointer-events-none transition-all duration-500" />
                </div>
              </motion.div>
              
              <motion.div 
                className="grid gap-2"
                custom={5}
                initial="hidden"
                animate="visible"
                variants={formItemVariants}
              >
                <Label htmlFor="gender" className="text-sm font-medium">Jenis Kelamin</Label>
                <div className="relative group">
                  <Select name="gender" required>
                    <SelectTrigger 
                      id="gender" 
                      className="w-full bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 rounded-xl transition-all duration-300
                      focus:ring-2 focus:ring-[#00A8FF] focus:border-transparent
                      group-hover:border-[#00A8FF]/50 h-11"
                    >
                      <SelectValue placeholder="Pilih Jenis Kelamin" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg">
                      <SelectItem value="Laki Laki" className="focus:bg-[#00A8FF]/10 cursor-pointer">Laki Laki</SelectItem>
                      <SelectItem value="Perempuan" className="focus:bg-[#00A8FF]/10 cursor-pointer">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="absolute inset-0 rounded-xl border border-[#00A8FF]/0 group-hover:border-[#00A8FF]/20 pointer-events-none transition-all duration-500" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2"
              >
                <Button 
                  type="submit" 
                  className="w-full h-11 bg-gradient-to-r from-[#00A8FF] to-[#0086CC] hover:from-[#0086CC] hover:to-[#00A8FF] 
                  text-white font-semibold py-2 rounded-xl shadow-md hover:shadow-lg hover:shadow-[#00A8FF]/20 
                  transition-all duration-300 border-none hover:scale-[1.02] active:scale-[0.98]"
                >
                  Buat Akun
                </Button>
              </motion.div>
            </div>
          </form>
          
          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Sudah punya akun?{" "}
              <Link 
                href="/login" 
                className="font-medium text-[#00A8FF] hover:text-[#0086CC] transition-colors"
              >
                Masuk
              </Link>
            </span>
          </motion.div>
        </CardContent>
      </Card>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}