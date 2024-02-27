import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"

type companyIndex = [{
  id: 1,
  name: "株式会社A",
  description: "株式会社Aは株式会社Aです。",
  created_at: "2021-01-01 00:00:00"
}]
export default async function Home() {
  const companies: companyIndex = await fetch(`http://localhost/company`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(response => response.json());
  // console.log(companies);
  return (
    <>
    <Link href="/create" >
    新規作成
    </Link>
    <Table>
  <TableCaption>企業一覧</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">ID</TableHead>
      <TableHead>名前</TableHead>
      <TableHead>説明</TableHead>
      <TableHead className="text-right">作成日</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
            {companies.map(company => (
              <TableRow key={company.id}>
                <TableCell>{company.id}</TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.description}</TableCell>
                <TableCell className="text-right">{company.created_at}</TableCell>
              </TableRow>
            ))}
  </TableBody>
</Table>

    </>
  );
}
