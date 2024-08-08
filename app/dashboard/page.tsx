import { Dashboard } from "@/components/dasboard";
import { db } from "@/server";
import { columns } from "@/components/columns";
export default async function DashBoardPage() {
  const userData = await db.query.wowiUser.findMany({
    columns: {
      password: false,
    },
  });

  return <Dashboard data={userData} columns={columns} />;
}
