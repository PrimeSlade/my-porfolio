export const GITHUB_USERNAME = "PrimeSlade";

export type ContributionDay = { date: string; count: number; level: number };

/** Last year of public contributions, refreshed every 12 hours; null if the API is down. */
export async function getContributions(): Promise<{ total: number; days: ContributionDay[] } | null> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`, {
      next: { revalidate: 43200 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return { total: data.total.lastYear, days: data.contributions };
  } catch {
    return null;
  }
}
