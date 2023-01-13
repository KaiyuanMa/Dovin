import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGetAllStepSets } from "../../api/stepSet";

function Customizations() {
  const [customizations, setCustomizations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiGetAllStepSets();
        setCustomizations(response.data);
      } catch (ex) {
        console.log(ex);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {customizations.map((customization) => {
        return (
          <Link key={customization.id} to={`customization/${customization.id}`}>
            <li>{customization.name}</li>
          </Link>
        );
      })}
    </div>
  );
}

export default Customizations;
