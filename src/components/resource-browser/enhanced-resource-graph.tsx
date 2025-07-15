import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { GraphControls } from "./resource-graph-controls"
import { type ResourceReference } from "@/lib/types"
import { SimulationNodeDatum } from 'd3'

// Add this helper function before the component
function getColorByType(type: string): string {
  const colorMap: Record<string, string> = {
    user: "#4299E1",     // blue
    document: "#48BB78",  // green
    project: "#ED8936",   // orange
    task: "#9F7AEA",     // purple
    unknown: "#A0AEC0"   // gray
  }
  
  return colorMap[type.toLowerCase()] || colorMap.unknown
}

interface Link {
  source: CustomNode & { x: number; y: number }
  target: CustomNode & { x: number; y: number }
  relationship: string
}

interface CustomNode extends SimulationNodeDatum {
  id: string
  type: string
}

interface EnhancedResourceGraphProps {
  resources: ResourceReference[]
  onNodeClick: (resourceId: string) => void
  selectedId?: string
}

// First, let's add proper types for our drag event
interface DragEvent extends d3.D3DragEvent<SVGGElement, CustomNode, CustomNode> {}

export function EnhancedResourceGraph({
  resources,
  onNodeClick,
  selectedId
}: EnhancedResourceGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [zoom, setZoom] = useState(1)
  const [relationshipType, setRelationshipType] = useState("all")

  useEffect(() => {
    if (!svgRef.current) return

    const width = 800
    const height = 600
    const svg = d3.select(svgRef.current)

    // Clear previous content
    svg.selectAll("*").remove()

    // Create zoom behavior
    const zoomBehavior = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 2])
      .on("zoom", (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        // Convert the transform to a string representation
        container.attr("transform", event.transform.toString())
      })

    // Safe type assertion since we know the element is SVGSVGElement
    svg.call((g: d3.Selection<SVGSVGElement, unknown, null, undefined>) => 
      zoomBehavior(g)
    )

    // Create container for zoomable content
    const container = svg.append("g")

    // Filter links by relationship type
    const nodeIds = new Set([
      ...resources.map(r => r.sourceId),
      ...resources.flatMap(r => r.relatedResources.map(rr => rr.id))
    ])

    const nodes: CustomNode[] = Array.from(nodeIds).map(id => {
      const resource = resources.find(r => r.sourceId === id)
      return {
        id,
        type: resource?.sourceType || "unknown",
        x: undefined,
        y: undefined,
        vx: undefined,
        vy: undefined,
        fx: undefined,
        fy: undefined
      }
    })

    // Update the filteredLinks creation with proper typing
    const filteredLinks: Link[] = resources.flatMap(resource =>
      resource.relatedResources
        .filter(related => 
          relationshipType === "all" || related.relationship === relationshipType
        )
        .map(related => {
          const sourceNode = nodes.find(n => n.id === resource.sourceId)!
          const targetNode = nodes.find(n => n.id === related.id)!
          
          // Ensure x and y coordinates are initialized to 0 if undefined
          return {
            source: {
              ...sourceNode,
              x: sourceNode.x ?? 0,
              y: sourceNode.y ?? 0
            },
            target: {
              ...targetNode,
              x: targetNode.x ?? 0,
              y: targetNode.y ?? 0
            },
            relationship: related.relationship
          }
        })
    )

    // Enhanced force simulation
    const simulation = d3.forceSimulation<CustomNode>(nodes)
      .force("link", d3.forceLink<CustomNode, any>(filteredLinks).id(d => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(30))

    // Draw links with arrows
    const link = container.append("g")
      .selectAll<SVGPathElement, Link>("path")
      .data(filteredLinks)
      .join("path")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 2)
      .attr("marker-end", "url(#arrow)")

    // Add arrow markers
    svg.append("defs").selectAll("marker")
      .data(["arrow"])
      .join("marker")
      .attr("id", "arrow")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 15)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("fill", "#999")
      .attr("d", "M0,-5L10,0L0,5")

    // Update the drag behavior with proper typing
    const drag = d3.drag<SVGGElement, CustomNode>()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended)

    // Enhanced nodes with icons and hover effects
    const node = container.append("g")
      .selectAll<SVGGElement, CustomNode>("g")
      .data(nodes)
      .join("g")
      .call(drag)
      .on("click", (event, d) => onNodeClick(d.id))

    node.append("circle")
      .attr("r", 8)
      .attr("fill", d => getColorByType(d.type))
      .attr("stroke", d => d.id === selectedId ? "#000" : "#fff")
      .attr("stroke-width", d => d.id === selectedId ? 2 : 1)

    // Add hover tooltips
    node.append("title")
      .text(d => `${d.id} (${d.type})`)

    // Update positions on simulation tick
    simulation.on("tick", () => {
      link.attr("d", (d: Link) => {
        // Ensure coordinates are defined, fallback to 0 if undefined
        const sourceX = d.source.x ?? 0
        const sourceY = d.source.y ?? 0
        const targetX = d.target.x ?? 0
        const targetY = d.target.y ?? 0
        
        const dx = targetX - sourceX
        const dy = targetY - sourceY
        const dr = Math.sqrt(dx * dx + dy * dy)
        
        return `M${sourceX},${sourceY}A${dr},${dr} 0 0,1 ${targetX},${targetY}`
      })

      node.attr("transform", (d: CustomNode) => {
        const x = d.x ?? 0
        const y = d.y ?? 0
        return `translate(${x},${y})`
      })
    })

    // Update the drag functions with proper typing
    function dragstarted(event: DragEvent) {
      if (!event.active) simulation.alphaTarget(0.3).restart()
      event.subject.fx = event.x
      event.subject.fy = event.y
    }

    function dragged(event: DragEvent) {
      event.subject.fx = event.x
      event.subject.fy = event.y
    }

    function dragended(event: DragEvent) {
      if (!event.active) simulation.alphaTarget(0)
      event.subject.fx = null
      event.subject.fy = null
    }

    // Update zoom transform
    zoomBehavior.scaleTo(svg, zoom)

    return () => {
      simulation.stop()
    }
  }, [resources, selectedId, onNodeClick, zoom, relationshipType])

  return (
    <div className="space-y-4">
      <GraphControls
        zoom={zoom}
        onZoomChange={setZoom}
        relationshipType={relationshipType}
        onRelationshipTypeChange={setRelationshipType}
        onResetView={() => {
          setZoom(1)
          setRelationshipType("all")
        }}
      />
      <svg
        ref={svgRef}
        className="w-full h-[600px] bg-gray-50 rounded-lg"
        viewBox="0 0 800 600"
      />
    </div>
  )
} 