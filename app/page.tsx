import { CompanyDelete } from "@/components/company/CompanyDelete";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

type companyIndex = [
  {
    id: 1;
    name: "株式会社A";
    description: "株式会社Aは株式会社Aです。";
    created_at: "2021-01-01 00:00:00";
  }
];
export default async function Home() {
  const companies: companyIndex = await fetch(`http://localhost/api/company`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(response => response.json());
  return (
    <>
      <Link href="/create">新規作成</Link>
      <Table>
        <TableCaption>企業一覧</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>名前</TableHead>
            <TableHead>説明</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map(company => (
            <TableRow key={company.id}>
              <TableCell>{company.id}</TableCell>
              <TableCell>
                <Link href={`/${company.id}/edit`}>{company.name}</Link>
              </TableCell>
              <TableCell>{company.description}</TableCell>
              <TableCell>
                <CompanyDelete id={company.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Toaster />
    </>
  );
}
