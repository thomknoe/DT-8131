/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import Section from "../components/Section";
import * as d3 from "d3";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const data = {
  name: "User / Player",
  description:
    "The central actor — intent, imagination, and embodied input drive the parameters of AI-mediated world synthesis.",
  children: [
    // --- Layer 1: AI Mediation ---
    {
      name: "AI Mediation & Reasoning",
      description:
        "The cognitive substrate interpreting human intent through machine-learning and symbolic reasoning layers.",
      children: [
        {
          name: "Large Language Models (LLMs)",
          description:
            "Transformer-based architectures (GPT, Claude, Gemini) for semantic parsing, contextual generation, and few-shot dialogue synthesis.",
        },
        {
          name: "Generative Agents",
          description:
            "Autonomous multi-agent systems combining recurrent memory stores, goal inference, and simulation-time planning (e.g., Concordia).",
        },
        {
          name: "Knowledge Graphs & World Models",
          description:
            "Hybrid neural-symbolic data structures using graph embeddings and causal modeling to maintain persistent world state and logic.",
        },
      ],
    },

    // --- Layer 2: World Simulation ---
    {
      name: "Simulation & World Systems",
      description:
        "Computational substrates that translate AI inference into spatial, ecological, and narrative dynamics.",
      children: [
        {
          name: "Procedural Terrain Generation",
          description:
            "Noise and fractal algorithms (Perlin, Simplex, Diamond–Square) augmented by GPU-based erosion simulation for scalable terrain synthesis.",
        },
        {
          name: "Agent-Based Ecologies",
          description:
            "Discrete-time simulations of autonomous agents governed by behavioral heuristics, local perception, and feedback networks to model emergent ecosystems.",
        },
        {
          name: "Procedural Narrative Engines",
          description:
            "State-tracking and event-grammar systems using planning algorithms (e.g., HTN, GOAP) to generate adaptive quests and evolving storylines.",
        },
      ],
    },

    // --- Layer 3: Cultural & Community Ecosystem ---
    {
      name: "Community & Research Ecosystem",
      description:
        "Collaborative and critical frameworks shaping how AI world-building tools are developed, deployed, and interpreted.",
      children: [
        {
          name: "Speculative & Critical Design",
          description:
            "Design-fiction methodologies employing computational prototypes and simulation artifacts to interrogate sociotechnical imaginaries (Dunne & Raby, DOC Collective).",
        },
        {
          name: "Participatory Creation Cultures",
          description:
            "Distributed authoring networks using open-source pipelines (Unity ML-Agents, Blender, Godot) and collaborative data infrastructures (GitHub, Hugging Face).",
        },
        {
          name: "Game & Narrative Design Practices",
          description:
            "Cross-disciplinary pipelines integrating procedural generation APIs, narrative design grammars, and reinforcement-driven testing environments.",
        },
      ],
    },
  ],
};

const radialLevels = [100, 200, 300];
const levelLabels = ["AI Mediation", "Simulation", "Community"];
const levelColors = ["#ffffff33", "#ffffff20", "#ffffff15"];

export default function TechnologyEcosystemSection() {
  const svgRef = useRef();
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    const width = 1200;
    const height = 700;
    const radius = 300;

    const cluster = d3.cluster().size([2 * Math.PI, radius]);
    const root = cluster(d3.hierarchy(data));

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .style("font", "15px sans-serif")
      .style("user-select", "none");

    svg.selectAll("g").remove();
    const g = svg.append("g");

    // --- Rings ---
    g.append("g")
      .selectAll("circle")
      .data(radialLevels)
      .join("circle")
      .attr("r", (d) => d)
      .attr("fill", (d, i) => levelColors[i])
      .attr("stroke", (d, i) => levelColors[i])
      .attr("stroke-width", 1.2);

    // --- Links ---
    g.append("g")
      .attr("fill", "none")
      .attr("stroke", "#ffffff88")
      .attr("stroke-width", 2.4)
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr("d", (d) => {
        const [sx, sy] = polarToCartesian(d.source.x, d.source.y);
        const [tx, ty] = polarToCartesian(d.target.x, d.target.y);
        return `M${sx},${sy} L${tx},${ty}`;
      });

   // --- Nodes + Buttons ---
const node = g
  .append("g")
  .selectAll("g")
  .data(root.descendants())
  .join("g")
  .attr("transform", (d) => {
    const [x, y] = polarToCartesian(d.x, d.y);
    return `translate(${x}, ${y})`;
  });

// small white dot for each node
node.append("circle").attr("r", 4).attr("fill", "white");

// button label BELOW node with tiny spacing
const buttons = node
  .append("foreignObject")
  .attr("x", -75)
  .attr("y", 0) // 👈 small spacing below the node (was -55)
  .attr("width", 150)
  .attr("height", 38)
  .append("xhtml:button")
  .style("width", "100%")
  .style("height", "100%")
  .style("background", "rgba(255, 255, 255, 0.08)")
  .style("border", "1px solid rgba(255, 255, 255, 0.25)")
  .style("border-radius", "10px")
  .style("padding", "4px 10px")
  .style("color", "white")
  .style("font-size", "13px")
  .style("font-weight", "500")
  .style("cursor", "pointer")
  .style("white-space", "nowrap")
  .style("overflow", "hidden")
  .style("text-overflow", "ellipsis")
  .style("text-align", "center")
  .html((d) => `${d.data.name}`)
  .on("click", (event, d) => {
    const rect = event.target.getBoundingClientRect();
    setPopup({
      name: d.data.name,
      description: d.data.description || "No description provided.",
      x: rect.right + 10,
      y: rect.bottom - 10,
    });
  });

buttons
  .on("mouseover", function () {
    d3.select(this).style("background", "rgba(255, 255, 255, 0.18)");
  })
  .on("mouseout", function () {
    d3.select(this).style("background", "rgba(255, 255, 255, 0.08)");
  });


    function polarToCartesian(angle, radius) {
      return [
        Math.cos(angle - Math.PI / 2) * radius,
        Math.sin(angle - Math.PI / 2) * radius,
      ];
    }
  }, []);

  return (
    <Section title="Technological Ecosystem — Registers & Communities of Practice">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 relative">
        <svg ref={svgRef} className="w-full max-w-[1200px] h-[800px]" />

        <AnimatePresence>
          {popup && (
            <motion.div
              key={popup.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="
                fixed bottom-8 left-8 z-50
                bg-white/10 backdrop-blur-md text-white
                p-5 border border-white/20 rounded-2xl shadow-2xl
                w-[360px] h-[260px]
                flex flex-col justify-between
              "
            >
              <div>
                <div className="text-lg font-semibold mb-2">{popup.name}</div>
                <div className="text-sm text-white/80 leading-relaxed">
                  {popup.description}
                </div>
              </div>

              <button
                onClick={() => setPopup(null)}
                className="self-end mt-2 text-white/70 hover:text-white transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
