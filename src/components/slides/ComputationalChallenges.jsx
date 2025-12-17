import React from "react";
import ChallengeCard from "./ChallengeCard";
import { Network, Zap, Users, Globe } from "lucide-react";
import "../../styles/ComputationalChallenges.css";

export default function ComputationalChallenges() {
  const challenges = [
    {
      id: 1,
      title: "Strong Network Capabilities for Real-Time Interaction",
      description: "The web's infrastructure provides connectivity through WebSockets and WebRTC protocols. Real-time communication happens instantly in the browser, leveraging server resources and CDN infrastructure.",
      keywords: "WebSockets, WebRTC, CDN, Network Infrastructure",
      Icon: Network
    },
    {
      id: 2,
      title: "Lightweight and Low-Friction to Use",
      description: "Web applications run directly in the browser, requiring no downloads or device-specific dependencies. The browser's runtime environment handles resource allocation and memory management automatically.",
      keywords: "Browser Runtime, Resource Allocation, Zero Installation",
      Icon: Zap
    },
    {
      id: 3,
      title: "Built-In Peer-to-Peer Collaboration",
      description: "Modern web technologies support P2P connections out of the box. WebRTC enables direct device-to-device communication, reducing server load and enabling fast, decentralized interactions.",
      keywords: "P2P, WebRTC, Decentralized, Device-to-Device",
      Icon: Users
    },
    {
      id: 4,
      title: "Universal Accessibility Across Devices",
      description: "The web runs everywhere—phones, tablets, laptops, and low-spec devices. A simple URL becomes an entry point, leveraging standardized web protocols and adaptive rendering engines.",
      keywords: "Cross-Platform, Web Protocols, Adaptive Rendering",
      Icon: Globe
    }
  ];

  return (
    <div className="computational-challenges-container">
      <div className="challenges-grid-2x2">
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            title={challenge.title}
            description={challenge.description}
            keywords={challenge.keywords}
            Icon={challenge.Icon}
          />
        ))}
      </div>
    </div>
  );
}
