"use client";

import React from "react";
import DocumentPreview from "./DocumentPreview";
import { PortfolioDocument } from "@/types/portfolio";

interface CertificateModalProps {
  cert: any;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  if (!cert) return null;

  // Convert to PortfolioDocument shape if needed
  const doc: PortfolioDocument = {
    id: cert.id || "document",
    title: cert.title || "Document",
    issuer: cert.issuer || "Institution",
    type: "certificate",
    category: "certification",
    filePath: cert.filePath || cert.fileUrl || "",
    issueDate: cert.date || cert.issueDate,
    credentialId: cert.credentialId,
    badgeText: cert.badgeText || "Certificate",
    description: cert.description,
    highlights: cert.highlights,
    skillsGained: cert.skillsGained,
    fileAvailable: Boolean(cert.filePath || cert.fileUrl),
  };

  return <DocumentPreview document={doc} onClose={onClose} />;
}
