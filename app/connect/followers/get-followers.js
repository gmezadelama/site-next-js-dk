"use server";

export default async function getFollowers() {
  const response = await fetch(
    "https://spotify-api-wrapper.appspot.com/artist/david-kando",
    { next: { revalidate: 60 } }
  );
  const json = await response.json();

  if (json?.artists?.items?.length > 0) {
    const followers = json.artists.items[0].followers.total;

    return followers;
  }

  throw new Error("Error fetching follower count");
}
