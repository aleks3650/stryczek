export default async function CakePage({ params }) {
  const { cake } = await params;
  return <div className="mt-52">Ciasto: {decodeURIComponent(cake)}</div>;
}
