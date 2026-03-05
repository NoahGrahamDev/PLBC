import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import YouTubeEmbed from "../components/YouTubeEmbed";

const CHANNEL_ID = "UCOwgx7lSatXGdm2FVkNrcUg";
const YOUTUBE_VIDEOS_URL = `https://www.youtube.com/channel/${CHANNEL_ID}/videos`;
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

type Video = {
  id: string;
  title: string;
  publishedAt: string;
};

export const metadata: Metadata = {
  title: "Sermons | Prairie Lea Baptist Church",
  description: "Watch and listen to recent sermons from Prairie Lea Baptist Church on YouTube.",
};

function decodeHtmlEntities(input: string) {
  const entities: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'",
  };

  return input.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&apos;/g, (entity) => entities[entity] ?? entity);
}


async function getVideos(): Promise<Video[]> {
  try {
    const requestOptions = [
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          Accept: "application/atom+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
        },
        next: { revalidate: 3600 },
      },
      {
        next: { revalidate: 3600 },
      },
    ] as const;

    let response: Response | null = null;

    for (const options of requestOptions) {
      const result = await fetch(RSS_URL, options);

      if (result.ok) {
        response = result;
        break;
      }
    }

    if (!response) {
      throw new Error("Failed to fetch YouTube feed");
    }

    const xmlText = await response.text();
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    const videos: Video[] = [];

    for (const match of xmlText.matchAll(entryRegex)) {
      const entry = match[1];
      const idMatch = entry.match(/<yt:videoId>([\s\S]*?)<\/yt:videoId>/);
      const titleMatch = entry.match(/<title>([\s\S]*?)<\/title>/);
      const publishedMatch = entry.match(/<published>([\s\S]*?)<\/published>/);

      if (!idMatch || !titleMatch || !publishedMatch) {
        continue;
      }

      videos.push({
        id: idMatch[1].trim(),
        title: decodeHtmlEntities(titleMatch[1].trim()),
        publishedAt: publishedMatch[1].trim(),
      });

      if (videos.length >= 4) {
        break;
      }
    }

    return videos
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 4);
  } catch {
    return [];
  }
}

export default async function SermonsPage() {
  const videos = await getVideos();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="mb-6 font-[var(--font-arvo)] text-3xl font-bold text-gray-900 lg:text-4xl">Sermons</h1>
          <p className="mb-8 font-[var(--font-open-sans)] text-lg text-gray-700">
            Watch our latest sermons from YouTube. New videos are refreshed every hour.
          </p>

          {videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <YouTubeEmbed videoId={video.id} title={video.title} />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 font-[var(--font-arvo)]">{video.title}</h3>
                    <p className="text-sm text-gray-600 font-[var(--font-open-sans)]">
                      {new Date(video.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <p className="mb-4 font-[var(--font-open-sans)] text-lg text-gray-700">
                We couldn&apos;t load recent sermon videos right now.
              </p>
              <a
                href={YOUTUBE_VIDEOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#2563eb] px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-[#1d4ed8]"
              >
                View Sermons on YouTube
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
