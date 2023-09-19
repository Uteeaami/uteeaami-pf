export async function fetchFromStrapi() {
  try {
    const response = await fetch(
      `${process.env.STRAPI_PROD_URL}/api/portfolio?populate[text][populate]&populate[faculty][populate]&populate[projectInfo][populate][0]=tag&populate[projectInfo][populate]=icon&populate[projectInfo][populate]=href&populate[portrait][populate]=icon&populate[projects][populate]&populate[reel][populate][0]=technologies`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_PROD_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Fetch request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
}
