'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/auth-actions";

export function LoginForm() {
  const router = useRouter();
  const [state, formAction] = useActionState(login, null);

  useEffect(() => {
    if (!state) return;
    
    if (state.error) {
      toast.error(state.message);
    } else {
      toast.success('Login berhasil!');
      router.push('/dashboard');
    }
  }, [state, router]);

  return (
    <div className="animate-fadeIn">
      <Card className="mx-auto max-w-sm backdrop-blur-sm border-none shadow-xl overflow-hidden relative">
        {/* Gradient background and effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00A8FF]/20 to-[#0086CC]/30 opacity-50" />
        <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-[#00A8FF] filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-[#0086CC] filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
        
        <CardHeader className="space-y-1 relative">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#00A8FF] to-[#0086CC] bg-clip-text text-transparent animate-gradient">
            Masuk
          </CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Masukkan email dan password Anda untuk masuk
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative">
          <form action={formAction} className="space-y-5">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative group">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    autoComplete="username"
                    className="bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 rounded-xl transition-all duration-300 
                    focus:ring-2 focus:ring-[#00A8FF] focus:border-transparent 
                    group-hover:border-[#00A8FF]/50 pl-4 h-11"
                  />
                  <div className="absolute inset-0 rounded-xl border border-[#00A8FF]/0 group-hover:border-[#00A8FF]/20 pointer-events-none transition-all duration-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <Link 
                    href="#" 
                    className="text-sm text-[#00A8FF] hover:text-[#0086CC] transition-colors font-medium"
                  >
                    Lupa password?
                  </Link>
                </div>
                <div className="relative group">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={6}
                    autoComplete="current-password"
                    className="bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 rounded-xl transition-all duration-300 
                    focus:ring-2 focus:ring-[#00A8FF] focus:border-transparent 
                    group-hover:border-[#00A8FF]/50 pl-4 h-11"
                  />
                  <div className="absolute inset-0 rounded-xl border border-[#00A8FF]/0 group-hover:border-[#00A8FF]/20 pointer-events-none transition-all duration-500" />
                </div>
              </div>
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full h-11 bg-gradient-to-r from-[#00A8FF] to-[#0086CC] hover:from-[#0086CC] hover:to-[#00A8FF] 
                  text-white font-semibold py-2 rounded-xl shadow-md hover:shadow-lg hover:shadow-[#00A8FF]/20 
                  transition-all duration-300 border-none hover:scale-[1.02] active:scale-[0.98]"
                >
                  Masuk
                </Button>
              </div>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Belum punya akun?{" "}
              <Link 
                href="/signup" 
                className="font-medium text-[#00A8FF] hover:text-[#0086CC] transition-colors"
              >
                Daftar sekarang
              </Link>
            </span>
          </div>
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