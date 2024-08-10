import { Dashboard } from "@/components/dasboard";
import { db } from "@/server";
import { columns } from "@/components/columns";
export default async function DashBoardPage() {
  const userData = await db.query.wowiUser.findMany({
    columns: {
      password: false,
    },
  });
  if (userData.length === 0) {
    return (
      <div className="text-lg font-bold text-center  "> No result found </div>
    );
  }

  return (
    <>
      <Dashboard data={userData} columns={columns} />
    </>
  );
}
