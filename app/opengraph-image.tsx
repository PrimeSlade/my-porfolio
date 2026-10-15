import { ogImage, ogSize } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name}, ${site.role}, with GitHub activity for the last 16 weeks`;
export const size = ogSize;
export const contentType = "image/png";
// matches the GitHub calendar's refresh, so the squares stay current
export const revalidate = 43200;

export default function Image() {
  return ogImage({
    lines: ["Sai Zayar", "Hein"],
    subtitle: [site.role, `Bangkok · ${site.workModes}`],
  });
}
