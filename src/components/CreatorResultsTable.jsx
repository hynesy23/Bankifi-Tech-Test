import React from "react";
import image from "../marvel-image.jpeg";

export default function CreatorResultsTable({ result }) {
  return (
    <>
      {result && result.thumbnail.path ? (
        <img
          src={`${result.thumbnail.path}/landscape_incredible.jpg`}
          alt="marvel_image"
          className="gen_image"
        />
      ) : (
        <>
          {result && (
            <a
              title={`No image available for ${result.fullName}. Here's a nice generic Marvel pic instead`}
            >
              <img src={image} className="gen_image" alt="Marvel logo" />
            </a>
          )}
        </>
      )}
      {result && <h2>{result.fullName}</h2>}
      {result && (
        <table>
          <tr>
            <td>{result.fullName.toUpperCase()}'S BIOGRAPHY: </td>
            {result.description ? (
              <td>{result.description}</td>
            ) : (
              <td>
                No bio available (I know! {result.fullName} doesn't have a bio!
                crazy, right?)
              </td>
            )}
          </tr>
          <tr>
            <td>Popular Comics {result.fullName} has contributed to:</td>
            <td>
              {result &&
                result.comics.items.map(item => {
                  return <p key={item.id}>{item.name}</p>;
                })}
            </td>
          </tr>
          <tr>
            <td>Popular Events {result.fullName} has contributed to:</td>
            <td>
              {result.events.items.map(item => {
                return <p key={item.id}>{item.name}</p>;
              })}
            </td>
          </tr>
          <tr>
            <td>Popular Stories {result.fullName} has contributed:</td>
            <td>
              {result.stories.items.map(item => {
                return <p key={item.id}>{item.name}</p>;
              })}
            </td>
          </tr>
        </table>
      )}
    </>
  );
}
