const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjc5YmNlMmVhYWQ5NTlmMzk2ZTI0OGIxOGI5YjljYyIsInN1YiI6IjY2M2RjNGRiMzA0MmYzNWJlM2ZiMTk3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kyl7hlO5xyvkv-ajzqoRmRSqnv_LE7Ri75cDqu08BhA",
  },
};

export const apiCall = async (query) => {
  try {
    const resp = await fetch(query, options);
    if (!resp.ok) throw new Error(`HTTP error: ${resp.status}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
};
