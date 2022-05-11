import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { Header, TableList } from "../../components/portfolio";
import { getPortfoliosAsync } from "../../reducers/portfolios/slice";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const portfolios = useAppSelector((state) => state.portfolios.entities);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPortfoliosAsync());
  }, []);

  const handleCreate = () => {
    navigate("/admin/portfolios/create");
  };

  return (
    <>
      <div className="mb-4">
        <Header
          title="Portfolios"
          textAction="Crear nuevo"
          handleAction={handleCreate}
        />
      </div>

      {/* <TableList portfolios={portfolios} /> */}
    </>
  );
};
