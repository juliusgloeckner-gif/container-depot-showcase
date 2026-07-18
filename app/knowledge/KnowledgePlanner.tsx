import type { KnowledgeConfig } from "./data";
import { SizeEducationTool } from "../SizeEducationTool";

export function KnowledgePlanner({ config }: { config: KnowledgeConfig }) {
  return <SizeEducationTool profile={config.key} quotePath={`/${config.key}`} />;
}
