import { computeInsights } from "@/lib/insights";

export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(computeInsights());
}