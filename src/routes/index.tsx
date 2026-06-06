import { createFileRoute } from "@tanstack/react-router";
import { WeddingApp } from "@/components/WeddingApp";
// import "@fontsource/great-vibes";

export const Route = createFileRoute("/")({
  component: WeddingApp,
});
