import React from "react";
import image from "../marvel-image.jpeg";

export default function CharacterResultsTable({ result }) {
  return (
    <>
      {result && result.thumbnail.path ? (
        <img src={`${result.thumbnail.path}/landscape_incredible.jpg`} alt="" />
      ) : (
        <>
          {result && (
            <a
              title={`No image available for ${result.name}. Here's a nice generic Marvel pic instead`}
            >
              <img src={image} className="gen_image" />
            </a>
          )}
        </>
      )}
      {result && <h2>{result.name}</h2>}
      {result && (
        <table>
          <tr>
            <td>{result.name.toUpperCase()}'S BIOGRAPHY: </td>
            <td>{result.description}</td>
          </tr>
          <tr>
            <td>Popular Comics {result.name} has Appeared in:</td>
            <td>
              {result &&
                result.comics.items.map(item => {
                  return <p>{item.name}</p>;
                })}
            </td>
          </tr>
          <tr>
            <td>Popular Events {result.name} has appeared in:</td>
            <td>
              {result.events.items.map(item => {
                return <p>{item.name}</p>;
              })}
            </td>
          </tr>
          <tr>
            <td>Popular Stories {result.name} has appareared in:</td>
            <td>
              {result.stories.items.map(item => {
                return <p>{item.name}</p>;
              })}
            </td>
          </tr>
        </table>
      )}
    </>
  );
}
