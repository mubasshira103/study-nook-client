

export const fetchStudyNook = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/rooms`);
  const data = await res.json();
  return data || [];
};

export const fetchFeatured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/featured`);
  const data = await res.json();
  return data || [];
};
