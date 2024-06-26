import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <h1 className="mb-[20px] text-[30px] text-[#519d69]">Products</h1>
      <hr className="mb-[20px]" />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
