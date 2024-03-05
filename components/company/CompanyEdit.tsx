"use client";

import { CompanyForm } from "@/components/company/CompanyForm";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "企業名は３文字以上で入力して下さい"
  }),
  description: z.string()
});

export function CompanyEdit({ company }: { company: any }) {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: company.name,
      description: company.description
    }
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch(`http://localhost/api/company/${company.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });
    if (response.status === 200) {
      toast({
        description: "保存に成功しました。"
      });
      router.replace("/");
      router.refresh();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CompanyForm form={form} />
      </form>
    </Form>
  );
}
