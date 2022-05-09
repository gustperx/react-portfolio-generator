import { useEffect } from "react";
import { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header, TableList } from "../../components/portfolio";
import { PortfolioModel } from "../../models";
import { portfolioReducer } from "../../reducers";
import { getPortfoliosAsync } from "../../reducers/portfolioSlice";

export const HomePage = () => {
  /* const [portfolios, dispatch] = useReducer(portfolioReducer, []); */

  /* const altPort = useSelector((state) => state.portfolio); */

  const dispatch = useDispatch();
  const portfolios = useSelector((state) => state.portfolios);

  const navigate = useNavigate();

  /* const loadData = async () => {
    console.log("call");
    try {
      const data = await PortfolioModel.findAll();
      dispatch({
        type: "load",
        payload: data,
      });
    } catch (error: unknown) {
      dispatch({
        type: "load",
        payload: [],
      });
    }
  }; */

  useEffect(() => {
    /* loadData(); */
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

      <TableList portfolios={portfolios} />
    </>
  );
};
