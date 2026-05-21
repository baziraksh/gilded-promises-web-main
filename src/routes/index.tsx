import { createFileRoute } from "@tanstack/react-router";
import { WeddingApp } from "@/components/WeddingApp";

export const Route = createFileRoute("/")({
  component: WeddingApp,
});
