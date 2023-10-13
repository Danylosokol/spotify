"use client";

import React, { useEffect, useState } from "react";

import Button from "@/components/Button";
import { postData } from "@/libs/helpers";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { useUser } from "@/hooks/useUser";

const AccountContent = () => {
  const router = useRouter();
  const subscribeModal = useSubscribeModal();
  const { isLoading, subscription, user } = useUser();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [router, user, isLoading]);

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({ url: "/api/create-portal-link" });
      window.location.assign(url);
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-7 px-6">
      {(!subscription && !isLoading) && (
        <div className="flex flex-col gap-y-4">
          <p>No active plan.</p>
          <Button
            className="w-[300px]"
            onClick={subscribeModal.onOpen}
            disabled={loading || isLoading}
          >
            Subscribe
          </Button>
        </div>
      )}
      {subscription && (
        <div className="flex flex-col gap-y-4">
          <p>
            You are currently on the{" "}
            <b>{subscription?.prices?.products?.name} plan.</b>
          </p>
          <Button
            className="w-[300px]"
            onClick={redirectToCustomerPortal}
            disabled={loading || isLoading}
          >
            Open customer portal
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccountContent;
