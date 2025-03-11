import React from "react";
import CenterContainer from "../components/CenterContainer";

// ROUTING # 1 SETUP install react-router
import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { Button } from "@nextui-org/react";

const LoginPage = (props) => {
  // ROUTING # 6 untuk pindah halaman di react component itu kita bisa manfaatkan hooks useNavigate
  // dimana dia akan mengembalikan function navigate yang bisa digunakanan untuk navigasi halaman
  // dan kalau misal mau go Back bisa pakai navigate(-1)
  const navigate = useNavigate();
  return (
    <CenterContainer>
      <Button
        onPress={() => {
          localStorage.setItem("hasLogin", "true");
          navigate("/dashboard");
        }}
      >
        KLIK UNTUK LOGIN
      </Button>
    </CenterContainer>
  );
};

const DashboardPage = (props) => {
  const navigate = useNavigate();
  return (
    <CenterContainer>
      Home Admin Dashboard{" "}
      <Button
        onPress={() => {
          localStorage.removeItem("hasLogin");
          navigate("/login");
        }}
      >
        KLIK UNTUK LOGOUT
      </Button>
      {/* kalau relative pathnya, urlnya akan ke tembah */}
      {/* ROUTING # 6 kalau ingat html untuk navigasi itu <a>ANCHOR TAG</a>
      masalahnya dengan menggunakan <a>ANCHOR TAG</a>
      itu bukan untuk Single Page Application (SPA)
      jadi kalau paksa <a></a> sebenernya bisa,cuma sayang jadi ke reload webnya
      jadi malah dapet minusnya SPA (load pertama kali itu lama, karena download file js, html dan css semua halaman)
      nah maka dari itu salah satu untuk navigasi dengan element itu pakai NavLink
      supaya gak reload pagenya
      */}
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
        index
      >
        HOME
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
        to="menus"
      >
        Menus Relative Path
      </NavLink>
      {/* | Link | URL | isActive | | ----------------------------- | ------------ |
      -------- | |
      `
      <NavLink to="/tasks" />` | `/tasks` | true | | `
      <NavLink to="/tasks" />` | `/tasks/123` | true | | `
      <NavLink to="/tasks" end />` | `/tasks` | true | | `
      <NavLink to="/tasks" end />` | `/tasks/123` | false | */}
      {/* end itu untuk isActive ya, untuk styling jadi kalau isActive biasanya nyala */}
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
        to="/dashboard/menus"
        end
      >
        Menus Absolute with end
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
        to="/dashboard/users"
        end
      >
        Users
      </NavLink>
    </CenterContainer>
  );
};

const RoutingIndex = () => {
  return (
    // ROUTING # 1 SETUP masukan provider untuk Routing yaitu <BrowserRouter></BrowserRouter> dan
    // juga apit/wrap dengan <Routes></Routes>
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        {/*  ROUTING # 2 Buat Route2 dari setiap halaman/resource dengan element <Route></Route>
         bisa juga Self Closing tag, jika misal routenya gak punya sub routing gak ada sub pathnya
         kita tinggal masukan props path misal path="/" dan kemudian props element, 
         untuk element yang akan ditampilkan
         jika browser berada di path url tersebut
           */}
        <Route
          path="/"
          // bisa diganti dengan props index, atau index={true}
          // jangan lupa diisi dengan Element bukan Component, CenterContainer=component, <CenterContainer>HOME</CenterContainer> = element
          element={<CenterContainer>HOME</CenterContainer>}
        />

        {/* PRIVATE PAGE (ADMIN AREA) HARUS LOGIN TERLEBIH DAHULU */}
        <Route
          path="/"
          // Private URL (KHUSUS ADMIN)
          // bisa diganti dengan props index, atau index={true}
          element={
            // {/* ROUTING # 5 kita bisa bungkus children element dengan ProtectedRoute
            // dibungkus ProtectedRoute supaya childrennya hanya bisa diakses misal ketika login (Authenticated)  */}
            <ProtectedRoute>
              {/* Harus Login dulu misal */}

              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route
            // path adalah identifier untuk halaman website
            // path sama seperti yang diambil dari strukture url web
            // yaitu path itu setelah base url atau domain dan portnya jika ada
            // (kalau gak muncul portnya atau gak visible portnya, berarti dia pakai port 80)
            path="/dashboard"
            element={
              <CenterContainer>
                Element yang ditampilkan
                <DashboardPage />
                <Outlet />
              </CenterContainer>
            }
          >
            <Route
              // ROUTING # 2 kita bisa ganti path dengan props index,
              // menandakan dia akan ikut dengan parent routenya
              // path="" path kosong
              // path="/dashboard" absolute pathnya sama dengan dashboard
              index // index itu sama dengan yang diatas, cuma mempersingkat penulisan
              element={<DashboardPage />}
            />
            <Route
              // ROUTING # 2 relative path (relative dari path parentnya)
              // ini relative path, artinya meneruskan/melanjutkan parent pathnya yaitu /dashboard
              // untuk akses di webnya berarti /dashboard/users
              path="users"
              element={<CenterContainer>Users</CenterContainer>}
            />
            <Route
              // ROUTING # 2 absolute path (absolute dari awal path)
              // ini contoh absolute path, tidak mempedulikan path parentnya,
              // dia absolute karena mulai dari path awal (setelah baseurl, domain.com)
              path="/dashboard/menus"
              element={<CenterContainer>Menu</CenterContainer>}
            />
          </Route>
        </Route>

        {/* PUBLIC PAGE (TANPA LOGIN) */}
        <Route
          path="/"
          element={
            // Public URL
            <PublicRoute>
              {/* ROUTING # 3 Sub routing,
              caranya tinggal tambahin <Route sebagai children dari suat <Route
              kemudian di parentnya itu kita berikan <Outlet/> element untuk menampilkan childrennya, sesuai dengan path browser saat ini
              jadi <Outlet /> akan di replace oleh salah satu element children 
              */}
              {/* Authentication Layout */}
              <Outlet />
            </PublicRoute>
          }
        >
          <Route path="/login" element={<LoginPage />} />
          {/* dikomen karena website admin, tidak ada halaman register
          <Route path="/register" element={<RegisterPage />} /> */}
        </Route>
        {/* ROUTING # 4 path="*" kan path wild card, nah biasa untuk page not found */}
        <Route
          path="*"
          element={<CenterContainer>PAGE NOT FOUND</CenterContainer>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingIndex;
