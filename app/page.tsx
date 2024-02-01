import Table from "@/components/Table";


export default function Home() {

  return (
    <main className="bg-[#ffffe5] h-full flex flex-col justify-start items-center">
      <div className="p-3 rounded gap-7 flex flex-col sm:flex-row sm:flex-wrap sm:gap-10 py-10">
        <div className="bg-[#f4ec81] p-3 rounded">
          <Table />
        </div>
        <div className="bg-[#f4ec81] p-3 rounded">
          <Table />
        </div>
        <div className="bg-[#f4ec81] p-3 rounded">
          <Table />
        </div>
      </div>
    </main>
  );
}
