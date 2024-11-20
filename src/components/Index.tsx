import { SearchNormal1 } from "iconsax-react";

function Index() {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <h1 className="text-xl font-semibold py-4">Product Management App</h1>
        <div className="w-full flex justify-between mb-3">
            <button className="">Pilih</button>
            <div className="w-fit flex items-center gap-2 bg-white border border-zinc-100 rounded-full overflow-hidden"><input type="text" placeholder="Find by name or category here..." className="bg-transparent outline-none pl-4 w-64"/><div className="px-4 py-2 rounded-full"><SearchNormal1 className="w-5 text-gray-900"/></div></div>
        </div>
        <div className="py-4 bg-white border border-gray-100 rounded-lg">
          <div className="w-fit">
              <tr className="mx-4 flex gap-3">
                  <th className="text-xs text-zinc-400 pb-3 font-semibold text-left w-16">NO.</th>
                  <th className="text-xs text-zinc-400 pb-3 font-semibold text-left w-80">PRODUCT NAME</th>
                  <th className="text-xs text-zinc-400 pb-3 font-semibold text-left w-20">PRICE</th>
                  <th className="text-xs text-zinc-400 pb-3 font-semibold text-left w-28">CATEGORY</th>
              </tr>
              <hr className="w-full border-zinc-100"/>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
