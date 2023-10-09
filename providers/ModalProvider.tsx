"use client";

import React, { useEffect, useState } from "react";

import Modal from "@/components/Modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Test modal"
      description="Test description"
      isOpen={true}
      onChange={() => {}}
    >
      Test Children
    </Modal>
  );
};

export default ModalProvider;
