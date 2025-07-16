import styled from "styled-components";
import { type Item } from "../interfaces/Items.ts";

const CompendiumHeader = styled.header`
  width: 100vw;
  background: #d1b48c;
  padding: 32px 0 16px 0;
  text-align: center;
  box-shadow: 0 2px 14px rgba(60, 40, 0, 0.12);
`;

const CompendiumTitle = styled.h1`
  color: #25190a;
  font-family: "Cinzel", serif;
  font-size: calc(22px + 2vw);
  font-weight: bold;
  letter-spacing: 2.5px;
  margin: 0;
`;

const CompendiumList = styled.div`
  background: #25190a;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const ItemRow = styled.div`
  display: flex;
  align-items: center;
  background: #3b2916;
  margin: 12px auto;
  width: 85%;
  border-radius: 12px;
  padding: 10px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.2s;
  &:hover {
    background: #46351e;
  }
`;

const ItemImage = styled.img`
  height: 64px;
  width: 64px;
  object-fit: cover;
  margin-right: 28px;
  border-radius: 8px;
  border: 2px solid #634901;
  background: #fff5db;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  color: #ffe16b;
  font-size: calc(5px + 1vw);
  font-family: "Cinzel", serif;
  font-weight: bold;
  letter-spacing: 1.2px;
`;

const ItemDescription = styled.span`
  color: #bb9258;
  font: italic calc(2px + 1vw) "Cinzel", serif;
  margin-bottom: 6px;
`;

const ItemCategory = styled.span`
  color: #d1b48c;
  font: bold calc(3px + 1vw) "Cinzel", serif;
`;

export default function HyruleCompendium({ data }: { data: Item[] }) {
  return (
    <>
      <CompendiumHeader>
        <CompendiumTitle>Hyrule Monster Compendium</CompendiumTitle>
      </CompendiumHeader>
      <CompendiumList>
        {data.map((item) => (
          <ItemRow key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemInfo>
              <ItemName>{item.name.toUpperCase()}</ItemName>
              <ItemCategory>Category: {item.category}</ItemCategory>
              <ItemDescription>{item.description}</ItemDescription>
            </ItemInfo>
          </ItemRow>
        ))}
      </CompendiumList>
    </>
  );
}
