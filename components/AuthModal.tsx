"use client";

import React, {useEffect} from "react";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";

import { Auth } from "@supabase/auth-ui-react";
import Modal from "./Modal";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useRouter } from "next/navigation";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const {session} = useSessionContext();
  const {onClose, isOpen} = useAuthModal();

  const onChange = (open: boolean) => {
    if(!open){
      onClose();
    }
  }

  useEffect(() => {
    if(session && isOpen){
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        theme="dark"
        magicLink
        providers={["github"]}
        supabaseClient={supabaseClient}   
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e"
              }
            }
          }
        }}     
      />
    </Modal>
  );
};

export default AuthModal;
