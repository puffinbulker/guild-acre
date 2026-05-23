import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyCorridorRedirect({ params }: Props) {
  const { slug } = await params;

  redirect(`/corridor-coverage/${slug}`);
}
