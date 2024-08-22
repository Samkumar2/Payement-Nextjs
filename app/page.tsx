import Image from "next/image";
import Topcard from "./Topcard";
import Barchart from "./Barchart";
import RecentOrders from "./RecentOrders";


export default function Home() {
  return (
   <main >
    
    <Topcard/>
    <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-6">

  <Barchart/>
<RecentOrders/>

</div>
   </main>

  );
}
