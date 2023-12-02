import React, { useState, useEffect } from "react";
import { fetchData } from "../services/api";
import { filterData, generatePieChartData } from "../services/dataManipulation";
import DataTable from "./DataTable";
import PieChart from "./PieCharts";

const Data = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  /**
   * The function fetchDataFromAPI fetches data from an API and updates the state with the fetched
   * data.
   */
    const fetchDataFromAPI = async () => {
      try {
        setIsLoading(true);

        const data = await fetchData(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); 
      }
    };

    fetchDataFromAPI();
  }, []);

  const filteredData = filterData(posts, 1);

  const pieChartData = generatePieChartData(posts, 1);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-900"></div>
        </div>
      ) : (
        <>
          <DataTable data={filteredData} />
          <PieChart data={pieChartData} />
        </>
      )}
    </div>
  );
};

export default Data;
