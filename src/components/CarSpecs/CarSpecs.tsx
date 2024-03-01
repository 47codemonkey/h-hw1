import React from 'react';

import { useCarSpecs } from 'src/components/CarSpecs/hook';

import './carSpect.css';

type Spec = {
  id: number;
  brand: string;
  models: {
    id: number;
    name: string;
    collection: {
      id: number;
      version: string;
      year: number;
      horsepower: number;
      engine: number;
    }[];
  }[];
};

type CarsProps = {
  specs: Spec[];
};

export const CarSpecs: React.FC<CarsProps> = ({ specs }) => {
  const { handleClick, openSpecs } = useCarSpecs();

  return (
    <table className="wrapper">
      <tbody>
        {specs.map(({ id, brand, models }) => (
          <React.Fragment key={id}>
            <tr className="brand-wrapper" onClick={() => handleClick(id)}>
              <td className="brand-name" colSpan={2}>
                {brand}
              </td>
            </tr>
            {openSpecs === id &&
              models.map(({ id: modelId, name, collection }) => (
                <tr key={modelId} className="specs-wrapper">
                  <td className="specs-name">{name}</td>
                  <td className="specs-list">
                    {collection.map(({ id: collectionId, version, year, horsepower, engine }) => (
                      <ul key={collectionId}>
                        <li>Version: {version}</li>
                        <li>Year: {year}</li>
                        <li>Horsepower: {horsepower}</li>
                        <li>Engine: {engine}</li>
                      </ul>
                    ))}
                  </td>
                </tr>
              ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};
