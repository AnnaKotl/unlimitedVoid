import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import CardList from "../components/Cards/CardList";
import DateFilter from "../components/Controls/DateFilter";

export default function Home() {
  const [dateRange, setDateRange] = useState({ from: null, to: null });

  return (
    <Layout onFilter={setDateRange}>
      <div className="md:hidden">
        <DateFilter onFilter={setDateRange} />
      </div>
      <main className="pt-3 md:pt-[18px] pb-6 md:pb-10">
        <CardList dateRange={dateRange} />
      </main>
    </Layout>
  );
}
