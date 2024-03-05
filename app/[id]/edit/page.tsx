import { CompanyEdit } from "@/components/company/CompanyEdit";
export default async function Edit({ params }: { params: { id: number } }) {
  const company = await fetch(`http://localhost/api/company/${params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(response => response.json());

  return <CompanyEdit company={company} />;
}
