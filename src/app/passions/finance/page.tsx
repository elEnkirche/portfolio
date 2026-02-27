import WealthSimulator from "@/components/SimulateurPatrimoine";


export default async function FinancePage() {
return (
    <div className="relative md:fixed overflow-hidden w-full h-auto mb-5 md:mt-5 mt-10">
        <WealthSimulator/>
    </div>
  )
}