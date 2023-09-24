import type { QueryFunction } from "@tanstack/query-core";

export interface ImageData {
  id: number;
  collections: number;
  comments: number;
  downloads: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
}

export interface ImageSearchResult {
  hits: ImageData[];
  total: number;
  totalHits: number;
}

export type QueryImagesKey = [_key: string, params: { q: string }];

export const queryImages: QueryFunction<
  ImageSearchResult,
  QueryImagesKey
> = async ({ queryKey }) => {
  const [_key, { q }] = queryKey;

  let params = `?key=${process.env.NEXT_PUBLIC_API_KEY}`;
  if (q) {
    params += `&q=${q}`;
  }

  const baseUrl = "https://pixabay.com/api/";

  const res = await fetch(baseUrl + params);

  if (!res.ok) {
    throw new Error("Request failed: " + res.status + " - " + res.statusText);
  }

  return res.json();
};
