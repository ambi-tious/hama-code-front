"use client";
import { TrashIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const CompanyDelete = ({ id }: { id: number }) => {
  const router = useRouter();

  async function onSubmit() {
    const response = await fetch(`http://localhost/api/company/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status === 200) {
      router.refresh();
    }
  }

  return (
    <Button size="sm" onClick={onSubmit}>
      <TrashIcon />
    </Button>
  );
};
