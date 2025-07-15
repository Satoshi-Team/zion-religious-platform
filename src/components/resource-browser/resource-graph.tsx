import React from 'react'
import { useEffect, useRef } from "react"
import * as d3 from "d3"
import { type ResourceReference } from "@/lib/types"

// Extend the node interface with D3's SimulationNodeDatum
interface ResourceNode extends d3.SimulationNodeDatum {
  id: string
  type: "content" | "meditation" | "sacred_text" | "study"
  x?: number
  y?: number
}

// Update the ResourceLink interface to handle D3's runtime behavior
interface ResourceLink extends d3.SimulationLinkDatum<ResourceNode> {
  source: ResourceNode | string
  target: ResourceNode | string
  relationship?: string
}

interface ResourceGraphProps {
  resources: ResourceReference[]
  onNodeClick: (resourceId: string) => void
  selectedId?: string
}

export function ResourceGraph({ resources, onNodeClick, selectedId }: ResourceGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const width = 800
    const height = 600
    const svg = d3.select(svgRef.current)
    
    // Create nodes and links from resources
    const nodes: ResourceNode[] = resources.flatMap(resource => [
      { id: resource.sourceId, type: resource.sourceType },
      ...resource.relatedResources.map(related => ({
        id: related.id,
        type: related.type
      }))
    ])

    const links: ResourceLink[] = resources.flatMap(resource =>
      resource.relatedResources.map(related => ({
        source: resource.sourceId,
        target: related.id,
        relationship: related.relationship
      }))
    )

    // Create force simulation
    const simulation = d3.forceSimulation<ResourceNode>(nodes)
      .force("link", d3.forceLink<ResourceNode, ResourceLink>(links).id(d => d.id))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))

    // Draw links
    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 2)

    // Draw nodes
    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 8)
      .attr("fill", d => getColorByType(d.type))
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .classed("selected", d => d.id === selectedId)
      .on("click", (event, d) => onNodeClick(d.id))

    // Add labels
    const label = svg.append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text(d => d.id)
      .attr("font-size", "12px")
      .attr("dx", 12)
      .attr("dy", 4)

    // Update positions on simulation tick
    simulation.on("tick", () => {
      link
        .attr("x1", d => ((d.source as unknown) as ResourceNode).x ?? 0)
        .attr("y1", d => ((d.source as unknown) as ResourceNode).y ?? 0)
        .attr("x2", d => ((d.target as unknown) as ResourceNode).x ?? 0)
        .attr("y2", d => ((d.target as unknown) as ResourceNode).y ?? 0)

      node
        .attr("cx", d => d.x ?? 0)
        .attr("cy", d => d.y ?? 0)

      label
        .attr("x", d => d.x ?? 0)
        .attr("y", d => d.y ?? 0)
    })

    return () => {
      simulation.stop()
    }
  }, [resources, selectedId, onNodeClick])

  return (
    <svg
      ref={svgRef}
      className="w-full h-[600px] bg-gray-50 rounded-lg"
      viewBox="0 0 800 600"
    />
  )
}

function getColorByType(type: string): string {
  const colors = {
    meditation: "#4F46E5",
    sacred_text: "#DC2626",
    study: "#059669",
    content: "#D97706"
  }
  return colors[type as keyof typeof colors] || "#6B7280"
} 