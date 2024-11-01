import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryInfo from "../pages/CountryInfo";
import CountryList from "../pages/CountryList";
import Body from "../layout/Body";
import Error from "../pages/Error";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<CountryList />} />
          <Route path="/country/:countryCode" element={<CountryInfo />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
