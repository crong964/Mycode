import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import User from "./route/user/User";
import Layout from "./route/Layout";
import Albums from "./route/albums/Albums";
import UserId from "./route/user/id/User";
import AlbumsId from "./route/albums/id/AlbumsId";

function App() {


  return (
    <BrowserRouter basename="/" >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/user" >
            <Route index element={<User />} />
            <Route path=":id" element={<UserId />} />
          </Route>
          <Route path="/albums" >
            <Route index
              element={<Albums />} />
            <Route path=":id" element={<AlbumsId />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={<Navigate to="/user" replace />}
        />
      </Routes>
    </BrowserRouter >
  )
}

export default App
