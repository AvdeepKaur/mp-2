import { useEffect, useState } from "react";
import { type Item } from "./interfaces/Items.ts";
import HyruleCompendium from "./components/HyruleCompendium.tsx";
import styled from "styled-components";

const ParentDiv = styled.div`
  margin: auto;
  background: #f8f8ff;
`;

export default function App() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters"
      );
      const raw = await res.json();
      setData(raw.data);
    }
    fetchData();
  }, []);

  return (
    <ParentDiv>
      <HyruleCompendium data={data} />
    </ParentDiv>
  );
}
